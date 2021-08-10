const express = require('express');
const router=express.Router();
const passport = require('passport');

const userController=require('../controllers/users_controllers');

router.get('/profile',userController.profile);
router.get('/sign-in',userController.signin);
router.get('/sign-up',userController.signup);
router.post('/create',userController.create);

// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
),userController.createSession);


module.exports =router;