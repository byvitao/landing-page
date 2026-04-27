export interface ILocation {
  title: string;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  mapUrl: string;
  latitude: string;
  longitude: string;
}

export const locations: ILocation[] = [
  {
    title: "Bioflex Nutrition - Novo Hamburgo",
    address: "Rua Primeiro de Março, 467",
    neighborhood: "Centro",
    city: "Novo Hamburgo",
    state: "RS",
    zipCode: "93510-033",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.0808872311304!2d-51.13260398810907!3d-29.68843447500106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951943b43ae92d0d%3A0xb57828762c23d9cc!2sBioflex%20Nutrition%20Novo%20Hamburgo!5e0!3m2!1spt-BR!2sbr!4v1772332994131!5m2!1spt-BR!2sbr",
    latitude: "-29.68829759183587",
    longitude: "-51.129991778464344"
  },
  {
    title: "Pro Fit Academia - Sapiranga",
    address: "Rua Gen. Daltro Filho, 238",
    neighborhood: "Centro",
    city: "Sapiranga",
    state: "RS",
    zipCode: "93800-236",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.940658974614!2d-51.00808454752537!3d-29.634466711209896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95193f778ebaf7b7%3A0xe3dd4f86498ead45!2sPro%20Fit%20Academia!5e0!3m2!1spt-BR!2sbr!4v1772333153075!5m2!1spt-BR!2sbr",
    latitude: "-29.63432689275021",
    longitude: "-51.00317608763583"
  },
  {
    title: "Power CT",
    address: "Estr. Ver. Oscar Horn, 100",
    neighborhood: "Canudos",
    city: "Novo Hamburgo",
    state: "RS",
    zipCode: "93546-010",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.142117843441!2d-51.10027288810918!3d-29.68665907500201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951943f56d43090d%3A0xce6a5aaf44239119!2sPOWER%20CENTRO%20DE%20TREINAMENTO!5e0!3m2!1spt-BR!2sbr!4v1772333240888!5m2!1spt-BR!2sbr",
    latitude: "-29.6865285220353",
    longitude: "-51.09771407792596"
  },
  {
    title: "Gramado",
    address: "R. Emilio Leobet, 1517",
    neighborhood: "Dutra",
    city: "Gramado",
    state: "RS",
    zipCode: "95670-000",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3477.1437949971255!2d-50.86696382368358!3d-29.366078600153447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDIxJzU3LjkiUyA1MMKwNTEnNTEuOCJX!5e0!3m2!1spt-BR!2sbr!4v1777307727494!5m2!1spt-BR!2sbr",
    latitude: "-29.365943021778882",
    longitude: "-50.864388903153895"
  }
]