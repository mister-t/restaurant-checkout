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

export default router;

