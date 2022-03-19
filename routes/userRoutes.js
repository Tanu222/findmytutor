const express = require('express');
const {register,login,updateUser} = require('../controllers/userController');

const router = express.Router();

router.post('/register',register);
router.post('/login',login);
router.post('/update/:id',updateUser);

module.exports = {
    routes: router
}