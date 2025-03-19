/* global gtag */
import { useState, useEffect } from 'react';
import PolicyContent from '../components/PolicyContent';
import CustomizeCookies from '../components/CustomizeCookies';
import '../assets/scss/components/CookieConsent.scss';

export default function CookieConsent() {
    const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(false);

    useEffect(() => {
        if (typeof localStorage !== 'undefined') {
            try {
                const cookiesStatus = localStorage.getItem('cookiesAccepted');
                if (cookiesStatus === null) {
                    setIsCookieBannerVisible(true); 
                } else {
                    setIsCookieBannerVisible(false); 
                }
            } catch (error) {
                console.error('Erreur d\'accès au localStorage', error);
                setIsCookieBannerVisible(true); 
            }
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setIsCookieBannerVisible(false);

        // Vérification si gtag est défini et disponible
        if (typeof gtag === 'function') {
            gtag('config', 'G-2MSDXE6DD9');
        } else {
            console.error('Google Analytics (gtag) n\'est pas disponible');
        }
    };

    const refuseCookies = () => {
        localStorage.setItem('cookiesAccepted', 'false');
        setIsCookieBannerVisible(false);
        
        if (typeof gtag === 'function') {
            window['ga-disable-G-2MSDXE6DD9'] = true;
        }
    };

   return (
        <>
            {isCookieBannerVisible && (
                <div className="cookie-banner" role="alert" aria-live="assertive">
                    <div className="cookie-content">
                        <p>
                            Ce site utilise des cookies pour améliorer votre expérience.<br /> En poursuivant votre navigation, vous acceptez notre
                            <PolicyContent />
                        </p>
                        <div className="cookie-actions">
                            <button onClick={acceptCookies} className="accept-button" aria-label="Accepter les cookies">Accepter les cookies</button>
                            <button onClick={refuseCookies} className="refuse-button" aria-label="Refuser les cookies">Refuser</button>
                            <CustomizeCookies 
                                acceptCookies={acceptCookies} 
                                setIsCookieBannerVisible={setIsCookieBannerVisible}
                            /> 
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
