const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController');

router.post('/insertOrder', orderController.insertOrder);
router.get('/getAllOrders', orderController.getAllOrders);
router.get('/getOrderInRange', orderController.getOrderInRange);

module.exports = router;