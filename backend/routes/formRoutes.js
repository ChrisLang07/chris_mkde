const express = require('express');
const router = express.Router();
const formCtrl = require('../controllers/formController');

router.post('/send_form', formCtrl.sendForm);

module.exports = router;