import styles from "./struggles.module.scss";
import { cards } from "./data";
import Divider from "./divider/divider";


export default function Struggles() {
  return (
    <>
      <section id="struggles" className={styles.struggles}>
        <div className={styles.sectionContent}>
          <h2>
            Por que o seu esforço ainda não se transformou em <strong className={styles.emphasis}>RESULTADOS</strong>?
          </h2>

          <p className={styles.description} data-animate>
            Muitas vezes, o que te impede de evoluir não é a falta de vontade, mas a <strong>falta de ajuste fino</strong>. No dia a dia, é comum se sentir:
          </p>

          <ul className={styles.cardGrid}>
            {
              cards.map((card, i) => (
                <li
                  key={i}
                  data-animate
                  className={styles.cardItem}>
                  <article className={styles.card}>
                    <card.icon width="64" height="64" className={`${styles.icon} ${styles[card.iconColor]}`} aria-hidden="true" />
                    <div className={styles.cardContent}>
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                  </article>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
      <Divider />
    </>
  );
}