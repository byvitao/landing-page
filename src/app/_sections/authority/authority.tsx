import Image from "next/image";
import authorityImage from "@/assets/images/authority.png";
import Divider from "./divider/divider";
import styles from "./authority.module.scss";

const START_PROFESSIONAL_EXP = 2010;
const START_SPORT_EXP = 2008;

export default function Authority() {
  const now = new Date().getFullYear();
  const yearsProfessionalExp = now - START_PROFESSIONAL_EXP;
  const yearsSportExp = now - START_SPORT_EXP;

  return (
    <>
      <section id="authority" className={styles.authority}>
        <div className={styles.sectionContent}>

          <div className={styles.content}>
            <h2>
              Prazer, meu nome é <span className={styles.name}>Vitor Hugo Souza</span>, mais conhecido como <span className={styles.name}>Vitão</span>, e estou aqui para transformar teu esforço em <span className={styles.emphasis}>RESULTADO</span>.
            </h2>

            <p data-animate className={styles.description}>
              Nutricionista e entusiasta do esporte, carrego 18 anos de bagagem em treinos de alto rendimento. Minha missão é direcionar seu <strong>empenho</strong> e eliminar travas que atrasam seu progresso, aplicando a ciência que <strong>estudo</strong> e <strong>pratico</strong>.
            </p>

            <div className={styles.statsGrid}>
              <div data-animate className={styles.statItem}>
                <strong>+3.000</strong>
                <span>Vidas Transformadas</span>
              </div>
              <div data-animate className={styles.statItem}>
                <strong>{yearsSportExp} Anos</strong>
                <span>de Treino e Dieta</span>
              </div>
              <div data-animate className={styles.statItem}>
                <strong>Atleta</strong>
                <span>Fisiculturismo e Powerlifting</span>
              </div>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src={authorityImage}
              alt="Vitor Hugo Souza"
              sizes="(max-width: 768px) 100vw, 300px"
              className={styles.photo}
            />
            <div className={styles.experienceCard}>
              <span>{`+${yearsProfessionalExp}`}</span>
              <p>Anos de expêriencia na área</p>
            </div>
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
}