const express = require('express');
const router = express.Router();

const {
	createList,
	deleteList,
	getList,
} = require('../controllers/ListsController');
const verify = require('./verifyToken');

router.get('/', verify, getList);
router.post('/', verify, createList);
router.delete('/:id', verify, deleteList);

module.exports = router;
