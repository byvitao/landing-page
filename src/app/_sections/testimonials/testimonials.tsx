import styles from "./testimonials.module.scss";
import Slider from "./slider/slider";
import { getTestimonials } from "./data";
import CanvasBackground from "./canvas-background/canvas-background";
import Divider from "./divider/divider";
import Skeleton from "@mui/material/Skeleton";
import { Suspense } from "react";

export default async function Testimonials() {
  const testimonials = await getTestimonials();

  return (
    <>
      <section id="testimonials" className={styles.testimonials}>
        <CanvasBackground />
        <div className={styles.sectionContent}>
          <h2>Depoimentos</h2>
          <Suspense fallback={<Loading />}>
            <Slider testimonials={testimonials} />
          </Suspense>
        </div>
      </section>
      <Divider />
    </>
  )
}

function Loading() {
  return (
    <div style={{ display: "flex", gap: "1rem", overflow: "hidden" }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", justifyContent: "start" }}>
          <Skeleton variant="rectangular" width={300} height={400} sx={{ borderRadius: "16px", display: "block", mb: "10px" }} />
          <Skeleton variant="rectangular" width={300} height={150} sx={{ borderRadius: "16px", display: "block" }} />
        </div>
      ))}
    </div>
  );
}