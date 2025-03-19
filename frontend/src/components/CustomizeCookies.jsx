import { useState } from 'react';
import '../assets/scss/components/CustomizeCookies.scss';

export default function CustomizeCookies({ acceptCookies, setIsCookieBannerVisible }) {
  const [isVisible, setIsVisible] = useState(false);
  const [checked, setChecked] = useState(true); // Checkbox cochée par défaut

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
      acceptCookies();
    } else {
        setIsCookieBannerVisible(false);
    }
  };

  // Appel de la fonction de gestion de l'état de la checkbox
  const handleCheckboxChange = (event) => {
    const newChecked = event.target.checked;
    setChecked(newChecked);

    // Si la case est cochée, les cookies seront acceptés plus tard via "Fermer"
  };

  return (
    <div className='customize-modal'>
      <button onClick={openModal} className="customize-button" aria-label="Personnaliser les cookies">
        Personnaliser
      </button>
      {isVisible && (
        <div className='customize-gtag'>
          <label htmlFor='gtag'>Google Analytics</label>
          <input
            type='checkbox'
            name='gtag'
            checked={checked}
            onChange={handleCheckboxChange}
          />
          <button onClick={closeModal} className='close-button' aria-label="Fermer la modal">
            Fermer
          </button>
        </div>
      )}
    </div>
  );
}
