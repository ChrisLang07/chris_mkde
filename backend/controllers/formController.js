const nodemailer = require("nodemailer");

exports.sendForm = (req, res) => {
  const data = req.body;

  // Vérification des champs requis
  if (!data.nom || !data.prenom || !data.email || !data.message) {
    return res.status(400).json({
      message: "Tous les champs sont requis : prénom, nom, email, message",
    });
  }

  // Validation de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return res
      .status(400)
      .json({ message: "L'email fourni n'est pas valide." });
  }

  console.log("Données reçues", data);

  // Configuration de Nodemailer
  const transporter = nodemailer.createTransport({
    host: "smtp.laposte.net",  
    port: 587,  
    secure: false,  
    auth: {
      user: process.env.EMAIL_USER,  
      pass: process.env.EMAIL_PASS,  
    },
  });

  // Configuration du message à envoyer à l'administrateur
  const mailOptionsToAdmin = {
    from: process.env.EMAIL_USER, 
    to: process.env.EMAIL_ADMIN, 
    subject: "Nouveau message du formulaire",
    text: `
            Nom: ${data.nom}  
            Prénom: ${data.prenom}  
            Email: ${data.email}
            Message: ${data.message}
        `
  };

  // Configuration du message à envoyer à l'utilisateur
  const mailOptionsToUser = {
    from: process.env.EMAIL_USER, 
    to: data.email,  // L'adresse de l'utilisateur qui soumet le formulaire
    subject: "Confirmation de soumission du formulaire",
    text: `
            Bonjour ${data.prenom} ${data.nom},  

            Merci pour votre message. Voici une copie de celui-ci :

            Prénom: ${data.prenom}  
            Nom: ${data.nom}  
            Email: ${data.email}
            Message: ${data.message}

            Je vous répondrai dans les plus brefs délais.

            Cordialement,
            Christophe LANGLOIS
        `
  };

  // Envoi de l'email à l'administrateur
  transporter.sendMail(mailOptionsToAdmin, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        message: "Erreur lors de l'envoi de l'email à l'administrateur",
        error: error,
      });
    }

    console.log("Email envoyé à l'administrateur: " + info.response);

    // Envoi de l'email à l'utilisateur
    transporter.sendMail(mailOptionsToUser, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          message: "Erreur lors de l'envoi de l'email à l'utilisateur",
          error: error,
        });
      }

      console.log("Email envoyé à l'utilisateur: " + info.response);

      return res.status(200).json({
        message: "Formulaire soumis avec succès | Une copie vous a été adressée !",
        data: data,
      });
    });
  });
};
