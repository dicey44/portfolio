"use client";

import { useEffect, useRef } from "react";
import type { PointerEvent } from "react";

export default function CurvedHeading() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  function handlePointerMove(event: PointerEvent<HTMLHeadingElement>) {
    if (
      event.pointerType === "touch" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    pointerRef.current = {
      x: event.clientX,
      y: event.clientY,
    };

    if (frameRef.current !== null) return;

    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null;

      const heading = headingRef.current;
      if (!heading) return;

      const letters =
        heading.querySelectorAll<HTMLSpanElement>("[data-letter]");

      // Read positions before updating any styles.
      const updates = Array.from(letters).map((letter) => {
        const bounds = letter.getBoundingClientRect();
        const dx = pointerRef.current.x - (bounds.left + bounds.width / 2);
        const dy = pointerRef.current.y - (bounds.top + bounds.height / 2);

        const influence = Math.exp(
          -(dx ** 2 / 180 ** 2 + dy ** 2 / 110 ** 2)
        );

        const direction = Math.tanh(dy / 45);

        return {
          character: letter.firstElementChild as HTMLSpanElement,
          offset: -direction * influence * 18,
          rotation: direction * influence * (dx / 180) * 8,
        };
      });

      updates.forEach(({ character, offset, rotation }) => {
        character.style.transform =
          `translateY(${offset}px) rotate(${rotation}deg)`;
      });
    });
  }

  function resetLetters() {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }

    headingRef.current
      ?.querySelectorAll<HTMLSpanElement>("[data-character]")
      .forEach((character) => {
        character.style.transform = "translateY(0) rotate(0deg)";
      });
  }

  return (
    <h1
      ref={headingRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetLetters}
      onPointerCancel={resetLetters}
      aria-label="使いやすく、伝わるWebをつくる。"
      className="text-3xl font-bold leading-[1.6] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
    >
      {["使いやすく､", "伝わるWebをつくる｡"].map((line) => (
        <span
          key={line}
          aria-hidden="true"
          className="pointer-events-none block"
        >
          {Array.from(line).map((character, index) => (
            <span
              key={`${line}-${index}`}
              data-letter
              className="inline-block align-top"
            >
              <span
                data-character
                className="inline-block align-top transition-transform duration-150 ease-out"
              >
                {character}
              </span>
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}