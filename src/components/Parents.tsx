import { invitacion, type Persona } from "@/lib/invitation";
import Reveal from "./Reveal";
import { CrossIcon } from "./Icons";

/** Muestra un nombre; si termina en "✝️" lo reemplaza por una cruz SVG. */
function Nombre({ texto }: { texto: string }) {
  const enMemoria = /✝️?\s*$/.test(texto);
  const limpio = texto.replace(/✝️?\s*$/, "").trim();
  return (
    <span className="inline-flex items-center gap-1.5">
      {limpio}
      {enMemoria && <CrossIcon className="inline h-[0.9em] w-[0.9em] text-boda" />}
    </span>
  );
}

/** Lista de personas (padres o padrinos) con su rol y nombres. */
function ListaPersonas({ personas }: { personas: Persona[] }) {
  return (
    <div className="flex flex-col gap-12 px-4">
      {personas.map((persona) => (
        <Reveal key={persona.rol} delay={200}>
          <p className="text-[22px] text-boda">
            <strong>{persona.rol}</strong>
          </p>
          <p className="mt-2 text-[27px] text-boda-soft">
            {persona.nombres.map((nombre, i) => (
              <span key={nombre}>
                <Nombre texto={nombre} />
                {i < persona.nombres.length - 1 && (
                  <>
                    <br />
                    &amp;
                    <br />
                  </>
                )}
              </span>
            ))}
          </p>
        </Reveal>
      ))}
    </div>
  );
}

/** Padres y padrinos (#Padres). */
export default function Parents() {
  const padres = invitacion.personas.filter((p) => p.tipo === "padres");
  const padrinos = invitacion.personas.filter((p) => p.tipo === "padrinos");

  return (
    <section className="bg-boda-bg py-16 text-center shadow-[0px_-10px_20px_rgba(0,0,0,0.25),0px_10px_20px_rgba(0,0,0,0.25)]">
      {padres.length > 0 && (
        <>
          <h2 className="mb-12 text-4xl text-boda">
            Con la bendición de nuestros padres
          </h2>
          <ListaPersonas personas={padres} />
        </>
      )}

      {padrinos.length > 0 && (
        <>
          <h2 className="mb-12 mt-16 text-4xl text-boda">
            Y en compañía de nuestros hijos
          </h2>
          <ListaPersonas personas={padrinos} />
        </>
      )}
    </section>
  );
}
