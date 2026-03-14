const router = require('express').Router();
const categoryController = require('../../controllers/category.controller');
const { verifyAccessToken, isAdmin } = require('../../middleware/auth.middleware');

router.get('/', categoryController.getAllCategories);
router.post('/', verifyAccessToken, isAdmin, categoryController.createCategory);
router.delete('/:id', verifyAccessToken, isAdmin, categoryController.deleteCategory);

module.exports = router;
