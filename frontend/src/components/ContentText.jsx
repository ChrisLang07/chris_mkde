// ContentText.jsx
import React from 'react';
import '../assets/scss/components/ContentText.scss';

export default function ContentText() {
    return (
        <div className="content-text">
            <h2>Bienvenue |</h2>
            <p>En tant que <strong>Masseur-kinésithérapeute D.E. conventionné,</strong> je vous accompagne dans votre parcours de soin pour améliorer votre santé, soulager vos douleurs et favoriser votre rééducation.<br /><br /> Mon approche est basée sur des soins personnalisés et un suivi attentif, en lien avec votre médecin et vos besoins spécifiques. Les soins sont pris en charge par la sécurité sociale et vos mutuelles, dans le respect des conventions en vigueur.</p>
            
            <h3>Mes soins |</h3>
            <ul>
                <li>Rééducation post-chirurgicale</li>
                <li>Soulagement des douleurs musculaires et articulaires</li>
                <li>Rééducation fonctionnelle</li>
                <li>Prévention des blessures</li>
                <li>...</li>
            </ul>
        </div>
    );
}
