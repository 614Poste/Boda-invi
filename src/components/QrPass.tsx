"use client";

import { QRCodeCanvas } from "qrcode.react";
import { invitacion } from "@/lib/invitation";

/** Boleto/pase con código QR (#PaseQR). Usa qrcode.react en lugar del CDN. */
export default function QrPass() {
  const { invitado } = invitacion;

  return (
    <section className="flex items-center justify-center bg-white/95 p-5">
      <div className="w-[340px] rounded-2xl bg-white p-6 text-center font-script shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
        <div className="mb-5 border-b-2 border-dashed border-[#7DA08C] pb-3">
          <span className="text-2xl font-bold text-[#2f3e36]">
            {invitado.nombre}
          </span>
        </div>

        <div className="mb-5 text-lg text-[#2f3e36]">
          <span className="font-semibold">
            {invitado.pasesAdultos} Adultos · {invitado.pasesNinos} Niños
          </span>
          <div className="mt-2">
            Mesa: <strong>{invitado.mesa}</strong>
          </div>
        </div>

        <div className="border-t-2 border-dashed border-[#7DA08C] pt-5">
          <QRCodeCanvas
            value={invitado.urlQr}
            size={260}
            className="mx-auto h-auto w-full max-w-[260px]"
          />
        </div>
      </div>
    </section>
  );
}
