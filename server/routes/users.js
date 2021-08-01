const express = require('express');
const router = express.Router();

const verify = require('./verifyToken');
const {
	getUser,
	updateUser,
	deleteUser,
	getAllUser,
	getUserStats,
} = require('../controllers/UsersController');

router.get('/', verify, getAllUser);
router.get('/stats', verify, getUserStats);
router.get('/find/:id', getUser);
router.put('/:id', verify, updateUser);
router.delete('/:id', verify, deleteUser);

module.exports = router;
