"use client";
import { ITestimonial } from "../data";
import Image from "next/image";
import styles from "./slider.module.scss";
import { Swiper, SwiperSlide, } from "swiper/react";
import { Navigation, Autoplay, A11y, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperOptions } from "swiper/types";
import React from "react";
import { Skeleton } from "@mui/material";

const MIN_SLIDES_PER_VIEW = 5;

const swiperConfig: SwiperOptions = {
  modules: [Navigation, Autoplay, A11y, FreeMode],
  loop: true,
  allowTouchMove: true,
  speed: 8000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
    stopOnLastSlide: false
  },
  breakpoints: { //Mínimo em pixels, vale do valor acima
    680: { slidesPerView: 2, spaceBetween: 0 },
    1024: { slidesPerView: 3, spaceBetween: 0 },
    1360: { slidesPerView: 4, spaceBetween: 0 },
    1800: { slidesPerView: 5, spaceBetween: 0 },
  },
  a11y: {
    prevSlideMessage: 'Slide anterior',
    nextSlideMessage: 'Próximo slide',
    firstSlideMessage: 'Este é o primeiro slide',
    lastSlideMessage: 'Este é o último slide',
    paginationBulletMessage: 'Ir para o slide {{index}}',
  }
}

export default function Slider({ testimonials }: { testimonials?: ITestimonial[] }) {
  let data: ITestimonial[] | null = null;
  if (testimonials) {
    data = testimonials.length < MIN_SLIDES_PER_VIEW
      ? Array.from({ length: Math.ceil(MIN_SLIDES_PER_VIEW / testimonials.length) }, () => testimonials).flat()
      : testimonials;
  }

  return (
    <Swiper
      {...swiperConfig}
      className={styles.slider}
    >
      {
        !!data
          ? data.map((testimonial, index) => {
            return (
              <SwiperSlide key={index}>
                <Card testimonial={testimonial} />
              </SwiperSlide>
            );
          })
          : <FallbackSwiper />
      }
    </Swiper>
  );
}

function Card({ testimonial }: { testimonial?: ITestimonial }) {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  if (!testimonial) {
    return (
      <article className={styles.card}>
        <figure className={styles.imageWrapper}>
          <Skeleton variant="rectangular" width={200} height={300} sx={{ borderRadius: "16px", display: "block", mb: "10px" }} />
        </figure>
        <div className={styles.text}>
          <blockquote>
            <Skeleton variant="text" width={260} height={100} />
          </blockquote>
        </div>
      </article>
    );
  }

  return (
    <article className={styles.card}>
      <figure className={styles.imageWrapper}>
        {isLoading && <Skeleton variant="rectangular" width={200} height={300} sx={{ borderRadius: "16px", display: "block", mb: "10px" }} />}
        <Image
          src={testimonial.image}
          alt={`Depoimento: ${testimonial.description}`}
          width={200}
          height={300}
          sizes="200px"
          className={styles.print}
          onLoad={() => setIsLoading(false)}
          priority={false}
          style={{ objectFit: "contain", borderRadius: '16px' }}
        />
      </figure>
      <div className={styles.text}>
        <blockquote>
          <p>"{testimonial.description}"</p>
        </blockquote>
      </div>
    </article>
  )
}

function FallbackSwiper() {
  return (
    <SwiperSlide>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </SwiperSlide>
  )
}