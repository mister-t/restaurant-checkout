import mongoose from 'mongoose';
import 'dotenv/config'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import colors from 'colors';

//Seed data
import categories from './data/categories.js';
import images from './data/images.js';
import items from './data/items.js';

import Image from './models/imageModel.js';
import Category from './models/categoryModel.js';
import Item from './models/itemModel.js';

import connectDB from './config/db.js';
connectDB(); //connect to our db cluster in Mongodb.com

const DROP_DATA = '-d';

const categoriesImages = {
  'f3fbf57b118fa9': 'Bakery',
  'b271afbefdc554': 'Entrees',
  'eba73b2361fae3': 'Drinks'
};

const importData = async () => {
  try {
    await Category.deleteMany();
    await Image.deleteMany();
    await Item.deleteMany();

    const createdImages = await Image.insertMany(images);

    const catsToInsert = createdImages.filter(img => {
      return categoriesImages[img.name];
    }).map(catImg => ({ name: categoriesImages[catImg.name], image: catImg._id }));
    console.log(`matched cats to imgs: ${JSON.stringify(catsToInsert)}`)
    const createdCategories = await Category.insertMany(catsToInsert);

    console.log(`Data imported successfully`.bgGreen);
    process.exit();
  } catch(err) {
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

    console.log(`Data deleted successfuly`.bgGreen);
    process.exit();
  } catch(err) {
    console.log(`Data deletion failed: 
      ${err.message}`.bgRed);
    process.exit(1);
  }
};

if(process.argv[2] === DROP_DATA) {
  //example run script: node data:drop -d
  dropData();
} else {
  importData();
}