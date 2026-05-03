const express = require('express');
const router = express.Router();
const { updateUserProfile, deleteUserAccount } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// All routes are protected (require authentication)
router.put('/profile', protect, updateUserProfile);
router.delete('/profile', protect, deleteUserAccount);

module.exports = router;