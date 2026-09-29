"use client";

import { useReducer } from "react";
import { Button } from "@/components/ui/Button";

type DemoStep = "routine" | "session" | "exercise" | "completed";

interface DemoState {
  step: DemoStep;
  weight: string;
  reps: string;
  message: string;
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
      return { ...state, weight: action.value };
    case "set-reps":
      return { ...state, reps: action.value };
    case "complete":
      if (!state.weight || !state.reps) {
        return { ...state, message: "Ingresá el peso y las repeticiones para completar la serie." };
      }
      return { ...state, step: "completed", message: "Serie 1 completada." };
    case "reset":
      return initialState;
  }
}

export function TrainingDemoTrigger({ label }: { label: string }) {
  const focusDemo = () => {
    const target = document.getElementById("training-demo-start");
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
    <div className="training-demo" aria-label="Demostración interactiva de Entrenemos">
      <div className="demo-orbit" aria-hidden="true" />
      <div className="phone-shell">
        <div className="phone-speaker" aria-hidden="true" />
        <div className="phone-screen">
          <header className="demo-header">
            <div className="demo-brand">
              <img src="/brand/logo-primary.png" alt="" />
              <strong>Entrenemos</strong>
            </div>
            <span className="demo-label">Demo · datos de ejemplo</span>
          </header>

          {!sessionStarted ? (
            <div className="demo-routine">
              <div className="demo-routine-heading">
                <span>Tu entrenamiento</span>
                <h2>Día 1</h2>
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
                  <h2>Día 1 · Tren superior</h2>
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
                disabled={!completed}
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
