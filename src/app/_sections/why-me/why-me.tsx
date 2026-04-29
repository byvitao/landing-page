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

export default function WhyMe() {
  return (
    <>
      <section id="whyMe" className={styles.whyMe}>
        <div className={styles.sectionContent}>
          <h2>
            A diferença entre meu <strong className={styles.emphasis}>ACOMPANHAMENTO</strong> e a dieta de internet
          </h2>
          <div className={styles.tableContainer}>
            <table>
              <caption className="sr-only" style={{ display: 'none' }}>
                Comparativo entre o acompanhamento do Nutricionista Vitor Hugo e dietas genéricas de internet
              </caption>
              <thead>
                <tr data-animate>
                  <th scope="col">Tópico</th>
                  <th scope="col" className={styles.me}><strong>Meu Acompanhamento</strong></th>
                  <th scope="col">Dieta de Internet</th>
                </tr>
              </thead>
              <tbody>
                {
                  COMPARISONS.map((item, index) => (
                    <tr key={index} data-animate>
                      <th scope="row">{item.topic}</th>
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