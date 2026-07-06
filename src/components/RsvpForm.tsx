"use client";

import { useState } from "react";
import { invitacion } from "@/lib/invitation";
import { WhatsAppIcon } from "./Icons";

/**
 * Confirmación de asistencia por WhatsApp (#Formulario).
 * El invitado escribe quiénes asistirán y el botón abre WhatsApp con el
 * mensaje prellenado hacia el número configurado en `invitacion.whatsapp.numero`.
 */
export default function RsvpForm() {
  const { novia, whatsapp } = invitacion;
  const [adultos, setAdultos] = useState("");
  const [ninos, setNinos] = useState("");

  // Solo dígitos (por si el número trae espacios/guiones)
  const numero = whatsapp.numero.replace(/\D/g, "");
  // Normaliza a número (vacío = 0)
  const nAdultos = Number(adultos) || 0;
  const nNinos = Number(ninos) || 0;
  const listo = numero !== "" && nAdultos + nNinos > 0;

  const enviar = () => {
    if (!listo) return;
    const mensaje = `Hola ${novia}, te confirmo la asistencia para ${nAdultos} Adultos y ${nNinos} niños!`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-boda-bg py-16 shadow-[0px_-10px_20px_rgba(0,0,0,0.25),0px_10px_20px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col items-center gap-6 px-4 text-center">
        <h2 className="text-4xl text-boda">Confirma tu asistencia</h2>

        <p className="text-3xl text-boda">
          ¿Cuántos asistirán?
        </p>

        <label className="flex w-[95%] max-w-[320px] flex-col gap-2 text-2xl text-boda">
          Adultos
          <input
            type="number"
            inputMode="numeric"
            min={0}
            value={adultos}
            onChange={(e) => setAdultos(e.target.value)}
            placeholder="0"
            className="rounded-xl border-2 border-boda-soft bg-white px-4 py-3 text-center text-xl text-boda-soft outline-none transition focus:shadow-md"
          />
        </label>

        <label className="flex w-[95%] max-w-[320px] flex-col gap-2 text-2xl text-boda">
          Niños
          <input
            type="number"
            inputMode="numeric"
            min={0}
            value={ninos}
            onChange={(e) => setNinos(e.target.value)}
            placeholder="0"
            className="rounded-xl border-2 border-boda-soft bg-white px-4 py-3 text-center text-xl text-boda-soft outline-none transition focus:shadow-md"
          />
        </label>

        <button
          onClick={enviar}
          disabled={!listo}
          className="flex h-[60px] w-[95%] max-w-[320px] items-center justify-center gap-3 rounded-2xl bg-[#25D366] text-xl font-bold text-white shadow-[0px_4px_10px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:opacity-95 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
        >
          <WhatsAppIcon className="h-6 w-6" />
          Confirmar por WhatsApp
        </button>

        {!numero && (
          <p className="text-lg text-boda-soft/80">
            (Pendiente: configurar el número de WhatsApp en la invitación)
          </p>
        )}
      </div>
    </section>
  );
}
