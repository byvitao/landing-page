import Divider from "./divider/divider";
import styles from "./why-me.module.scss";
const COMPARISONS = [
  { topic: "Anamnese", me: "Anamnese personalizada e humanizada", others: "Formulário pronto" },
  { topic: "Métricas", me: "Composição corporal e fotos padronizadas", others: "Avaliação de fotos sem padronização" },
  { topic: "Planejamento nutricional", me: "Planejamento 100% personalizado, sustentável e sem malabarismos", others: "Planos prontos e inflexíveis" },
  { topic: "Entrega do plano", me: "Plano entregue no fim da consulta", others: "Entrega após vários dias úteis" },
  { topic: "Alterações do plano", me: "Alterações de acordo com a necessidade do paciente, sem cobrança adicional", others: "Alterações limitadas" },
  { topic: "Resultados", me: "Resultados garantidos e constantes", others: "Resultados incertos e intermitentes" },
];

export default function WhyMe(){
  return(
    <>
      <section id="whyMe" className={styles.whyMe}>
        <div className={styles.sectionContent}>
          <h2>
            A diferença entre meu <span className={styles.emphasis}>ACOMPANHAMENTO</span> e a dieta de internet
          </h2>
          <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr data-animate>
                  <th>&nbsp;</th>
                  <th className={styles.me}>Meu Acompanhamento</th>
                  <th>Dieta de Internet</th>
                </tr>
              </thead>
              <tbody>
                {
                  COMPARISONS.map((item, index) => (
                    <tr key={index} data-animate>
                      <td>{item.topic}</td>
                      <td className={styles.me}>{item.me}</td>
                      <td>{item.others}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
}