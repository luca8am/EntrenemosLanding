"use client";

import Image from "next/image";
import { useEffect, useReducer, useRef, type KeyboardEvent } from "react";
import { Button } from "@/components/ui/Button";

type DemoStep = "routine" | "session" | "finished";

interface SetValues {
  weight: string;
  reps: string;
}

interface DemoSet extends SetValues {
  done: boolean;
}

interface SetPosition {
  exercise: number;
  set: number;
}

interface DemoState {
  step: DemoStep;
  openExercise: number | null;
  sets: DemoSet[][];
  message: string;
  error: SetPosition | null;
}

type DemoAction =
  | { type: "start" }
  | { type: "toggle-exercise"; exercise: number }
  | { type: "edit-set"; position: SetPosition; field: keyof SetValues; value: string }
  | { type: "complete-set"; position: SetPosition }
  | { type: "finish" }
  | { type: "reset" };

// `firstSet` es lo que sugiere la primera serie de cada ejercicio (datos de ejemplo).
const exercises = [
  { name: "Press de banca", sets: 4, firstSet: { weight: "60", reps: "10" } },
  { name: "Remo con barra", sets: 4, firstSet: { weight: "50", reps: "10" } },
  { name: "Press militar", sets: 3, firstSet: { weight: "30", reps: "10" } },
];

const totalSets = exercises.reduce((total, exercise) => total + exercise.sets, 0);

const initialState: DemoState = {
  step: "routine",
  openExercise: null,
  sets: exercises.map((exercise) =>
    Array.from({ length: exercise.sets }, () => ({ weight: "", reps: "", done: false })),
  ),
  message: "Demo lista. Comenzá el entrenamiento para probarla.",
  error: null,
};

const inputError = "Ingresá un peso válido y al menos una repetición para completar la serie.";

// Como en la app: cada serie sugiere los valores de la anterior y, si un campo
// queda vacío, se registra ese valor sugerido.
function hintFor(sets: DemoSet[], exercise: number, index: number): SetValues {
  return index === 0 ? exercises[exercise].firstSet : resolveSet(sets, exercise, index - 1);
}

function resolveSet(sets: DemoSet[], exercise: number, index: number): SetValues {
  const hint = hintFor(sets, exercise, index);
  return { weight: sets[index].weight || hint.weight, reps: sets[index].reps || hint.reps };
}

// Solo números: hasta 3 enteros y 2 decimales para el peso (acepta coma o punto),
// y hasta 3 dígitos para las repeticiones.
function sanitizeWeight(value: string) {
  const [integer = "", ...decimals] = value.replace(",", ".").replace(/[^\d.]/g, "").split(".");
  const cleanInteger = integer.slice(0, 3);
  return decimals.length > 0 ? `${cleanInteger}.${decimals.join("").slice(0, 2)}` : cleanInteger;
}

function sanitizeReps(value: string) {
  return value.replace(/\D/g, "").slice(0, 3);
}

function isValidWeight(value: string) {
  return value !== "" && value !== "." && Number.isFinite(Number(value));
}

function isValidReps(value: string) {
  return Number.isInteger(Number(value)) && Number(value) >= 1;
}

function isValidSet({ weight, reps }: SetValues) {
  return isValidWeight(weight) && isValidReps(reps);
}

function formatWeight(value: string) {
  return Number(value).toLocaleString("es-AR");
}

function updateSet(sets: DemoSet[][], { exercise, set }: SetPosition, update: Partial<DemoSet>) {
  return sets.map((exerciseSets, exerciseIndex) =>
    exerciseIndex === exercise
      ? exerciseSets.map((current, setIndex) => (setIndex === set ? { ...current, ...update } : current))
      : exerciseSets,
  );
}

