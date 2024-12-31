import '../assets/scss/components/Video.scss';

export default function Video({video }) { 
    return (
      <video autoPlay muted loop className="background-video">
        <source src={video} type="video/mp4" />
      </video>
    );
}