import 'dotenv/config'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import colors from 'colors';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import { urlNotFound, errorHandler } from './middleware/errorMiddleware.js';

//Routes
import categoryRoutes from './routes/categoryRoutes.js';
import itemRoutes from './routes/itemRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

connectDB();
const PORT = process.env.PORT;
const MODE = process.env.MODE;
const app = express();
const __dirname = path.resolve();

//https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/api/categories', categoryRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/orders', orderRoutes);

//route any path that is not api related; this makes it fetch from our production build from the frontend
//cd into /frontend and run 'npm run build' to get a static build
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('Got lost?');
  })
}

app.use(urlNotFound);
app.use(errorHandler);

app.listen(PORT, console.log(`Server running in '${MODE}' mode on port '${PORT}'`.bgMagenta));