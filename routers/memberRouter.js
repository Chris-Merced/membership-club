const { Router } = require('express');
const memberRouter = Router();
const memberController = require('../controllers/memberController')

memberRouter.get('/', memberController.displayMemberPage);
memberRouter.post('/', memberController.createMember)
module.exports = memberRouter;