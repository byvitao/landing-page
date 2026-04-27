import styles from "./faq.module.scss";
import { getFaqs } from "./data";
import Divider from "./divider/divider";
import { Skeleton } from "@mui/material";
import { Suspense } from "react";

export default async function FAQ() {
  return (
    <>
      <section id="faq" className={styles.faq}>
        <div className={styles.sectionContent}>
          <h2>
            Perguntas <span className={styles.emphasis}>frequentes</span>
          </h2>
          <div className={styles.accordionGroup}>
            <Suspense fallback={<Loading />}>
              <FaqList />
            </Suspense>
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
}

async function FaqList() {
  const faqs = await getFaqs(); // Fetching happens inside the boundary
  return (
    <>
      {faqs.map((item, index) => (
        <details key={index} className={styles.faqItem} data-animate suppressHydrationWarning>
          <summary className={styles.question}>
            {item.question}
            <div className={styles.chevronWrapper}>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
            </div>
          </summary>
          <div className={styles.answer}>
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </>
  );
}

function Loading() {
  return (
    <>
      {
        [1, 2, 3].map((i) => (
          <Skeleton variant="rectangular" sx={{ borderRadius: "12px", height: "5rem" }} />
        ))
      }
    </>
  )
}