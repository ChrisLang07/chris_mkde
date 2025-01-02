import Video from './Video';
import secondVideo from '../assets/movies/massage_3.mp4';
import '../assets/scss/components/Map.scss';
import '../assets/scss/components/Video.scss';

export default function Map() {
    return (
      <>
        <Video video={secondVideo} />
        <p className='map-text'>
            4, Chemin de la Touche<br />36000 Châteauroux<br />
            <br />Tel : 09.54.87.07.13<br />
            E-mail: christophe.langlois.mkde@gmail.com
        </p>
      </>
    );
}