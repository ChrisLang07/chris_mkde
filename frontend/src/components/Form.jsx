import { useState } from "react";
import "../assets/scss/components/Form.scss";

export default function Form() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Pour gérer l'état de soumission

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification simple des champs requis
    if (!formData.nom || !formData.prenom || !formData.email || !formData.message) {
      alert("Tous les champs sont requis.");
      return;
    }

    // Vérifiez si formData contient bien les données avant l'envoi
    console.log("Données du formulaire avant envoi:", formData);

    setIsSubmitting(true);

    // Utilisation de la variable d'environnement pour l'URL de l'API
    const apiUrl = process.env.REACT_APP_API_URL;

    // Envoi des données via fetch
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // On envoie les données sous forme JSON
    })
      .then((response) => response.json()) // On convertit la réponse en JSON
      .then((data) => {
        if (data.message) {
          alert(data.message); // Si la réponse contient un message de succès
          setFormData({
            nom: "",
            prenom: "",
            email: "",
            message: "",
          }); // Réinitialiser le formulaire
        }
      })
      .catch((error) => {
        console.error("Erreur:", error);
        alert("Une erreur est survenue lors de l'envoi.");
      })
      .finally(() => {
        setIsSubmitting(false); // On termine la soumission
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container contact-section">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="prenom">Prénom</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Envoi en cours..." : "Envoyer"}
        </button>

        {/* Affichage de la barre de progression pendant l'envoi */}
        {isSubmitting && (
          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        )}
      </form>
    </div>
  );
}
