"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { invitacion } from "@/lib/invitation";

/**
 * Pantalla de apertura — VERSIÓN CON FOTO (nueva, pedida por la clienta).
 * Foto de fondo a pantalla completa y botón ovalado "Abrir Invitación" abajo.
 * Mantiene la misma tipografía (font-script) y la paleta (boda / boda-soft).
 *
 * La versión original está en OpenInvitation.tsx. Se elige cuál usar con el
 * booleano `invitacion.apertura.usarVersionFoto` en lib/invitation.ts.
 */
export default function OpenInvitationPhoto() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [abierta, setAbierta] = useState(false);
  const [reproduciendo, setReproduciendo] = useState(false);

  const abrir = () => {
    setAbierta(true);
    const audio = audioRef.current;
    if (audio) {
      audio
        .play()
        .then(() => setReproduciendo(true))
        .catch(() => setReproduciendo(false));
    }
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (reproduciendo) {
      audio.pause();
      setReproduciendo(false);
    } else {
      audio.play().then(() => setReproduciendo(true));
    }
  };

  return (
    <>
      <audio ref={audioRef} loop src={invitacion.musica} />

      {/* Cubierta de apertura con foto de fondo */}
      <div
        className={`fixed inset-0 z-[100000] transition-opacity duration-500 ${
          abierta ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        {/* Foto de fondo */}
        <Image
          src={invitacion.apertura.foto}
          alt="Portada de la invitación"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Degradado inferior para que el botón se lea bien */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Botón ovalado abajo */}
        <button
          onClick={abrir}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer rounded-full border border-white/40 bg-boda/90 px-12 py-4 text-center font-script text-3xl text-white shadow-[0_4px_12px_rgba(0,0,0,0.35)] backdrop-blur-sm transition hover:-translate-x-1/2 hover:-translate-y-1 hover:bg-boda hover:opacity-95 active:translate-y-0"
        >
          Abrir Invitación
        </button>
      </div>

      {/* Botón flotante de música (aparece tras abrir) */}
      {abierta && (
        <button
          onClick={togglePlay}
          aria-label={reproduciendo ? "Pausar música" : "Reproducir música"}
          className="fixed bottom-5 left-5 z-[99999] flex h-12 w-12 items-center justify-center rounded-full bg-boda text-white shadow-lg transition hover:scale-105"
        >
          {reproduciendo ? "❚❚" : "▶"}
        </button>
      )}
    </>
  );
}
