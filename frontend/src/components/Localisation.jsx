import Video from '../components/Video';
import secondVideo from '../assets/movies/massage_3.mp4';
import '../assets/scss/components/Localisation.scss';
import '../assets/scss/components/Video.scss';

export default function Localisation() {
    return (
      <>
        <Video video={secondVideo} />
        <p className='localisation-text'>
            4, Chemin de la Touche<br />36000 Châteauroux
        </p>
      </>
    );
}