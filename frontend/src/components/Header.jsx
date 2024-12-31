import { useEffect, useState } from 'react';
import '../assets/scss/Main.scss';
import '../assets/scss/components/Header.scss';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    const [isActive, setIsActive] = useState(""); 

    
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }

        handleVisibility(); 
    };

    const handleVisibility = () => {
        const homeSection = document.getElementById('home-section');
        const officeSection = document.getElementById('content-section');
        const localisationSection = document.getElementById('localisation-section');
        const contactSection = document.getElementById('contact-section');

        
        if (homeSection && officeSection && contactSection) {
            if (homeSection.getBoundingClientRect().top <= window.innerHeight &&
                homeSection.getBoundingClientRect().bottom >= 0) {
                setIsActive("home");
            } else if (officeSection.getBoundingClientRect().top <= window.innerHeight &&
                officeSection.getBoundingClientRect().bottom >= 0) {
                setIsActive("office");
            } else if (localisationSection.getBoundingClientRect().top <= window.innerHeight &&
                localisationSection.getBoundingClientRect().bottom >= 0) {
                    setIsActive("localisation");
            }else if (contactSection.getBoundingClientRect().top <= window.innerHeight &&
                contactSection.getBoundingClientRect().bottom >= 0) {
                setIsActive("contact");
            }
        }
    };

    
    useEffect(() => {
        handleVisibility();
    }, []); 

   
    useEffect(() => {
        window.addEventListener('scroll', handleScroll); 
        return () => {
            window.removeEventListener('scroll', handleScroll); 
        };
    }); 
    
    const toggleMenu = (event) => {
        event.stopPropagation();  
        setIsOpen(prevState => !prevState);  
    };

  
    const handleClickOutside = (event) => {
        if (!event.target.closest('.header-menu') && !event.target.closest('.menu-hamburger')) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside); 
        return () => {
            window.removeEventListener('click', handleClickOutside); 
        };
    }, []);

 
    const handleClickLink = (id) => {
        setIsActive(id);
    };

    return (
        <header className={`${isScroll ? "isScroll" : ""}`}>
            <div className="header-content container">
                <h1 className="header-title">ChrisLang | MKDE</h1>
                <div className="header-menu">
                    <nav
                        className={`menu-hamburger ${isOpen ? "isOpen" : ""}`}
                        onClick={toggleMenu}
                    >
                        <div className="menu-hamburger--bar"></div>
                        <div className="menu-hamburger--bar"></div>
                        <div className="menu-hamburger--bar"></div>
                    </nav>
                    <nav className={`menu ${isOpen ? "isVisible" : ""}`}>
                        <a
                            href="#home-section"
                            className={`menu-link ${isActive === "home" ? "active" : ""}`}
                            onClick={() => handleClickLink("home")}
                        >
                            Home
                        </a>
                        <a
                            href="#content-section"
                            className={`menu-link ${isActive === "office" ? "active" : ""}`}
                            onClick={() => handleClickLink("office")}
                        >
                            Office
                        </a>
                        <a href="#localisation-section"
                            className={`menu-link ${isActive === "localisation" ? "active" : ""}`}
                            onClick={() => handleClickLink("localisation")}
                        >
                            Localisation
                        </a>
                        <a
                            href="#contact-section"
                            className={`menu-link ${isActive === "contact" ? "active" : ""}`}
                            onClick={() => handleClickLink("contact")}
                        >
                            Contact  
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
