/* global gtag */
import { useState } from 'react';
import '../assets/scss/components/CustomizeCookies.scss';

export default function CustomizeCookies() {
  const [isVisible, setIsVisible] = useState(false);
  const [checked, setChecked] = useState(false); // Checkbox cochée par défaut (coche Google Analytics)

  // Appel de la fonction d'ouverture de la modale
  const openModal = () => {
    setIsVisible(true);
  };

  // Appel de la fonction de fermeture de la modale
  const closeModal = () => {
    // Toujours fermer la modale
    setIsVisible(false);

    // Si la case est cochée, on accepte les cookies
    if (checked) {
      localStorage.setItem('cookiesAccepted', 'true');
    } else {
      localStorage.setItem('cookiesAccepted', 'false');
    }
    
    // Vérification si gtag est défini et disponible
    if (typeof gtag === 'function') {
      gtag('config', 'G-2MSDXE6DD9');
    } else {
      console.error('Google Analytics (gtag) n\'est pas disponible');
    }
  };

  // Appel de la fonction de gestion de l'état de la checkbox
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="customize-modal">
      <button onClick={openModal} className="customize-button" aria-label="Personnaliser les cookies">
        Personnaliser
      </button>
      {isVisible && (
        <div className="customize-gtag">
          <label htmlFor="gtag">Google Analytics</label>
          <input
            type="checkbox"
            name="gtag"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          <button onClick={closeModal} className="validate-button" aria-label="Valider la sélection">
            Valider
          </button>
        </div>
      )}
    </div>
  );
}
