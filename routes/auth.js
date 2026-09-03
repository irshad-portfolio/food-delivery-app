const express = require('express');
const { register, login, getCurrentUser, updateProfile } = require('../controllers/authController');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/me', verifyToken, getCurrentUser);
router.put('/profile', verifyToken, updateProfile);

module.exports = router;
