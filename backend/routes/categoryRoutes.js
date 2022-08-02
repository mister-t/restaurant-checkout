import express from 'express';
import asyncHandler from 'express-async-handler';
import Category from '../models/categoryModel.js';
import Item from '../models/itemModel.js';

const router = express.Router();

// @desc Fetch all categories
// @route GET /api/categories
// @access Public
router.get('/', asyncHandler(async (req, res) => {
  const categories = await Category.find({});
  res.json(categories);
}));

// @desc Fetch all categories and items
// @route GET /api/categories/items
// @access Public
router.get('/items', asyncHandler(async (req, res) => {
  const categories = await Category.find({});
  const items = await Item.find({});

  if (categories.length && items.length) {
    res.json({ categories, items });
  } else {
    res.status(404);
    throw new Error(`Categories and items not found`)
  }
}));

// @desc Fetch a category by ID
// @route GET /api/categories/:id
// @access Public
router.get('/:id', asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (category) {
    res.json(category);
  } else {
    res.status(404);
    throw new Error(`Category, ${req.params.id}, not found`)
  }
}));

export default router;