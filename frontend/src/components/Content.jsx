import { useEffect, useState, useRef } from 'react';
import Practice from '../assets/images/practice.jpg';
import Door from '../assets/images/door.jpg';
import Inside from '../assets/images/inside.jpg';
import '../assets/scss/components/Content.scss';

export default function Content() {
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const lastScroll = useRef(0);

    const handleScroll = () => {
        if (window.scrollY > lastScroll.current) {
            setIsScrollingDown(true);
        } else if (
          (window.scrollY < lastScroll.current && 
          lastScroll.current <= window.innerHeight) ||
          lastScroll.current === 0 ||
          window.scrollY === 0
        ) {
            setIsScrollingDown(false);
        }

        lastScroll.current = window.scrollY;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
      <div className="content">
        <div
          className={`content-pic ${
            isScrollingDown ? "slow-scroll" : "fast-scroll"
          }`}
        >
          <img
            className="content-img"
            src={Practice}
            alt=" Exterior view of the physiotherapy practice"
            title="Exterior view of the physiotherapy practice"
          />
        </div>
        <div
          className={`content-pic ${
            isScrollingDown ? "slow-scroll" : "fast-scroll"
          }`}
        >
          <img className="content-img" src={Door} alt="" title="" />
        </div>
        <div
          className={`content-pic ${
            isScrollingDown ? "slow-scroll" : "fast-scroll"
          }`}
        >
          <img className="content-img" src={Inside} alt="" title="" />
        </div>
      </div>
    );
}