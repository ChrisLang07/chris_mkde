import { useEffect, useState } from 'react';
import '../assets/scss/components/Content.scss';

export default function Content() {
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    let lastScroll = 0;

    const handleScroll = () => {
        if (window.scrollY > lastScroll) {
            setIsScrollingDown(true);
        } else {
            setIsScrollingDown(false);
        }
        lastScroll = window.scrollY;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <div className="content">
            <div className={`content-pic ${isScrollingDown ? 'slow-scroll' : 'fast-scroll'}`}></div>
            <div className={`content-pic ${isScrollingDown ? 'slow-scroll' : 'fast-scroll'}`}></div>
            <div className={`content-pic ${isScrollingDown ? 'slow-scroll' : 'fast-scroll'}`}></div>
        </div>
    );
}
