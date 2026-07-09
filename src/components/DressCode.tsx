import Image from "next/image";
import { invitacion } from "@/lib/invitation";
import Reveal from "./Reveal";
import { DressCodeIcon } from "./Icons";

/** Código de vestimenta (#CodigoDeVestimenta). */
export default function DressCode() {
  return (
    <section className="bg-white py-16 text-center shadow-[0px_-10px_20px_rgba(0,0,0,0.25),0px_10px_20px_rgba(0,0,0,0.25)]">
      <Reveal delay={200}>
        <DressCodeIcon className="mx-auto h-20 w-24 text-boda" />
      </Reveal>

      <Reveal delay={200} direction="down">
        <p className="mt-2 text-[22px] text-boda">
          <strong>Código de Vestimenta</strong>
        </p>
      </Reveal>

      <Reveal delay={200}>
        <h2 className="mt-6 text-[20px] text-boda-soft">
          {invitacion.codigoVestimenta}
        </h2>
      </Reveal>

      {invitacion.notaVestimenta && (
        <Reveal delay={250}>
          <p className="mx-auto mt-3 max-w-[400px] px-4 text-[22px] text-boda">
            {invitacion.notaVestimenta}
          </p>
        </Reveal>
      )}

      <Reveal delay={300}>
        <Image
          src={invitacion.imagenVestimenta}
          width={320}
          height={420}
          alt="Referencia de código de vestimenta"
          className="mx-auto mt-8 h-auto w-[320px] max-w-[85%] rounded-xl object-cover shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
        />
      </Reveal>
    </section>
  );
}
