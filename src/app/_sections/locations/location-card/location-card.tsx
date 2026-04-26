import styles from "./location-card.module.scss";
import { ILocation } from "../data";
import Link from "next/link";

export default function LocationCard({ location }: { location: ILocation }){
  return(
    <article
      className={styles.card}
      itemScope
      itemType="https://schema.org/Place"
      data-animate
    >
      <div className={styles.map}>
        <iframe 
          src={location.mapUrl}
          width="100%"
          height="250"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Mapa ${location.title}`}
        ></iframe>
      </div>

      <div className={styles.addressInfo}>
        <h3 itemProp="name">{location.title}</h3>

        <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="streetAddress">{location.address}</span><span>, </span>
          <span itemProp="addressLocality">{location.city}</span><span> - </span>
          <span itemProp="addressRegion">{location.state}</span><span> </span>
          <span itemProp="postalCode">{location.zipCode}</span>
        </p>
      </div>
      <Link 
        href={`https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`}
        target="_blank"
        className={styles.routesLink}
      >
        <span>
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
            className="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>
          </svg>
          Ver Rotas
        </span>
      </Link>
    </article>
  );
}