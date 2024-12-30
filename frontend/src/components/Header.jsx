import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/scss/Main.scss';
import '../assets/scss/components/Header.scss';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScroll(true);
        } else {
            setIsScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    // Fonction pour basculer l'état du menu (ouvrir ou fermer)
    const toggleMenu = (event) => {
        event.stopPropagation();  // Empêche la propagation du clic
        setIsOpen(prevState => !prevState);  // Change l'état du menu (ouvrir ou fermer)
    };

    // Fonction pour fermer le menu si on clique en dehors
    const handleClickOutside = (event) => {
        // Si le clic est en dehors du menu ou du hamburger, on ferme le menu
        if (!event.target.closest('.header-menu') && !event.target.closest('.menu-hamburger')) {
            setIsOpen(false);
        }
    };

    // Utilisation de useEffect pour ajouter et supprimer l'écouteur d'événements global
    useEffect(() => {
        window.addEventListener('click', handleClickOutside);  // Ajoute l'écouteur pour détecter les clics en dehors
        return () => {
            window.removeEventListener('click', handleClickOutside);  // Nettoyage de l'écouteur
        };
    }, []);

    return (
      <header className={`${isScroll ? "isScroll" : ""}`}>
        <div className='header-content container'>
          <h1 className="header-title">
            Christophe LANGLOIS | Maseur-kinésithérapeute
          </h1>
          <div className="header-menu">
            <nav
              className={`menu-hamburger ${isOpen ? "isOpen" : ""}`}
              onClick={toggleMenu} // Basculer l'état du menu au clic sur le hamburger
            >
              <div className="menu-hamburger--bar"></div>
              <div className="menu-hamburger--bar"></div>
              <div className="menu-hamburger--bar"></div>
            </nav>
            <nav className={`menu ${isOpen ? "isVisible" : ""}`}>
              <NavLink className="menu-link" to="/">
                Home
              </NavLink>
              <NavLink className="menu-link" to="/office">
                Office
              </NavLink>
              <NavLink className="menu-link" to="/contact">
                Contact
              </NavLink>
            </nav>
          </div>
        </div>
      </header>
    );
}
