import styles from "./process.module.scss";
import { steps } from "./data";
import Divider from "./divider/divider";

export default function Process() {

  return (
    <>
      <section id="method" className={styles.process}>
        <div className={styles.sectionContent}>
          <h2>
            Como <span className={styles.emphasis}>funciona</span>?
          </h2>
          
          <ol className={styles.stepsGrid}>
            {steps.map((step) => (
              <li key={step.number} data-animate>
                <article className={styles.stepCard}>
                  <header>
                    <span className={styles.stepNumber}>{step.number}</span>
                    <div className={styles.icon}>{step.icon}</div>
                    <h3>{step.title}</h3>
                  </header>
                  <p>{step.description}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <Divider />
    </>
  );
}