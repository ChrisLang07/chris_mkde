import mainVideo from '../assets/movies/massage_2.mp4';
import '../assets/scss/components/Video.scss';

export default function Video() {
    return (
      <video autoPlay muted loop className="background-video">
        <source src={mainVideo} type="video/mp4" />
      </video>
    );
}