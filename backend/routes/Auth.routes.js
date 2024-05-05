const express = require('express');
const router = express.Router();
const authController = require('../controllers/Auth.controller');


router.post('/login',authController.checkLogin);

router.post('/registerUser',authController.registerUser);






module.exports = router;
