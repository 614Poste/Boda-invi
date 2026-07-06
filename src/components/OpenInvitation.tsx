"use client";

import { useRef, useState } from "react";
import { invitacion } from "@/lib/invitation";

/**
 * Portada de apertura (reemplaza #whitebck + .play-button del HTML original).
 * Cubre la pantalla hasta que el invitado pulsa "Abrir Invitación"; al abrir,
 * inicia la música de fondo. Después deja un botón flotante para pausar/reanudar.
 */
export default function OpenInvitation() {
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

      {/* Cubierta de apertura */}
      <div
        className={`fixed inset-0 z-[100000] flex items-center justify-center bg-boda-soft backdrop-blur-sm transition-opacity duration-500 ${
          abierta ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <button
          onClick={abrir}
          className="fixed right-0 top-0 flex h-full w-[250px] cursor-pointer items-center justify-center bg-white text-center font-script text-3xl text-boda-soft shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
        >
          Abrir
          <br />
          Invitación
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
