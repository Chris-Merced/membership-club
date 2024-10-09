const { Router } = require('express');
const signupRouter = Router();
const signupController = require('../controllers/signupController');

signupRouter.get('/', signupController.displaySignup);
signupRouter.post('/', signupController.insertMember);
module.exports = signupRouter;