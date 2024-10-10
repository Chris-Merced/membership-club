const { Router } = require('express');
const postRouter = Router();
const postController = require('../controllers/postController')

postRouter.post('/', postController.submitPost);

module.exports = postRouter;