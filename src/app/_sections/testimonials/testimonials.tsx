import styles from "./testimonials.module.scss";
import Slider from "./slider/slider";
import { getTestimonials } from "./data";
import CanvasBackground from "./canvas-background/canvas-background";
import Divider from "./divider/divider";
import Skeleton from "@mui/material/Skeleton";
import { Suspense } from "react";

export default async function Testimonials() {
  return (
    <>
      <section id="testimonials" className={styles.testimonials}>
        <CanvasBackground />
        <div className={styles.sectionContent}>
          <h2>Depoimentos</h2>
          <Suspense fallback={<Fallback />}>
            <TestimonialList />
          </Suspense>
        </div>
      </section>
      <Divider />
    </>
  )
}

function Fallback() {
  return (
    <div aria-label="Carregando depoimentos" aria-busy="true" className={styles.fallbackContainer}>
      {
        Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} variant="rectangular" sx={{ width: "300px", height: "400px" }} aria-hidden="true" />
        ))
      }
    </div>
  )
}

async function TestimonialList() {
  const testimonials = await getTestimonials();
  return <Slider testimonials={testimonials} />
}