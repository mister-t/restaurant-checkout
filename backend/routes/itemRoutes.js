import express from 'express';
import asyncHandler from 'express-async-handler';
import Item from '../models/itemModel.js';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const items = await Item.find({});
  res.json(items);
}));

// app.get('/api/items', (req, res) => {
//   res.json(categoriesItems.items);
// });

// app.get('/api/items/:id', (req, res) => {
//   const { items } = categoriesItems;
//   const item = items.find(item => item.id === Number(req.params.id));
//   res.json(item);
// });

// app.get('/api/items/category/:id', (req, res) => {
//   const { items } = categoriesItems;
//   const item = items.filter(item => item.category_id === Number(req.params.id));
//   res.json(item);
// });

export default router;