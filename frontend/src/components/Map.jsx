import Video from "./Video";
import secondVideo from "../assets/movies/massage_3.mp4";
import "../assets/scss/components/Map.scss";
import "../assets/scss/components/Video.scss";

export default function Map() {
  return (
    <div className="map-content">
      <Video video={secondVideo} />
      <div className="map-content--infos">
        <div className="map-content--address">
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
        </div>
        <div className="map-content--opening-hours">
          <p>
            <strong>Horaires d'ouverture :</strong>
          </p>
          <div className="opening-hours">
            <div className="day">
              <strong>Lundi :</strong>
              <span className="hours">8:00 - 19:30</span>
            </div>
            <div className="day">
              <strong>Mardi :</strong>
              <span className="hours">8:00 - 19:30</span>
            </div>
            <div className="day">
              <strong>Mercredi :</strong>
              <span className="hours">8:00 - 19:30</span>
            </div>
            <div className="day">
              <strong>Jeudi :</strong>
              <span className="hours">8:00 - 19:30</span>
            </div>
            <div className="day">
              <strong>Vendredi :</strong>
              <span className="hours">8:00 - 19:30</span>
            </div>
            <div className="day">
              <strong>Samedi :</strong>
              <span className="hours">Fermé</span>
            </div>
            <div className="day">
              <strong>Dimanche :</strong>
              <span className="hours">Fermé</span>
            </div>
          </div>
        </div>
      </div>

      <div className="map-content--iframe-container">
        <iframe
          className="umap"
          frameborder="0"
          allowfullscreen
          allow="geolocation"
          src="//umap.openstreetmap.fr/fr/map/carte-sans-nom_1159714?scaleControl=false&miniMap=true&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false&captionMenus=true#17/46.78552/1.70604"
          title="Carte de localisation Christophe LANGLOIS MKDE"
        />
        <p>
          <a
            className="umap-link"
            href="//umap.openstreetmap.fr/fr/map/carte-sans-nom_1159714?scaleControl=false&miniMap=true&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false&captionMenus=true#17/46.78552/1.70604"
          >
            Voir en plein écran
          </a>
        </p>
      </div>
    </div>
  );
}
