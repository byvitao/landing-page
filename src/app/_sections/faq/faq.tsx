import styles from "./faq.module.scss";
import { getFaqs, IFaq } from "./data";
import Divider from "./divider/divider";
import Skeleton from "@mui/material/Skeleton";
import { Suspense } from "react";
import Detail from "./detail/detail";

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
  const faqs = await getFaqs();
  return (
    <>
      {faqs.map((item, index) => (
        <Detail key={index} item={item} />
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