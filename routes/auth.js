const express = require('express');
const { createUser,getUserLogin,getUserDetails } = require('../Controller/authcontroller');
const isAuthenticated = require('../middleware/checkAuth');
const { validateCredentials } = require('../middleware/validateRequest');

const router = express.Router();

router.post('/signup',validateCredentials(),createUser);
router.post('/login',validateCredentials(),getUserLogin);
router.get('/get-user-details',isAuthenticated,getUserDetails);

module.exports=router;