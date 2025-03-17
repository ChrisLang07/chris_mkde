import PolicyContent from './PolicyContent'; // Assurez-vous que le chemin d'importation est correct
import '../assets/scss/Main.scss';
import '../assets/scss/components/Footer.scss';

export default function Footer() {
    return (
        <footer>
            <span className='footer-text'>
                © 2025 Christophe LANGLOIS. Tous droits réservés |
            </span>

            <PolicyContent /> {/* Composant séparé pour la politique de confidentialité */}
        </footer>
    );
}
