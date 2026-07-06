"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { invitacion } from "@/lib/invitation";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/** Galería de fotos como carrusel con navegación, paginación y lightbox. */
export default function PhotoGallery() {
  const [activa, setActiva] = useState<string | null>(null);

  return (
    <section className="bg-boda-bg py-16">
      <h2 className="mb-8 text-center text-4xl text-boda">Nuestros Recuerdos</h2>

      <div className="mx-auto w-full max-w-[520px] px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          grabCursor
          className="boda-swiper overflow-hidden rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
        >
          {invitacion.fotos.map((src, i) => (
            <SwiperSlide key={src}>
              <button
                onClick={() => setActiva(src)}
                className="relative block aspect-[3/4] w-full bg-black"
              >
                <Image
                  src={src}
                  alt={`Recuerdo ${i + 1}`}
                  fill
                  sizes="(max-width: 520px) 100vw, 520px"
                  className="object-cover"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="mt-4 text-center font-script text-2xl text-boda">
          Toca una foto para verla completa
        </p>
      </div>

      {/* Lightbox */}
      {activa && (
        <div
          onClick={() => setActiva(null)}
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 p-4"
        >
          <Image
            src={activa}
            alt="Foto ampliada"
            width={1200}
            height={1600}
            className="max-h-[90%] w-auto rounded-xl object-contain shadow-[0_0_20px_rgba(0,0,0,0.6)]"
          />
        </div>
      )}
    </section>
  );
}
