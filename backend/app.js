const express = require('express');
const cors = require('cors');
const app = express();

// Utiliser CORS pour permettre les requêtes depuis n'importe quelle origine
app.use(cors());

// Middleware pour parser le corps des requêtes au format JSON
app.use(express.json());

const formRouter = require('./routes/formRoutes');

// Route pour gérer une requête POST
app.use('/api/', formRouter);
    
module.exports = app;