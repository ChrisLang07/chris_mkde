import { useEffect, useState } from 'react';
import '../assets/scss/components/Content.scss';

export default function Content() {
    const [isScrollingDown, setIsScrollingDown] = useState(false);  // Pour savoir si on scroll vers le bas
    let lastScroll = 0;

    const handleScroll = () => {
        if (window.scrollY > lastScroll) {
            setIsScrollingDown(true);  // Scroll vers le bas
        } else {
            setIsScrollingDown(false);  // Scroll vers le haut
        }
        lastScroll = window.scrollY;  // On met à jour la dernière position du scroll
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);  // Ajouter un écouteur d'événements pour le scroll
        return () => {
            window.removeEventListener('scroll', handleScroll);  // Nettoyage quand le composant est détruit
        };
    }, []);  // Le useEffect se lance une seule fois

    return (
        <div className="content">
            <div className={`content-pic ${isScrollingDown ? 'slow-scroll' : 'fast-scroll'}`}></div>
            <div className={`content-pic ${isScrollingDown ? 'slow-scroll' : 'fast-scroll'}`}></div>
            <div className={`content-pic ${isScrollingDown ? 'slow-scroll' : 'fast-scroll'}`}></div>
        </div>
    );
}
