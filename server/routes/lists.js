const express = require('express');
const router = express.Router();

const {
	createList,
	deleteList,
	getLists,
} = require('../controllers/ListsController');
const verify = require('./verifyToken');

router.get('/', verify, getLists);
router.post('/', verify, createList);
router.delete('/:id', verify, deleteList);

module.exports = router;
