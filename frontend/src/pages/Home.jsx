import Video from '../components/Video';
import mainVideo from '../assets/movies/massage_2.mp4';
import Content from '../components/Content';
import ContentText from '../components/ContentText';
import Map from '../components/Map';
import Form from '../components/Form';
import BackTotop from '../components/BackToTop';
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
        <div id="content-section" className='container'>
          <Content />
          <ContentText />
        </div>
        <div id="map-section">
          <Map />
        </div>
        <div id="contact-section">
          <Form />
        </div>
        <BackTotop />
      </section>
    );
}