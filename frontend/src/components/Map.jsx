import { useEffect, useState, useRef } from "react";
import Video from "./Video";
import secondVideo from "../assets/movies/massage_3.mp4";
import "../assets/scss/components/Map.scss";
import "../assets/scss/components/Video.scss";

export default function Map() {
  const hours = [
    { day: "Lundi", time: "8:00 - 19:30" },
    { day: "Mardi", time: "8:00 - 19:30" },
    { day: "Mercredi", time: "8:00 - 19:30" },
    { day: "Jeudi", time: "8:00 - 19:30" },
    { day: "Vendredi", time: "8:00 - 19:30" },
    { day: "Samedi", time: "Fermé" },
    { day: "Dimanche", time: "Fermé" },
  ];

  // Référence pour observer la section
  const sectionRef = useRef(null);
  
  // État pour savoir si la section est visible ou non
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Créer un IntersectionObserver pour observer la visibilité de la section
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries; // On prend le premier (et seul) élément observé
        setIsVisible(entry.isIntersecting); // Mettre à jour l'état si l'élément est visible
      },
      { threshold: 0.3 } // On déclenche quand 30% de la section est visible
    );
    
    // Si la référence existe, on commence à observer
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Nettoyer l'observateur à la fin
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Cette effet se lance une seule fois, au montage du composant

  return (
    <div className="map-content">
      {/* Vidéo */}
      <Video video={secondVideo} />

      <div className={`map-content--data container ${isVisible ? "isVisible" : ""}`}>
        {/* Section que l'on veut observer */}
        <div
          className="map-content--infos" // Ajouter la classe "isVisible" si visible
          ref={sectionRef} // La référence de cette section
        >
          <address className="map-content--address">
            <p className="map-content--text">
              4, Chemin de la Touche
              <br />
              36000 Châteauroux
              <br />
              <br />
              Tel : 09.54.87.07.13
              <br />
              E-mail: christophe.langlois.mkde@gmail.com
            </p>
          </address>

          {/* Horaires d'ouverture */}
          <section className="map-content--opening-hours">
            <p>
              <strong>Horaires d'ouverture :</strong>
            </p>
            <div className="opening-hours">
              {hours.map((hour, index) => (
                <div key={index} className="day">
                  <strong>{hour.day} :</strong>
                  <span className="hours">{hour.time}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="map-content--iframe-container">
          <iframe
            className="umap"
            allowFullScreen
            allow="geolocation"
            src="//umap.openstreetmap.fr/fr/map/carte-sans-nom_1159714?scaleControl=false&miniMap=true&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false&captionMenus=true#17/46.78552/1.70604"
            title="Carte de localisation Christophe LANGLOIS MKDE"
            aria-label="Carte de localisation"
          />
          <p>
            <a
              className="umap-link"
              href="//umap.openstreetmap.fr/fr/map/carte-sans-nom_1159714?scaleControl=false&miniMap=true&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false&captionMenus=true#17/46.78552/1.70604"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir en plein écran
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
