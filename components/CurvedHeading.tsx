"use client";

import { useRef } from "react";
import type { PointerEvent } from "react";

export default function CurvedHeading() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLHeadingElement>) {
    if (
      event.pointerType === "touch" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const heading = headingRef.current;
    if (!heading) return;

    const letters = heading.querySelectorAll<HTMLSpanElement>(
      "[data-letter]"
    );

    letters.forEach((letter) => {
      // Measure the stationary wrapper, so movement doesn't affect calculations.
      const bounds = letter.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;

      const distanceX = event.clientX - centerX;
      const distanceY = event.clientY - centerY;

      const influence = Math.exp(
        -(distanceX ** 2 / 180 ** 2 + distanceY ** 2 / 110 ** 2)
      );

      const direction = Math.tanh(distanceY / 35);
      const offset = -direction * influence * 24;
      const rotation = direction * influence * (distanceX / 180) * 12;

      const character = letter.firstElementChild as HTMLSpanElement;

      character.style.transform =
        `translateY(${offset}px) rotate(${rotation}deg)`;
    });
  }

  function resetLetters() {
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
        <span key={line} aria-hidden="true" className="block">
          {Array.from(line).map((character, index) => (
            <span
                key={`${line}-${index}`}
                data-letter
                className="inline-block align-top"
                >
                <span
                    data-character
                    className="inline-block align-top transition-transform duration-300 ease-out motion-reduce:transform-none motion-reduce:transition-none"
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