import express from 'express';
import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

const router = express.Router();

// @desc Fetch all orders
// @route GET /api/orders
// @access Public
router.get('/', asyncHandler(async (req, res) => {
  const orders = await Order.find({});
  res.json(orders);
}));

// @desc Fetch an order by ID
// @route GET /api/orders/:id
// @access Public
router.get('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const order = await Order.findById(id);
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error(`Order, with ID ${id}, not found`);
  }
}));
// router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.post('/', asyncHandler(async (req, res) => {
  const { orderItems, payment, totalAmount } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(404);
    throw new Error('No order items found');
    return;
  } else {
    const order = new Order({
      orderItems,
      payment,
      totalAmount
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
}));

export default router;

