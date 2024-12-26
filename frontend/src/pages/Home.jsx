import massageVideo from '../assets/movies/massage_2.mp4';
import '../assets/scss/components/Home.scss';

export default function Home() {
    return (
        <div className="container home">
            <video autoPlay muted loop className="background-video">
                <source src={massageVideo} type="video/mp4" />
            </video>
            <h1 className='home-title'>Christophe LANGLOIS | Masseur-kinésithérapeute</h1>
        </div>

    )
}