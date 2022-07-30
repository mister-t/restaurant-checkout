import express from 'express';
import Category from '../models/categoryModel.js';

const router = express.Router();

/*
  In server.js, app.use(/api/categories, categoryRoutes) to capture
  all Catetory routes
*/

router.get('/', async (req, res) => {
  const categories = await Category.find({});
  res.json(categories);
});

router.get('/:id', async (req, res) => {
  const category = await Category.find({_id: Number(req.params.id)});
  res.json(category);
});

export default router;