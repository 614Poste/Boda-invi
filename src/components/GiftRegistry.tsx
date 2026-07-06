import { invitacion } from "@/lib/invitation";
import Reveal from "./Reveal";

/** Mesa de regalos y notas (#MesaDeRegalo). */
export default function GiftRegistry() {
  return (
    <section className="bg-boda-bg py-16 text-center shadow-[0px_-10px_20px_rgba(0,0,0,0.25),0px_10px_20px_rgba(0,0,0,0.25)]">
      <h2 className="mb-8 text-4xl text-boda">Mesa de Regalos</h2>

      {/*<div className="flex flex-col items-center gap-4">
        {invitacion.mesaRegalos.map((tienda) => (
          <Reveal key={tienda.nombre} delay={200}>
            <a
              href={tienda.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-[200px] rounded-xl bg-boda p-3 text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition hover:scale-105 hover:shadow-[0_6px_18px_rgba(0,0,0,0.25)]"
            >
              <span className="text-2xl">{tienda.nombre}</span>
            </a>
          </Reveal>
        ))}
      </div>*/}

      <p className="mx-auto mt-10 max-w-[600px] px-5 text-3xl text-boda">
        “{invitacion.mensajeRegalos}”
      </p>

      <div className="mt-12 flex flex-col gap-8">
        {invitacion.notasExtra.map((nota) => (
          <h3 key={nota} className="text-3xl text-boda">
            {nota}
          </h3>
        ))}
      </div>
    </section>
  );
}
