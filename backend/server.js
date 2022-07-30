import 'dotenv/config'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import colors from 'colors';
import express from 'express';
import connectDB from './config/db.js';
import { urlNotFound, errorHandler } from './middleware/errorMiddleware.js';

//Routes
import categoryRoutes from './routes/categoryRoutes.js';
import itemRoutes from './routes/itemRoutes.js';

connectDB();
const PORT = process.env.PORT;
const MODE = process.env.MODE;
const app = express();

app.use('/api/categories', categoryRoutes);
app.use('/api/items', itemRoutes);
app.use(urlNotFound);
app.use(errorHandler);

app.listen(PORT, console.log(`Server running in '${MODE}' mode on port '${PORT}'`.bgMagenta));