const express = require('express');
const router = express.Router();
const CatsController = require('../controllers/cats');

router.route('/')
    .get(CatsController.index)
    .post(CatsController.save);

router.route('/:id')
    .put(CatsController.update)
    .delete(CatsController.remove);

module.exports = router;
