import { invitacion } from "@/lib/invitation";

/** Mensaje/cita de la invitación (#MensajeInvitacion). */
export default function InvitationMessage() {
  return (
    <section className="bg-white py-24 shadow-[0px_-10px_20px_rgba(0,0,0,0.25),0px_10px_20px_rgba(0,0,0,0.25)]">
      <p className="mx-auto max-w-[600px] px-5 text-center text-3xl text-boda">
        “{invitacion.mensaje}”
      </p>
    </section>
  );
}
