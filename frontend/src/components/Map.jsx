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

  return (
    <div className="map-content">
      {/* Vidéo */}
      <Video video={secondVideo} />

      <div className="map-content--data container">
        <div className="map-content--infos">
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
