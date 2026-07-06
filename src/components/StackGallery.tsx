"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import { invitacion } from "@/lib/invitation";

import "swiper/css";
import "swiper/css/effect-cards";

/** Carrusel de fotos tipo tarjetas apilables (Swiper "cards" + autoplay). */
export default function StackGallery() {
  return (
    <div className="mx-auto my-10 w-full max-w-[380px] px-4">
      <Swiper
        effect="cards"
        grabCursor
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        modules={[EffectCards, Autoplay]}
        className="h-[400px] w-full"
      >
        {invitacion.galeriaTarjetas.map((src, i) => (
          <SwiperSlide
            key={src}
            className="overflow-hidden rounded-xl bg-black shadow-[0px_10px_25px_rgba(0,0,0,0.4)]"
          >
            <Image
              src={src}
              alt={`Foto ${i + 1}`}
              fill
              sizes="380px"
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="mt-4 text-center font-script text-lg text-boda">
        Desliza
        <span className="mt-1 block animate-[boda-bounce_1.4s_infinite] text-xl">
          ⌄
        </span>
      </p>
    </div>
  );
}
