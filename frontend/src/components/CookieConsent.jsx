import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import '../assets/scss/components/CookieConsent.scss';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // cookies essentiels toujours cochés
    analytics: true, // Google Analytics par défaut non sélectionné
  });

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà consenti via les cookies
    if (!Cookies.get('cookieConsent')) {
      setIsVisible(true); // Afficher la bannière si pas de consentement
    }
  }, []);

  const handleAcceptAll = () => {
    // Accepter tous les cookies, y compris Analytics
    Cookies.set('cookieConsent', 'all', { expires: 365 });
    setIsVisible(false);
    loadAllCookies();
  };

  const handleAcceptEssential = () => {
    // Accepter uniquement les cookies essentiels
    Cookies.set('cookieConsent', 'essential', { expires: 365 });
    setIsVisible(false);
    loadEssentialCookies();
  };

  const handleOpenModal = () => {
    setIsModalVisible(true); // Ouvrir la fenêtre modale de personnalisation
  };

  const handleCloseModal = () => {
    setIsModalVisible(false); // Fermer la fenêtre modale
  };

  const handleSavePreferences = () => {
    // Sauvegarder les préférences des cookies dans un cookie
    Cookies.set('cookiePreferences', JSON.stringify(cookiePreferences), { expires: 365 });
    setIsModalVisible(false);
    if (cookiePreferences.essential) loadEssentialCookies();
    if (cookiePreferences.analytics) loadAnalyticsCookies();
  };

  const loadEssentialCookies = () => {
    // Charger uniquement les cookies essentiels
    console.log("Chargement des cookies essentiels...");
  };

  const loadAnalyticsCookies = () => {
    // Charger les cookies analytiques (Google Analytics)
    console.log("Chargement des cookies analytiques...");
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
  };

  const loadAllCookies = () => {
    // Charger tous les cookies
    loadEssentialCookies();
    loadAnalyticsCookies();
  };

  return (
    <>
      {isVisible && (
        <div className="banner">
          <p className="text">
            Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez accepter ou refuser les cookies non essentiels.{' '}
            <a href="/politique-de-confidentialite" className="link">En savoir plus sur notre politique de confidentialité</a>.
          </p>
          <div>
            <button onClick={handleAcceptAll} className="button">Accepter tous les cookies</button>
            <button onClick={handleAcceptEssential} className="button">Accepter uniquement les cookies essentiels</button>
            <button onClick={handleOpenModal} className="button">Personnaliser</button>
          </div>
        </div>
      )}

      {/* Fenêtre modale pour la personnalisation des cookies */}
      {isModalVisible && (
        <div className="modal">
          <div className="modalContent">
            <h3>Personnaliser vos préférences de cookies</h3>
            <div className="checkboxContainer">
              <input
                type="checkbox"
                checked={cookiePreferences.essential}
                disabled // Les cookies essentiels sont non modifiables
              />
              <label>Cookies essentiels (obligatoires)</label>
            </div>
            <div className="checkboxContainer">
              <input
                type="checkbox"
                checked={cookiePreferences.analytics}
                onChange={() => setCookiePreferences({ ...cookiePreferences, analytics: !cookiePreferences.analytics })}
              />
              <label>Cookies analytiques (Google Analytics)</label>
            </div>
            <div>
              <button onClick={handleSavePreferences} className="button">Sauvegarder mes préférences</button>
              <button onClick={handleCloseModal} className="buttonReject">Annuler</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