function reducer(state: DemoState, action: DemoAction): DemoState {
  switch (action.type) {
    case "start":
      return { ...state, step: "session", message: "Entrenamiento iniciado." };
    case "toggle-exercise": {
      const closing = state.openExercise === action.exercise;
      const name = exercises[action.exercise].name;
      return {
        ...state,
        openExercise: closing ? null : action.exercise,
        message: closing ? `${name} cerrado.` : `${name} abierto.`,
        error: null,
      };
    }
    case "edit-set": {
      const value = action.field === "weight" ? sanitizeWeight(action.value) : sanitizeReps(action.value);
      const isErrorSet = state.error?.exercise === action.position.exercise && state.error.set === action.position.set;
      return {
        ...state,
        sets: updateSet(state.sets, action.position, { [action.field]: value }),
        error: isErrorSet ? null : state.error,
      };
    }
    case "complete-set": {
      // Completar una serie también completa las anteriores pendientes del ejercicio,
      // con lo que muestran en pantalla (valor cargado o sugerido).
      const { exercise, set } = action.position;
      const exerciseSets = state.sets[exercise];
      const pending = exerciseSets
        .map((current, index) => ({ index, done: current.done, values: resolveSet(exerciseSets, exercise, index) }))
        .filter(({ index, done }) => index <= set && !done);
      const invalid = pending.find(({ values }) => !isValidSet(values));
      if (invalid) return { ...state, message: inputError, error: { exercise, set: invalid.index } };

      const sets = pending.reduce(
        (current, { index, values }) => updateSet(current, { exercise, set: index }, { ...values, done: true }),
        state.sets,
      );
      const values = resolveSet(exerciseSets, exercise, set);
      const earlier = pending.length - 1;
      return {
        ...state,
        sets,
        message: `${exercises[exercise].name}, serie ${set + 1} completada: ${formatWeight(values.weight)} kg por ${values.reps} repeticiones.${earlier === 1 ? " También se completó la serie anterior." : earlier > 1 ? ` También se completaron ${earlier} series anteriores.` : ""}`,
        error: null,
      };
    }
    case "finish": {
      // Las series pendientes se completan con lo que se ve en pantalla (valor o sugerido).
      const resolved = state.sets.map((exerciseSets, exercise) =>
        exerciseSets.map((set, index) => (set.done ? set : resolveSet(exerciseSets, exercise, index))),
      );
      for (const [exercise, exerciseSets] of resolved.entries()) {
        const set = exerciseSets.findIndex((values) => !isValidSet(values));
        if (set !== -1) return { ...state, openExercise: exercise, message: inputError, error: { exercise, set } };
      }
      return {
        ...state,
        step: "finished",
        sets: resolved.map((exerciseSets) => exerciseSets.map((set) => ({ ...set, done: true }))),
        message: "Entrenamiento finalizado.",
        error: null,
      };
    }
    case "reset":
      return initialState;
  }
}

export function TrainingDemoTrigger({ label }: { label: string }) {
  const focusDemo = () => {
    const target = document.getElementById("training-demo-start") ?? document.getElementById("training-demo");
    if (!target) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    window.setTimeout(() => target.focus({ preventScroll: true }), reduceMotion ? 0 : 450);
  };

  return (
    <Button onClick={focusDemo}>
      {label}
    </Button>
  );
}

