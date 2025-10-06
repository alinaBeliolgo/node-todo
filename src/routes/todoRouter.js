const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/', todoController.list);
router.get('/new', todoController.newForm);
router.post('/new', todoController.create);
router.post('/:id/toggle', todoController.toggle);
router.post('/:id/delete', todoController.delete);

module.exports = router;