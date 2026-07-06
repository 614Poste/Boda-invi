import Image from "next/image";
import { invitacion } from "@/lib/invitation";

/** Portada con los nombres de los novios (div #Titulo + .InfoXV del original). */
export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-4 text-center">
      {/* Imagen de fondo de la portada */}
      <Image
        src={invitacion.portada}
        alt="Portada"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Velo para dar contraste a la tarjeta */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 w-4/5 max-w-2xl rounded-xl bg-white/95 p-6 shadow-[0px_4px_12px_rgba(0,0,0,0.25)]">
        <div className="flex flex-col items-center text-boda-soft">
          <h1 className="text-5xl font-bold leading-tight text-boda-soft sm:text-6xl">
            {invitacion.novia}
            <span className="my-2 block text-3xl text-boda sm:text-4xl">&amp;</span>
            {invitacion.novio}
          </h1>

          <p className="mt-4 text-3xl">{invitacion.subtitulo}</p>
          <p className="mt-4 text-3xl">{invitacion.subtitulo2}</p>
          <p className="text-3xl">{invitacion.fechaTexto}</p>
        </div>
      </div>
    </section>
  );
}
