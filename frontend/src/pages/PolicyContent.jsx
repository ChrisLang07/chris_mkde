import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
import '../assets/scss/components/PolicyContent.scss';

const PolicyContent = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    // Lire le fichier Markdown et le convertir en HTML
    fetch('/data/politique-de-confidentialite.md')  // Chemin du fichier markdown
      .then((response) => response.text()) // Récupérer le contenu du fichier .md
      .then((text) => {
        const htmlContent = marked(text); // Convertir en HTML
        setContent(htmlContent); // Stocker le contenu HTML dans l'état
      });
  }, []);

  return (
    <div className="policy-content">
      <h1>Politique de confidentialité</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} /> {/* Afficher le contenu HTML */}
    </div>
  );
};

export default PolicyContent;
