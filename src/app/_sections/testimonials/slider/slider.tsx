"use client";
import { ITestimonial } from "../data";
import Image from "next/image";
import styles from "./slider.module.scss";
import React from "react";
import Skeleton from "@mui/material/Skeleton";

const MIN_SLIDES_PER_VIEW = 5;
const cloudinaryLoader = ({ src, width }: { src: string; width: number }) => {
  return src.replace('/upload/', `/upload/w_${width},f_auto,q_auto,c_fit/`)
}

export default function Slider({ testimonials }: { testimonials: ITestimonial[] }) {

  const data = testimonials.length < MIN_SLIDES_PER_VIEW
    ? Array.from({ length: Math.ceil(MIN_SLIDES_PER_VIEW / testimonials.length) }, () => testimonials).flat()
    : testimonials;

  const duration = data.length * 7.5;

  return (
    <div className={styles.slider}>
      <div style={{ animationDuration: `${duration}s` }} className={styles.sliderContainer}>
        {
          data.map((testimonial, index) => {
            return (
              <Card key={index} testimonial={testimonial} />
            );
          })
        }
      </div>
      <div style={{ animationDuration: `${duration}s` }} aria-hidden className={styles.sliderContainer}>
        {
          data.map((testimonial, index) => {
            return (
              <Card key={index} testimonial={testimonial} />
            );
          })
        }
      </div>
    </div>
  );
}

function Card({ testimonial }: { testimonial: ITestimonial }) {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  return (
    <article className={styles.card}>
      <figure className={styles.imageWrapper}>
        {isLoading && <Skeleton variant="rectangular" width={300} height={300} sx={{ borderRadius: "16px", display: "block", mb: "10px" }} />}
        <Image
          src={testimonial.image}
          loader={cloudinaryLoader}
          alt="Depoimento de paciente"
          fill
          className={styles.print}
          onLoad={() => setIsLoading(false)}
          priority={false}
          style={{ objectFit: "contain", borderRadius: "16px" }}
        />
      </figure>
      <div className={styles.text}>
        <blockquote cite={testimonial.image || undefined}>
          <p>"{testimonial.description}"</p>
        </blockquote>
      </div>
    </article>
  )
}