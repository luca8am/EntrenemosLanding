"use client";

import Image from "next/image";
import { useReducer } from "react";
import { Button } from "@/components/ui/Button";

type DemoStep = "routine" | "session" | "exercise" | "completed";

interface DemoState {
  step: DemoStep;
  weight: string;
  reps: string;
  message: string;
  error: string | null;
}

type DemoAction =
  | { type: "start" }
  | { type: "open-exercise" }
  | { type: "set-weight"; value: string }
  | { type: "set-reps"; value: string }
  | { type: "complete" }
  | { type: "reset" };

const initialState: DemoState = {
  step: "routine",
  weight: "",
  reps: "",
  message: "Demo lista. Comenzá el entrenamiento para probarla.",
  error: null,
};

const exercises = [
  { name: "Press de banca", sets: 4 },
  { name: "Remo con barra", sets: 4 },
  { name: "Press militar", sets: 3 },
];

function reducer(state: DemoState, action: DemoAction): DemoState {
  switch (action.type) {
    case "start":
      return { ...state, step: "session", message: "Entrenamiento iniciado." };
    case "open-exercise":
      return { ...state, step: "exercise", message: "Press de banca abierto." };
    case "set-weight":
      return { ...state, weight: action.value, error: null };
    case "set-reps":
      return { ...state, reps: action.value, error: null };
    case "complete":
      if (
        !state.weight || !state.reps ||
        !Number.isFinite(Number(state.weight)) || Number(state.weight) < 0 ||
        !Number.isInteger(Number(state.reps)) || Number(state.reps) < 1
      ) {
        const error = "Ingresá un peso válido y al menos una repetición entera para completar la serie.";
        return { ...state, message: error, error };
      }
      return { ...state, step: "completed", message: "Serie 1 completada.", error: null };
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
  const sessionStarted = state.step !== "routine";
  const exerciseOpen = state.step === "exercise" || state.step === "completed";
  const completed = state.step === "completed";

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
                <div><strong>3</strong><span>ejercicios</span></div>
                <div><strong>11</strong><span>series</span></div>
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
                  <span>Sesión activa</span>
                  <p className="demo-title">Día 1 · Tren superior</p>
                </div>
                <strong>{completed ? "1" : "0"}/11</strong>
              </div>

              <div className="demo-progress" aria-label={`${completed ? 1 : 0} de 11 series completadas`}>
                <span style={{ width: completed ? "9.09%" : "0%" }} />
              </div>
              <p className="demo-progress-copy">{completed ? "1 de 11 series completadas" : "Elegí un ejercicio para registrar tus series"}</p>

              <div className="demo-exercise-list">
                {exercises.map((exercise, index) => {
                  const isPress = index === 0;
                  return (
                    <div className={`demo-exercise-card ${isPress && exerciseOpen ? "is-open" : ""}`} key={exercise.name}>
                      <button
                        className="demo-exercise-button"
                        type="button"
                        onClick={isPress ? () => dispatch({ type: "open-exercise" }) : undefined}
                        aria-expanded={isPress ? exerciseOpen : undefined}
                        disabled={!isPress || completed}
                      >
                        <span className="demo-exercise-index">{index + 1}</span>
                        <span className="demo-exercise-name">
                          <strong>{exercise.name}</strong>
                          <small>
                            {exercise.sets} series · {isPress && completed
                              ? "1 completada"
                              : isPress && !exerciseOpen
                                ? "Abrir ejercicio"
                                : "Sin completar"}
                          </small>
                        </span>
                        {isPress && <span className="demo-disclosure" aria-hidden="true" />}
                      </button>

                      {isPress && exerciseOpen && (
                        <div className="demo-set-panel">
                          <div className="demo-set-head" aria-hidden="true">
                            <span>Serie</span><span>Peso en kg</span><span>Repeticiones</span><span>Estado</span>
                          </div>
                          <div className={`demo-set-row ${completed ? "is-complete" : ""}`}>
                            <strong>1</strong>
                            <label>
                              <span>Peso en kg</span>
                              <input
                                inputMode="decimal"
                                name="demo-weight"
                                aria-invalid={state.error !== null && (!state.weight || !Number.isFinite(Number(state.weight)) || Number(state.weight) < 0)}
                                aria-describedby={state.error ? "demo-input-error" : undefined}
                                type="number"
                                min="0"
                                step="0.5"
                                placeholder="60"
                                value={state.weight}
                                disabled={completed}
                                onChange={(event) => dispatch({ type: "set-weight", value: event.target.value })}
                              />
                            </label>
                            <label>
                              <span>Repeticiones</span>
                              <input
                                inputMode="numeric"
                                name="demo-reps"
                                aria-invalid={state.error !== null && (!state.reps || !Number.isInteger(Number(state.reps)) || Number(state.reps) < 1)}
                                aria-describedby={state.error ? "demo-input-error" : undefined}
                                type="number"
                                min="1"
                                step="1"
                                placeholder="10"
                                value={state.reps}
                                disabled={completed}
                                onChange={(event) => dispatch({ type: "set-reps", value: event.target.value })}
                              />
                            </label>
                            <button
                              className="demo-complete-set"
                              type="button"
                              onClick={() => dispatch({ type: "complete" })}
                              disabled={completed}
                            >
                              {completed ? "Completada" : "Completar"}
                            </button>
                          </div>
                          {state.error ? <p className="demo-input-error" id="demo-input-error">{state.error}</p> : null}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {completed && (
                <div className="demo-completion">
                  <strong>Serie 1 completada</strong>
                  <span>Tu progreso se actualizó.</span>
                </div>
              )}

              <button
                className="demo-reset"
                type="button"
                onClick={() => dispatch({ type: "reset" })}
              >
                Reiniciar demo
              </button>
            </div>
          )}

          <p className="sr-only" aria-live="polite">{state.message}</p>
        </div>
      </div>
    </div>
  );
}
