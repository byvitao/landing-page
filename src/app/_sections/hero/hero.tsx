import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.scss";
import heroImage from "@/assets/images/hero.jpeg";
import heroBg from "@/assets/images/hero-bg.png";
import Divider from "./divider/divider";

export default function Hero() {
  return (
    <>
      <section id="hero" className={styles.hero}>
        <Image
          src={heroBg}
          alt="Imagem de fundo escura"
          priority
          fill
          sizes="100vw"
          quality={75}
          className={styles.background}
        />
        <div className={styles.content}>
          <h1 className={styles.title}>
            Nutrição sem frescura, apenas o <span className={styles.emphasis} >básico</span> e <span className={styles.emphasis} >eficiente</span>.
          </h1>

          <p className={styles.description}>
            Cansado de dietas mirabolantes? Faça parte do time e alcance suas metas através de um plano alimentar
            sustentável, focado nos seus objetivos e alinhado com sua rotina.
          </p>

          <div className={styles.ctaGroup}>
            <Link href="#" className={styles.primaryBtn}>
              <svg
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar-check-icon lucide-calendar-check"><path d="M8 2v4" /><path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" />
                <path d="m9 16 2 2 4-4" />
              </svg>
              Agendar Consulta
            </Link>
          </div>

          <p className={styles.service}>
            Atedimento em Novo Hamburgo, Sapiranga e Gramado • CRN16209D
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src={heroImage}
            alt="Vitor Hugo Souza - Nutricionista"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className={styles.photo}
          />
        </div>
      </section>
      <Divider />
    </>
  );
}