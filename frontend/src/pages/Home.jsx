import Video from '../components/Video';
import mainVideo from '../assets/movies/massage_2.mp4';
import Content from '../components/Content';
import Localisation from '../components/Localisation';
import Form from '../components/Form';
import '../assets/scss/components/Home.scss';

export default function Home() {
    
    return (
      <section className="home">
        <div className="home-background" id="home-section">
          <Video video={mainVideo} />
          <h1 className="main-title">
            {" "}
            Christophe LANGLOIS | <br />
            Masseur-kinésithérapeute DE
          </h1>
        </div>
        <div id="content-section">
          <Content />
        </div>
        <div id="localisation-section">
          <Localisation />
        </div>
        <div id="contact-section">
          <Form />
        </div>
      </section>
    );
}