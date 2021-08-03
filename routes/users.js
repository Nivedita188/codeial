const express = require('express');
const router=express.Router();

const userController=require('../controllers/users_controllers');

router.get('/profile',userController.profile);
router.get('/sign-in',userController.signin);
router.get('/sign-up',userController.signup);

module.exports =router;