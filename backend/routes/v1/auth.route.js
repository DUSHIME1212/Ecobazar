const router = require('express').Router();
const authController = require('../../controllers/auth.controller');
const { verifyAccessToken } = require('../../middleware/auth.middleware');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/profile', verifyAccessToken, authController.getProfile);

module.exports = router;
