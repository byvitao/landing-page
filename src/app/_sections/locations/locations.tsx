import styles from "./locations.module.scss";
import { locations } from "./data";
import LocationCard from "./location-card/location-card";

export default function Locations(){
  return (
    <section id="locations" className={styles.locations}>
      <div className={styles.sectionContent}>
        <h2>
          Locais de Atendimento
        </h2>
        <div className={styles.locationList}>
          {
            locations.map((location, index) => (
              <LocationCard key={index} location={location}/>
            ))
          }
        </div>
      </div>
    </section>
  );
}