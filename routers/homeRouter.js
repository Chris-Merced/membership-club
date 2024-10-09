const { Router } = require('express');
const homeController = require('../controllers/homeController')

const homeRouter = Router();


homeRouter.get('/', homeController.DisplayHome);
homeRouter.post('/', homeController.handleLogin);

module.exports = homeRouter;