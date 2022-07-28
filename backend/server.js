import 'dotenv/config'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import colors from 'colors';
import express from 'express';
import connectDB from './config/db.js';
import categoriesItems from './data/categories_items.js';

connectDB();
const PORT = process.env.PORT;
const MODE = process.env.MODE;
const app = express();

app.get('/api/categories/items', (req, res) => {
  res.json(categoriesItems);
});

app.get('/api/categories', (req, res) => {
  res.json(categoriesItems.categories);
});

app.get('/api/categories/:id', (req, res) => {
  const { categories } = categoriesItems;
  const category = categories.find(cat => cat.id === Number(req.params.id));
  res.json(category);
});

app.get('/api/items', (req, res) => {
  res.json(categoriesItems.items);
});

app.get('/api/items/:id', (req, res) => {
  const { items } = categoriesItems;
  const item = items.find(item => item.id === Number(req.params.id));
  res.json(item);
});

app.get('/api/items/category/:id', (req, res) => {
  const { items } = categoriesItems;
  const item = items.filter(item => item.category_id === Number(req.params.id));
  res.json(item);
});

app.listen(PORT, console.log(`Server running in '${MODE}' mode on port '${PORT}'`.bgMagenta));