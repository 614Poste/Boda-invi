/**
 * Íconos SVG de la invitación. Usan `currentColor`, así que heredan el color
 * del texto (por ejemplo `text-boda`). El tamaño se controla con `className`
 * (ej. `h-14 w-14`).
 */

type IconProps = {
  className?: string;
};

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Ceremonia: dos anillos entrelazados con una gema. */
export function CeremonyIcon({ className = "h-14 w-14" }: IconProps) {
  return (
    <svg viewBox="0 0 32 26" className={className} {...baseProps}>
      <circle cx="12" cy="16" r="7" />
      <circle cx="21" cy="16" r="7" />
      <path d="M21 2 l-3 3 l3 4 l3 -4 z" />
      <path d="M18 5 h6" />
    </svg>
  );
}

/** Recepción: dos copas brindando. */
export function ReceptionIcon({ className = "h-14 w-14" }: IconProps) {
  return (
    <svg viewBox="0 0 36 28" className={className} {...baseProps}>
      <g transform="rotate(-14 12 8)">
        <path d="M7 6 H17" />
        <path d="M7 6 A5 4 0 0 0 17 6" />
        <path d="M12 10 V22" />
        <path d="M8 22 H16" />
      </g>
      <g transform="rotate(14 24 8)">
        <path d="M19 6 H29" />
        <path d="M19 6 A5 4 0 0 0 29 6" />
        <path d="M24 10 V22" />
        <path d="M20 22 H28" />
      </g>
      <path d="M18 1 v2 M16.5 2.5 h3" />
    </svg>
  );
}

/** Logo de WhatsApp (relleno, usa currentColor). */
export function WhatsAppIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

/** Cruz elegante (para indicar "en memoria de", junto a un nombre). */
export function CrossIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M13.4 2.2c0-.66-.54-1.2-1.2-1.2h-.4c-.66 0-1.2.54-1.2 1.2V8H4.9c-.66 0-1.2.54-1.2 1.2v.4c0 .66.54 1.2 1.2 1.2h5.7v10.8c0 .66.54 1.2 1.2 1.2h.4c.66 0 1.2-.54 1.2-1.2V10.8h5.7c.66 0 1.2-.54 1.2-1.2v-.4c0-.66-.54-1.2-1.2-1.2h-5.7V2.2Z" />
    </svg>
  );
}

/** Pin de ubicación (para el botón "Cómo llegar"). */
export function MapPinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...baseProps}>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/** Itinerario: reloj. */
export function TimelineIcon({ className = "h-14 w-14" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...baseProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7 V12 L15.5 14" />
    </svg>
  );
}

/**
 * Código de vestimenta: novio (traje) y novia (vestido).
 */
export function DressCodeIcon({ className = "h-16 w-16" }: IconProps) {
  return (
    <svg viewBox="0 0 64 50" className={className} {...baseProps}>
      {/* --- Novio (traje) --- */}
      <circle cx="18" cy="9" r="5" />
      {/* saco */}
      <path d="M11 40 L13 20 L23 20 L25 40" />
      {/* solapas / cuello en V */}
      <path d="M18 20 L15 27 M18 20 L21 27" />
      {/* corbata */}
      <path d="M18 21 L16.5 28 L18 32 L19.5 28 Z" />
      {/* piernas */}
      <path d="M14.5 40 V47 M21.5 40 V47" />

      {/* --- Novia (vestido) --- */}
      <circle cx="46" cy="9" r="5" />
      {/* cabello */}
      <path d="M41 8 Q41 15 43.5 16 M51 8 Q51 15 48.5 16" />
      {/* vestido */}
      <path d="M46 15 L37 44 L55 44 Z" />
      {/* tirantes / escote */}
      <path d="M42.5 19 L46 15 L49.5 19" />
      {/* pies */}
      <path d="M43.5 44 V47 M48.5 44 V47" />
    </svg>
  );
}
