import Image from "next/image";
import styles from "./solution.module.scss";
import solutionImage from "@/assets/images/solution.png";

export default function Solution() {
  return (
    <section id="solution" className={styles.solution}>
      <div className={styles.imageWrapper}>
        <Image 
          src={solutionImage}
          alt="Vitor Hugo Souza"
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.background}
        />
      </div>

      <div className={styles.sectionContent}>
        <h2>
          Ciência da performance aplicada à <span className={styles.emphasis}>sua realidade</span>
        </h2>

        <div className={styles.contentWrapper}>
          <p data-animate>
            Minha abordagem une a eficiência e precisão do fisiculturismo com a sustentabilidade <strong>que a sua rotina exige</strong>.
          </p>

          <ul className={styles.methodList}>
            <li data-animate>
              <strong>Métricas Reais de Evolução:</strong> Foco na composição corporal, não apenas no ponteiro da balança.
            </li>
            <li data-animate>
              <strong>Anamnese Personalizada:</strong> Alinhamento do plano ao seu histórico metabólico e estilo de vida.
            </li>
            <li data-animate>
            <strong>Planejamento Nutricional Estratégico:</strong> Dieta para hipertrofia ou emagrecimento sem restrições desnecessárias.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}