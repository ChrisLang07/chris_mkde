import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import '../assets/scss/components/BackToTop.scss';

export default function BackTotop() {
    const [isDisplay, setIsDisplay] = useState(false);

    const readyToTop = () => {
        if (window.scrollY >= window.innerHeight) {
            setIsDisplay(true);
        } else {
            setIsDisplay(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', readyToTop);
        return () => {
            window.removeEventListener('scroll', readyToTop);
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return (
      <div className={`back-to-top ${isDisplay ? "displayed" : ""}`}
            onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} className='arrow'/>
        <span className='arrow-text'>
          TOP
        </span>
      </div>
    );
}