"use client";
import { IFaq } from "../data";
import styles from "../faq.module.scss";

export function Detail({ item }: { item: IFaq }) {
  return (
    <details className={styles.faqItem} data-animate suppressHydrationWarning>
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