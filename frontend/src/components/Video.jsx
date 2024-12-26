import massageVideo from '../assets/movies/massage_2.mp4'
export default function Video() {
    return (
        <video autoPlay muted loop className="background-video">
                <source src={massageVideo} type="video/mp4" />
            </video>
    )
}