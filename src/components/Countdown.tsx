"use client";

import { useEffect, useState } from "react";
import { invitacion } from "@/lib/invitation";

type Tiempo = { dias: number; horas: number; minutos: number; segundos: number };

function calcular(objetivo: number): Tiempo {
  const diff = Math.max(0, objetivo - Date.now());
  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutos: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    segundos: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

/** Cuenta regresiva hasta la fecha del evento (reemplaza el setInterval del HTML). */
export default function Countdown() {
  const objetivo = new Date(invitacion.fechaEvento).getTime();
  const [tiempo, setTiempo] = useState<Tiempo | null>(null);

  useEffect(() => {
    setTiempo(calcular(objetivo));
    const id = setInterval(() => setTiempo(calcular(objetivo)), 1000);
    return () => clearInterval(id);
  }, [objetivo]);

  const items = [
    { label: "Días", valor: tiempo?.dias },
    { label: "Horas", valor: tiempo?.horas },
    { label: "Minutos", valor: tiempo?.minutos },
    { label: "Segundos", valor: tiempo?.segundos },
  ];

  return (
    <section className="flex h-[600px] items-center justify-center bg-boda-bg">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex h-20 w-20 flex-col items-center justify-center rounded-full p-1 text-boda-soft"
          >
            {/* suppressHydrationWarning: el valor depende de la hora del cliente */}
            <span className="text-4xl" suppressHydrationWarning>
              {item.valor ?? "--"}
            </span>
            <span className="mt-1 text-xl">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
