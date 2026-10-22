"use client";

import { useEffect, useRef } from "react";
import type { ComponentPropsWithoutRef } from "react";

export default function RevealSection({
  children,
  ...props
}: ComponentPropsWithoutRef<"section">) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (
      !section ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    section.dataset.reveal = "pending";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.dataset.reveal = "visible";
          observer.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      delete section.dataset.reveal;
    };
  }, []);

  return (
    <section ref={sectionRef} {...props}>
      <div className="section-reveal-content">{children}</div>
    </section>
  );
}