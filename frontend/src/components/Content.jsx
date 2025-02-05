import { useEffect, useState, useRef } from 'react';
import Practice from '../assets/images/practice.webp';
import Door from '../assets/images/door.webp';
import Inside from '../assets/images/inside.webp';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import '../assets/scss/components/Content.scss';

export default function Content() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const lastScroll = useRef(0);

  const images = [Practice, Door, Inside];

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
  }, []);

  const openCarousel = (index) => {
    setCurrentImageIndex(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }; 

  return (
    <>
      <div className="content">
        <div
          className={`content-pic ${isScrollingDown ? "slow-scroll" : "fast-scroll"
            }`}
          onClick={() => openCarousel(0)}
        >
          <img
            className="content-img"
            src={Practice}
            alt=" Exterior view of the physiotherapy practice"
            title="Exterior view of the physiotherapy practice"
          />
        </div>
        <div
          className={`content-pic ${isScrollingDown ? "slow-scroll" : "fast-scroll"
            }`}
          onClick={() => openCarousel(1)}
        >
          <img className="content-img"
            src={Door} alt="Practice door entrance"
            title="Practice door entrance"
          />
        </div>
        <div
          className={`content-pic ${isScrollingDown ? "slow-scroll" : "fast-scroll"
            }`}
          onClick={() => openCarousel(2)}
        >
          <img className="content-img"
            src={Inside}
            alt="entrance hallway"
            title="entrance hallway" />
        </div>
      </div>

      {/* Carousel modal */}
      {isCarouselOpen && (
        <div className="carousel-overlay" onClick={closeCarousel}>
          <div className="carousel" onClick={(e) => e.stopPropagation()}>
            <button className="carousel-close" >
              <AiOutlineClose onClick={closeCarousel} />
            </button>
            <div className='carousel-nav'>
              <button className="carousel-prev">
                <AiOutlineLeft onClick={prevImage} />
              </button>
              <img className="carousel-image" src={images[currentImageIndex]} alt="carousel" />
              <button className="carousel-next">
                <AiOutlineRight onClick={nextImage} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};