import '../assets/scss/components/CustomizeCookies.scss';

export default function customizeCookies () {
    const customizeCookies = () => {
        console.log("Personnalisation des cookies ...");
    };

    return (
        <button onClick={customizeCookies} className="customize-button" aria-label="Personnaliser les cookies">Personnaliser</button>
    )
}