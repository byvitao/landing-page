import styles from "./struggles.module.scss";
import { cards } from "./data";


export default function Struggles(){
  return(
    <section id="struggles" className={styles.struggles}>
      <div className={styles.sectionContent}>
        <h2>
          Por que o seu esforço ainda não se transformou em <span className={styles.emphasis}>RESULTADOS</span>?
        </h2>
      
        <p className={styles.description} data-animate>
          Muitas vezes, o que te impede de evoluir não é a falta de vontade, mas a <strong>falta de ajuste fino</strong>. No dia a dia, é comum se sentir:
        </p>

        <div className={styles.cardGrid}>
          {
            cards.map((card, i) => (
              <div 
                key={i}
                data-animate
                className={styles.card}>
                  <card.icon width="64" height="64" className={`${styles.icon} ${card.iconColor}`}/>
                  <div className={styles.cardContent}>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}