const router = require('express').Router();
const productController = require('../../controllers/product.controller');
const { verifyAccessToken, isAdmin } = require('../../middleware/auth.middleware');
const upload = require('../../middleware/upload.middleware');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', verifyAccessToken, isAdmin, upload.array('images', 10), productController.createProduct);
router.put('/:id', verifyAccessToken, isAdmin, productController.updateProduct);
router.delete('/:id', verifyAccessToken, isAdmin, productController.deleteProduct);

module.exports = router;
