"use client";

import Image from "next/image";
import { type KeyboardEvent, type PointerEvent, useRef, useState } from "react";
import type { EcosystemSlide } from "@/lib/marketing/landing-types";

interface Props {
  slides: EcosystemSlide[];
}

export function EcosystemCarousel({ slides }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const activeSlide = slides[activeIndex];
  const positionLabel = `${activeIndex + 1} de ${slides.length}`;

  const announcement = `Etapa ${positionLabel}: ${activeSlide.label}`;

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

    touchStart.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (touchStart.current === null || event.pointerType === "mouse") {
      return;
    }

    const distance = event.clientX - touchStart.current.x;
    const verticalDistance = event.clientY - touchStart.current.y;
    touchStart.current = null;

    if (Math.abs(distance) < 48 || Math.abs(distance) <= Math.abs(verticalDistance)) {
      return;
    }

    goTo(distance < 0 ? activeIndex + 1 : activeIndex - 1);
  }

  return (
    <div
      className="ecosystem-carousel"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Recorrido del ecosistema Entrenemos"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </p>

      <div className="ecosystem-carousel__panel">
        <div className="ecosystem-carousel__copy-stage">
          {slides.map((slide, index) => (
            <div key={slide.id} className="ecosystem-carousel__copy" data-active={index === activeIndex} aria-hidden={index !== activeIndex}>
              <div className="ecosystem-carousel__meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{slide.label}</strong>
                <span className="ecosystem-carousel__role" data-role={slide.roleTone}>
                  {slide.role}
                </span>
              </div>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          ))}
        </div>

        <div className="ecosystem-carousel__visual">
          <div className="ecosystem-carousel__controls" aria-label="Controles del carrusel">
            <button type="button" className="ecosystem-carousel__button" aria-label="Etapa anterior" onClick={() => goTo(activeIndex - 1)}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6" /></svg>
            </button>
            <div className="ecosystem-carousel__dots" aria-label="Elegir una etapa">
              {slides.map((slide, index) => (
                <button type="button" key={slide.id} className="ecosystem-carousel__dot"
                  title={`${String(index + 1).padStart(2, "0")} ${slide.label}`}
                  aria-label={`Ver etapa ${index + 1}: ${slide.label}`}
                  aria-current={index === activeIndex ? "step" : undefined}
                  onClick={() => goTo(index)}><span aria-hidden="true" /></button>
              ))}
            </div>
            <button type="button" className="ecosystem-carousel__button" aria-label="Etapa siguiente" onClick={() => goTo(activeIndex + 1)}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 6 6 6-6 6" /></svg>
            </button>
          </div>
          <figure className={`ecosystem-carousel__media ecosystem-carousel__media--${activeSlide.media.kind}`}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => { touchStart.current = null; }}
          >
            <div key={activeSlide.id} className={`ecosystem-device ecosystem-device--${activeSlide.media.kind}`} data-crop={activeSlide.media.crop}>
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
                    ? "(max-width: 980px) 88vw, 58vw"
                    : "(max-width: 760px) 210px, (max-height: 850px) 198px, 200px"
                }
              />
            </div>
          </figure>
        </div>
      </div>

    </div>
  );
}
