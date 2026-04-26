import { getFromApi } from "@/shared/api";

interface IFaq {
  question: string;
  answer: string;
}

export const faqsFallback: IFaq[] = [
  {
    question: "Como funciona a primeira consulta?",
    answer: "A primeira consulta dura cerca de 1h, onde avaliamos seu histórico clínico, hábitos e objetivos para traçar a melhor estratégia."
  },
  {
    question: "O plano alimentar é entregue na hora?",
    answer: "O plano alimentar feito durante a consulta, e entregue ao final da mesma."
  },
  {
    question: "Você atende convênios?",
    answer: "Trabalho apenas com atendimentos particulares."
  },
  {
    question: "Preciso comprar suplementos caros?",
    answer: "Não! A base do tratamento é comida de verdade. Suplementos são sugeridos apenas se houver necessidade clínica."
  }
];

export async function getFaqs(): Promise<IFaq[]> {
  const response = await getFromApi<IFaq[]>("/landing-page/faqs");

  if (!response.success || !response.data) {
    return faqsFallback;
  }

  return response.data;
}