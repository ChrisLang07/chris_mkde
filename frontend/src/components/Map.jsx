import Video from "./Video";
import secondVideo from "../assets/movies/massage_3.mp4";
import "../assets/scss/components/Map.scss";
import "../assets/scss/components/Video.scss";

export default function Map() {
  return (
    <div className="map-content">
      <Video video={secondVideo} />
      <div className="map-content--infos">
        <div className="map-content--adress">
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
            <p><strong>Horaires d'ouverture :</strong></p>
            <ul>
              <li><strong>Lundi :</strong> 8:00 - 19:30</li>
              <li><strong>Mardi :</strong> 8:00 - 19:30</li>
              <li><strong>Mercredi :</strong> 8:00 - 19:30</li>
              <li><strong>Jeudi :</strong> 8:00 - 19:30</li>
              <li><strong>Vendredi :</strong> 8:00 - 19:30</li>
              <li><strong>Samedi :</strong> Fermé</li>
              <li><strong>Dimanche :</strong> Fermé</li>
            </ul>
          </div>
      </div>

      <div className="map-content--iframe-container">
        <iframe
          className="umap"
          frameborder="0"
          allowfullscreen
          allow="geolocation"
          src="//umap.openstreetmap.fr/fr/map/carte-sans-nom_1159394?scaleControl=false&miniMap=true&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false&captionMenus=true"
          title="Carte de localisation Christophe LANGLOIS MKDE"
        />
        <p>
          <a className="umap-link" href="//umap.openstreetmap.fr/fr/map/carte-sans-nom_1159394?scaleControl=false&miniMap=true&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false&captionMenus=true">
            Voir en plein écran
          </a>
        </p>
      </div>
    </div>
  );
}
