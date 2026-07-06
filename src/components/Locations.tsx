import Image from "next/image";
import { invitacion } from "@/lib/invitation";
import Reveal from "./Reveal";
import { CeremonyIcon, ReceptionIcon, MapPinIcon } from "./Icons";

const iconos = {
  ceremonia: CeremonyIcon,
  recepcion: ReceptionIcon,
};

/** Direcciones de ceremonia y recepción (#Direcciones). */
export default function Locations() {
  const { ubicaciones } = invitacion;

  return (
    <section className="py-12 text-center">
      <Reveal delay={100}>
        <h2 className="mb-12 px-4 text-4xl text-boda">
          Te esperamos para celebrar juntos en:
        </h2>
      </Reveal>

      {ubicaciones.map((u) => {
        const Icono = iconos[u.icono];

        return (
          <div key={u.titulo} className="mb-16 px-4">
            <Reveal delay={200}>
              <Icono className="mx-auto h-16 w-16 text-boda" />
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-2 text-[22px] text-boda">
                <strong>{u.titulo}</strong>
              </p>
            </Reveal>

            <Reveal delay={400}>
              <h3 className="text-[22px] text-boda-soft">{u.lugar}</h3>
            </Reveal>

            <Reveal delay={450}>
              <p className="mb-4 text-[22px] text-boda">{u.hora} hrs</p>
            </Reveal>

            {u.mapaUrl && (
              <Reveal delay={500}>
                <a
                  href={u.mapaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto inline-flex items-center gap-2 rounded-full bg-boda px-6 py-3 text-xl text-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  <MapPinIcon className="h-5 w-5" />
                  Cómo llegar
                </a>
              </Reveal>
            )}

            <Reveal delay={600}>
              {u.foto ? (
                <Image
                  src={u.foto}
                  alt={`Foto de ${u.lugar}`}
                  width={0}
                  height={0}
                  sizes="(max-width: 500px) 100vw, 500px"
                  className="mx-auto mt-8 h-auto w-full max-w-[500px] rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
                />
              ) : (
                <div className="mx-auto mt-8 flex aspect-[4/3] w-full max-w-[500px] flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl bg-boda-bg text-boda-soft shadow-[0_10px_25px_rgba(0,0,0,0.2)]">
                  <MapPinIcon className="h-10 w-10" />
                  <span className="text-2xl">Foto del lugar próximamente</span>
                </div>
              )}
            </Reveal>
          </div>
        );
      })}
    </section>
  );
}
