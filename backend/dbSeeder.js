import mongoose from 'mongoose';
import 'dotenv/config'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import colors from 'colors';

//Seed data
import categoriesImages from './data/categories.js';
import images from './data/images.js';
import { itemsToImg } from './data/items.js';

import Image from './models/imageModel.js';
import Category from './models/categoryModel.js';
import Item from './models/itemModel.js';
import Order from './models/orderModel.js';

import connectDB from './config/db.js';
connectDB(); //connect to our db cluster in Mongodb.com

const DROP_DATA = '-d';

const importData = async () => {
  try {
    await Category.deleteMany();
    await Image.deleteMany();
    await Item.deleteMany();
    await Order.deleteMany();

    const createdImages = await Image.insertMany(images);

    //match created images to categories
    const catsToInsert = createdImages.filter(img => categoriesImages[img.name])
      .map(img => ({ name: categoriesImages[img.name], image: img._id }));
    const createdCategories = await Category.insertMany(catsToInsert);

    //Match the category names with their newly created IDs
    const categoryIDs = createdCategories.map(cat => ({ [cat.name]: cat._id })).reduce((result, cat) => ({ ...result, ...cat }), {});

    //Match newly created images & categories to the items
    const itemsToInsert = createdImages.filter(img => itemsToImg[img.name])
      .map(image => {
        const item = itemsToImg[image.name];
        const { category, name, price, description } = item;
        return ({ category: categoryIDs[category], name, price, image, description });
      });
    // console.log(JSON.stringify(itemsToInsert))
    const insertedItems = await Item.insertMany(itemsToInsert);


    console.log(`Data imported successfully`.bgGreen);
    process.exit();
  } catch (err) {
    console.log(`Data import failed:
      ${err.message}`.bgRed);
    process.exit(1);
  }
};

const dropData = async () => {
  try {
    connectDB();
    await Category.deleteMany();
    await Image.deleteMany();
    await Item.deleteMany();
    await Order.deleteMany();

    console.log(`Data deleted successfuly`.bgGreen);
    process.exit();
  } catch (err) {
    console.log(`Data deletion failed: 
      ${err.message}`.bgRed);
    process.exit(1);
  }
};

if (process.argv[2] === DROP_DATA) {
  //example run script: node data:drop -d
  dropData();
} else {
  importData();
}