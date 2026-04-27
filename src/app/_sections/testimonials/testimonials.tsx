import styles from "./testimonials.module.scss";
import Slider from "./slider/slider";
import { getTestimonials } from "./data";
import CanvasBackground from "./canvas-background/canvas-background";
import Divider from "./divider/divider";
import { Suspense } from "react";

export default async function Testimonials() {
  return (
    <>
      <section id="testimonials" className={styles.testimonials}>
        <CanvasBackground />
        <div className={styles.sectionContent}>
          <h2>Depoimentos</h2>
          <Suspense fallback={<Slider />}>
            <TestimonialList />
          </Suspense>
        </div>
      </section>
      <Divider />
    </>
  )
}

async function TestimonialList() {
  const testimonials = await getTestimonials();
  return <Slider testimonials={testimonials} />
}