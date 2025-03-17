import { useEffect, useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../assets/scss/components/PolicyContent.scss';

export default function PolicyContent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [policyContent, setPolicyContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const modalRef = useRef(null);
    const closeButtonRef = useRef(null);

    const policyUrl = '/data/politique-de-confidentialite.md';

    // Fonction pour fermer la modale
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Gestion de l'appui sur la touche Escape pour fermer la modale
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    };

    useEffect(() => {
        fetch(policyUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement de la politique de confidentialité');
                }
                return response.text();
            })
            .then((text) => {
                setPolicyContent(text);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Erreur de chargement:', error);
                setError('Impossible de charger la politique de confidentialité.');
                setLoading(false);
            });
    }, []);

    // Focaliser le bouton de fermeture quand la modale est ouverte
    useEffect(() => {
        if (isModalOpen) {
            closeButtonRef.current.focus();
        }
    }, [isModalOpen]);

    return (
        <>
            <button
                className="policy"
                onClick={() => setIsModalOpen(true)}
                title="Lire notre politique de confidentialité"
            >
                Politique de confidentialité
            </button>

            {isModalOpen && (
                <>
                    <div
                        className={`modal-overlay ${isModalOpen ? 'show' : ''}`}
                        onClick={closeModal}
                        role="presentation"
                        tabIndex={-1}
                    ></div>
                    <div
                        className={`policy-modal ${isModalOpen ? 'show' : ''}`}
                        ref={modalRef}
                        tabIndex={-1}
                        onKeyDown={handleKeyDown}
                    >
                        <span
                            className="close"
                            onClick={closeModal}
                            ref={closeButtonRef}
                            role="button"
                            tabIndex="0"
                        >
                            &times;
                        </span>

                        <div className="modal-markdown">
                            {loading ? (
                                <p>Chargement...</p>
                            ) : error ? (
                                <p>{error}</p>
                            ) : (
                                <ReactMarkdown
                                    children={policyContent}
                                    remarkPlugins={[remarkGfm]}
                                />
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
