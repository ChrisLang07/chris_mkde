import Video from '../components/Video';
import contentVideo from '../assets/movies/massage_3.mp4';

import '../assets/scss/components/Content.scss';

export default function Content() {
    return (
        <div className="content">
            <Video video={contentVideo}/>
        </div>
    )
}