"use client";

import Image from "next/image";
import { KeyboardEvent, PointerEvent, useMemo, useState } from "react";
import type { EcosystemSlide } from "@/lib/marketing/landing-types";

interface Props {
  slides: EcosystemSlide[];
  independentNote: string;
}

export function EcosystemCarousel({ slides, independentNote }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const activeSlide = slides[activeIndex];
  const positionLabel = `${activeIndex + 1} de ${slides.length}`;

  const announcement = useMemo(
    () => `Etapa ${positionLabel}: ${activeSlide.label}`,
    [activeSlide.label, positionLabel],
  );

  function goTo(index: number) {
    setActiveIndex((index + slides.length) % slides.length);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(activeIndex + 1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(activeIndex - 1);
    }
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse") {
      return;
    }

    setTouchStart(event.clientX);
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (touchStart === null || event.pointerType === "mouse") {
      return;
    }

    const distance = event.clientX - touchStart;
    setTouchStart(null);

    if (Math.abs(distance) < 48) {
      return;
    }

    goTo(distance < 0 ? activeIndex + 1 : activeIndex - 1);
  }

  return (
    <div
      className="ecosystem-carousel"
      aria-roledescription="carrusel"
      aria-label="Recorrido del ecosistema Entrenemos"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </p>

      <div className="ecosystem-carousel__panel" key={activeSlide.id}>
        <div className="ecosystem-carousel__copy">
          <div className="ecosystem-carousel__meta">
            <span>{String(activeIndex + 1).padStart(2, "0")}</span>
            <strong>{activeSlide.label}</strong>
          </div>
          <p className="ecosystem-carousel__role" data-role={activeSlide.roleTone}>
            {activeSlide.role}
          </p>
          <h3>{activeSlide.title}</h3>
          <p>{activeSlide.description}</p>
        </div>

        <figure className={`ecosystem-carousel__media ecosystem-carousel__media--${activeSlide.media.kind}`}>
          <div className={`ecosystem-device ecosystem-device--${activeSlide.media.kind}`} data-crop={activeSlide.media.crop}>
            {activeSlide.media.kind === "web" ? (
              <div className="ecosystem-browser-bar" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            ) : null}
            <Image
              src={activeSlide.media.src}
              alt={activeSlide.media.alt}
              width={activeSlide.media.width}
              height={activeSlide.media.height}
              sizes={
                activeSlide.media.kind === "web"
                  ? "(max-width: 760px) 92vw, 62vw"
                  : "(max-width: 760px) 76vw, 360px"
              }
              priority={activeIndex === 0}
            />
          </div>
        </figure>
      </div>

      <div className="ecosystem-carousel__controls" aria-label="Controles del carrusel">
        <button type="button" className="ecosystem-carousel__button" onClick={() => goTo(activeIndex - 1)}>
          Anterior
        </button>
        <span className="ecosystem-carousel__position" aria-label={`Etapa ${positionLabel}`}>
          {positionLabel}
        </span>
        <button type="button" className="ecosystem-carousel__button" onClick={() => goTo(activeIndex + 1)}>
          Siguiente
        </button>
      </div>

      <div className="ecosystem-carousel__steps" aria-label="Seleccionar etapa">
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.id}
            className="ecosystem-carousel__step"
            aria-label={`Ver etapa ${index + 1}: ${slide.label}`}
            aria-current={index === activeIndex ? "step" : undefined}
            onClick={() => goTo(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {slide.label}
          </button>
        ))}
      </div>

      <p className="ecosystem-independent-note">{independentNote}</p>
    </div>
  );
}
