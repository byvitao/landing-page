import { TELEPHONE, WHATSAPP_TEXT } from "@/shared/contact";

export const steps = [
  {
    number: "01",
    title: "Agendamento",
    href: `https://wa.me/${TELEPHONE}?text=${encodeURIComponent(WHATSAPP_TEXT)}`,
    description: "Escolha o melhor horário para sua consulta e receba um questionário pré-atendimento para personalizarmos sua experiência desde o primeiro contato.",
    icon: "📅"
  },
  {
    number: "02",
    title: "Anamnese e Avaliação",
    description: "Conversa detalhada para entender seu histórico, rotina e relação com a comida, análise de exames e medidas, definição de metas.",
    icon: "📋"
  },
  {
    number: "03",
    title: "Plano Único",
    description: "Entrega do plano alimentar focado nos seus gostos, sem restrições desnecessárias.",
    icon: "🍎"
  },
  {
    number: "04",
    title: "Acompanhamento",
    description: "Suporte contínuo para ajustes e manutenção da sua motivação diária.",
    icon: "📱"
  }
];