import { invitacion } from "@/lib/invitation";
import Reveal from "./Reveal";
import { TimelineIcon } from "./Icons";

/** Itinerario del evento (#Itinerario / .timeline). */
export default function Itinerary() {
  return (
    <section className="py-16 text-center shadow-[0px_-10px_20px_rgba(0,0,0,0.25),0px_10px_20px_rgba(0,0,0,0.25)]">
      <Reveal delay={200}>
        <h2 className="mb-8 text-4xl text-boda">Itinerario</h2>
      </Reveal>

      <div className="mx-auto max-w-[600px] px-4">
        {invitacion.itinerario.map((evento) => (
          <Reveal key={`${evento.hora}-${evento.titulo}`} delay={200} className="my-10">
            <TimelineIcon className="mx-auto h-12 w-12 text-boda-soft" />
            <h3 className="mt-2 text-2xl text-boda-soft">{evento.hora}</h3>
            <p className="text-[19px] text-boda">{evento.titulo}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
