const router = require('express').Router();

router.use('/auth', require('./v1/auth.route'));
router.use('/products', require('./v1/product.route'));
router.use('/categories', require('./v1/category.route'));
router.use('/orders', require('./v1/order.route'));

module.exports = router;
