const express = require('express');
const categoriesItems = require('./data/categories_items');
const app = express();

app.get('/', (req, res) => {
  res.send('route to return data is ok!')
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
  console.log('/api/items/%s', req.params.id)
  const item = items.find(item => item.id === Number(req.params.id));
  res.json(item);
});

app.get('/api/items/category/:id', (req, res) => {
  const { items } = categoriesItems;
  const item = items.filter(item => item.category_id === Number(req.params.id));
  res.json(item);
});

app.listen(5001, console.log('Server running on port 5001'));
