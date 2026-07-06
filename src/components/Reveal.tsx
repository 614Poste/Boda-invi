"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Retraso de la animación en ms (equivalente a data-aos-delay) */
  delay?: number;
  /** Dirección de entrada */
  direction?: "up" | "down";
  as?: React.ElementType;
};

/**
 * Reemplaza a la librería AOS: revela el contenido al entrar en el viewport
 * usando IntersectionObserver + transiciones de Tailwind.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hidden =
    direction === "up" ? "translate-y-8 opacity-0" : "-translate-y-8 opacity-0";

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-1000 ease-out ${
        visible ? "translate-y-0 opacity-100" : hidden
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