export function TrainingDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const panelRef = useRef<HTMLDivElement>(null);
  const finishRef = useRef<HTMLButtonElement>(null);
  const resetRef = useRef<HTMLButtonElement>(null);
  const sessionStarted = state.step !== "routine";
  const finished = state.step === "finished";
  const allSets = state.sets.flat();
  const doneCount = allSets.filter((set) => set.done).length;
  const volume = allSets.reduce((total, set) => (set.done ? total + Number(set.weight) * Number(set.reps) : total), 0);

  // Al completar, el tick o el input enfocado quedan deshabilitados: el foco pasa a
  // la próxima serie pendiente del ejercicio (o a finalizar/reiniciar) para no perderlo.
  useEffect(() => {
    if (finished) {
      resetRef.current?.focus({ preventScroll: true });
      return;
    }
    const active = document.activeElement;
    const focusLost = !active || active === document.body || (active as HTMLButtonElement | HTMLInputElement).disabled;
    if (doneCount > 0 && focusLost) {
      const nextTick = panelRef.current?.querySelector<HTMLButtonElement>(".demo-set-row:not(.is-complete) .demo-complete-set");
      (nextTick ?? finishRef.current)?.focus({ preventScroll: true });
    }
  }, [doneCount, finished]);

  return (
    <div id="training-demo" tabIndex={-1} className="training-demo" aria-label="Demostración interactiva de Entrenemos">
      <div className="demo-orbit" aria-hidden="true" />
      <div className="phone-shell">
        <div className="phone-speaker" aria-hidden="true" />
        <div className="phone-screen">
          <header className="demo-header">
            <div className="demo-brand">
              <Image src="/brand/logo-primary.webp" alt="" width={26} height={26} sizes="26px" />
              <strong>Entrenemos</strong>
            </div>
            <span className="demo-label">Demo · datos de ejemplo</span>
          </header>

          {!sessionStarted ? (
            <div className="demo-routine">
              <div className="demo-routine-heading">
                <span>Tu entrenamiento</span>
                <p className="demo-title">Día 1</p>
                <p>Tren superior</p>
              </div>

              <div className="demo-summary" aria-label="Resumen de la rutina">
                <div><strong>{exercises.length}</strong><span>ejercicios</span></div>
                <div><strong>{totalSets}</strong><span>series</span></div>
              </div>

              <div className="demo-preview-list" aria-label="Ejercicios de ejemplo">
                {exercises.map((exercise, index) => (
                  <div className="demo-preview-row" key={exercise.name}>
                    <span className="demo-exercise-index">{index + 1}</span>
                    <span><strong>{exercise.name}</strong><small>{exercise.sets} series</small></span>
                  </div>
                ))}
              </div>

              <button
                id="training-demo-start"
                className="demo-primary-action"
                type="button"
                onClick={() => dispatch({ type: "start" })}
              >
                Comenzar entrenamiento
              </button>
            </div>
          ) : (
            <div className="demo-session">
              <div className="demo-session-heading">
                <div>
                  <span>{finished ? "Sesión finalizada" : "Sesión activa"}</span>
                  <p className="demo-title">Día 1 · Tren superior</p>
                </div>
                <strong>{doneCount}/{totalSets}</strong>
              </div>

              <div className="demo-progress" aria-label={`${doneCount} de ${totalSets} series completadas`}>
                <span style={{ width: `${(doneCount / totalSets) * 100}%` }} />
              </div>
              <p className="demo-progress-copy">
                {doneCount > 0 ? `${doneCount} de ${totalSets} series completadas` : "Elegí un ejercicio para registrar tus series"}
              </p>

              <div className="demo-exercise-list">
                {exercises.map((exercise, exerciseIndex) => {
                  const isOpen = state.openExercise === exerciseIndex;
                  const exerciseSets = state.sets[exerciseIndex];
                  const exerciseDone = exerciseSets.filter((set) => set.done).length;
                  const panelId = `demo-sets-${exerciseIndex}`;
                  return (
                    <div className={`demo-exercise-card ${isOpen ? "is-open" : ""}`} key={exercise.name}>
                      <button
                        className="demo-exercise-button"
                        type="button"
                        onClick={() => dispatch({ type: "toggle-exercise", exercise: exerciseIndex })}
                        aria-expanded={isOpen}
                        aria-controls={isOpen ? panelId : undefined}
                      >
                        <span className="demo-exercise-index">{exerciseIndex + 1}</span>
                        <span className="demo-exercise-name">
                          <strong>{exercise.name}</strong>
                          <small>
                            {exercise.sets} series · {exerciseDone === exercise.sets
                              ? "Completo"
                              : exerciseDone > 0
                                ? `${exerciseDone} ${exerciseDone === 1 ? "completada" : "completadas"}`
                                : "Sin completar"}
                          </small>
                        </span>
                        <span className="demo-disclosure" aria-hidden="true" />
                      </button>

                      {isOpen && (
                        <div className="demo-set-panel" id={panelId} ref={panelRef}>
                          <div className="demo-set-head" aria-hidden="true">
                            <span>Serie</span><span>Peso en kg</span><span>Repeticiones</span><span>Estado</span>
                          </div>

                          {exerciseSets.map((set, setIndex) => {
                            const number = setIndex + 1;
                            const position = { exercise: exerciseIndex, set: setIndex };
                            const hint = hintFor(exerciseSets, exerciseIndex, setIndex);
                            const hasError = state.error?.exercise === exerciseIndex && state.error.set === setIndex;
                            const complete = () => dispatch({ type: "complete-set", position });
                            const completeOnEnter = (event: KeyboardEvent<HTMLInputElement>) => {
                              if (event.key === "Enter") complete();
                            };
                            return (
                              <div className={`demo-set-row ${set.done ? "is-complete" : ""}`} key={setIndex}>
                                <strong>{number}</strong>
                                <label>
                                  <span>Peso en kg, serie {number}</span>
                                  <input
                                    type="text"
                                    inputMode="decimal"
                                    autoComplete="off"
                                    enterKeyHint="done"
                                    maxLength={6}
                                    name={`demo-weight-${exerciseIndex}-${number}`}
                                    aria-invalid={hasError && !isValidWeight(set.weight || hint.weight)}
                                    aria-describedby={hasError ? "demo-input-error" : undefined}
                                    placeholder={hint.weight}
                                    value={set.weight}
                                    disabled={set.done}
                                    onChange={(event) => dispatch({ type: "edit-set", position, field: "weight", value: event.target.value })}
                                    onKeyDown={completeOnEnter}
                                  />
                                </label>
                                <label>
                                  <span>Repeticiones, serie {number}</span>
                                  <input
                                    type="text"
                                    inputMode="numeric"
                                    autoComplete="off"
                                    enterKeyHint="done"
                                    maxLength={3}
                                    name={`demo-reps-${exerciseIndex}-${number}`}
                                    aria-invalid={hasError && !isValidReps(set.reps || hint.reps)}
                                    aria-describedby={hasError ? "demo-input-error" : undefined}
                                    placeholder={hint.reps}
                                    value={set.reps}
                                    disabled={set.done}
                                    onChange={(event) => dispatch({ type: "edit-set", position, field: "reps", value: event.target.value })}
                                    onKeyDown={completeOnEnter}
                                  />
                                </label>
                                <button
                                  className="demo-complete-set"
                                  type="button"
                                  onClick={complete}
                                  disabled={set.done}
                                  aria-label={set.done ? `Serie ${number} completada` : `Completar serie ${number}`}
                                >
                                  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                                  </svg>
                                </button>
                              </div>
                            );
                          })}
                          {state.error?.exercise === exerciseIndex ? (
                            <p className="demo-input-error" id="demo-input-error">{inputError}</p>
                          ) : null}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {finished && (
                <div className="demo-completion">
                  <strong>Entrenamiento finalizado</strong>
                  <span>{doneCount} series · {Math.round(volume).toLocaleString("es-AR")} kg en total</span>
                </div>
              )}

              <div className="demo-session-actions">
                {!finished && (
                  <button
                    ref={finishRef}
                    className="demo-primary-action"
                    type="button"
                    onClick={() => dispatch({ type: "finish" })}
                  >
                    Finalizar entrenamiento
                  </button>
                )}
                <button
                  ref={resetRef}
                  className="demo-reset"
                  type="button"
                  onClick={() => dispatch({ type: "reset" })}
                >
                  Reiniciar demo
                </button>
              </div>
            </div>
          )}

          <p className="sr-only" aria-live="polite">{state.message}</p>
        </div>
      </div>
    </div>
  );
}
