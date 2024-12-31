import Video from '../components/Video';
import Content from '../components/Content';
import mainVideo from '../assets/movies/massage_2.mp4';
import '../assets/scss/components/Home.scss';

export default function Home() {
    
    return (
      <section className='home'>
        <div className="home-background">
          <Video video={mainVideo}/>
          <h1 className='main-title'> Christophe LANGLOIS | <br />Masseur-kinésithérapeute DE</h1>
        </div>
        <Content />
      </section>
    )
}