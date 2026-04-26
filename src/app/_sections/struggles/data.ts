import { 
  GraphArrowDecreaseIcon,
  BatteryChargingLowIcon,
  BrainstormIcon,
  MeasuringTapeIcon
} from "@/assets/svgs";
import styles from "./struggles.module.scss";

export const cards = [
  {
    title: "Frustração Estética",
    description: "Você treina pesado, mas a definição muscular parece escondida sob uma camada que não sai.",
    icon: GraphArrowDecreaseIcon,
    iconColor: styles.red,
  },
  {
    title: "Fadiga Constante",
    description: "Cansado de dietas restritivas que roubam sua energia e o prazer de comer.",
    icon: BatteryChargingLowIcon,
    iconColor: styles.orange,
  },
  {
    title: "Sobrecarga de Informação",
    description: "Confuso com tantas dicas contraditórias na internet que nunca dizem o que funciona para VOCÊ.",
    icon: BrainstormIcon,
    iconColor: styles.blue,
  },
  {
    title: "Efeito Platô",
    description: "Sentindo que chegou em um limite de evolução que nenhum treino comum consegue ultrapassar.",
    icon: MeasuringTapeIcon,
    iconColor: styles.yellow
  }
]