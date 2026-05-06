import styles from "./process.module.scss";
import { steps } from "./data";
import Divider from "./divider/divider";
import IconWhatsapp from "@/shared/components/WhatsappIcon";

export default function Process() {

  return (
    <>
      <section id="method" className={styles.process}>
        <div className={styles.sectionContent}>
          <h2>
            Como <strong className={styles.emphasis}>funciona</strong>?
          </h2>

          <ol className={styles.stepsGrid}>
            {steps.map((step) => (
              <li key={step.number} data-animate="process">
                <article className={styles.stepCard}>
                  <header>
                    <span className={styles.stepNumber} aria-hidden="true">{step.number}</span>
                    <div className={styles.icon} aria-hidden="true">{step.icon}</div>
                    {step.href ? (
                      <h3>
                        <a
                          href={step.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.ctaBtn} aria-label={`Passo ${step.number}: ${step.title}. Agendar agora pelo WhatsApp.`}
                        >
                          <IconWhatsapp />
                          {step.title}
                        </a>
                      </h3>
                    ) : (
                      <h3>{step.title}</h3>
                    )}
                  </header>
                  <p>{step.description}</p>
                </article>
              </li>
            ))}
          </ol>
        </div >
      </section >
      <Divider />
    </>
  );
}