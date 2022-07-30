import express from 'express';
import asyncHandler from 'express-async-handler';
import Item from '../models/itemModel.js';

const router = express.Router();

// @desc Fetch all items
// @route GET /api/items
// @access Public
router.get('/', asyncHandler(async (req, res) => {
  const items = await Item.find({});
  res.json(items);
}));

// @desc Fetch an item by ID
// @route GET /api/items/:id
// @access Public
router.get('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const item = await Item.findById(id);
  if (item) {
    res.json(item);
  } else {
    res.status(404);
    throw new Error(`Item, with ID ${id}, not found`);
  }
}));

// @desc Fetch an item by category ID
// @route GET /api/items/category/:id
// @access Public
router.get('/category/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const items = await Item.find({category: id});
  if (items) {
    res.json(items);
  } else {
    res.status(404);
    throw new Error(`Items, with ID ${id}, not found`);
  }
}));

export default router;