const router = require('express').Router();
const orderController = require('../../controllers/order.controller');
const { verifyAccessToken, isAdmin } = require('../../middleware/auth.middleware');

router.post('/', verifyAccessToken, orderController.createOrder);
router.get('/my-orders', verifyAccessToken, orderController.getMyOrders);
router.get('/:id', verifyAccessToken, orderController.getOrderById);
router.patch('/:id/status', verifyAccessToken, isAdmin, orderController.updateOrderStatus);

module.exports = router;
