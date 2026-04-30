"use client";
import React from "react";
import { IFaq } from "../data";
import styles from "../faq.module.scss";

export default function Detail({ item }: { item: IFaq }) {
  const ref = React.useRef<HTMLDetailsElement>(null);

  React.useEffect(() => {
    // Garante estado fechado no cliente após hidratação
    if (ref.current) {
      ref.current.removeAttribute("open");
    }
  }, []);
  return (
    <details ref={ref} className={styles.faqItem} data-animate suppressHydrationWarning>
      <summary className={styles.question} role="button">
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
  );
}