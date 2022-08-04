import mongoose from 'mongoose';
import { ImageSchema } from './imageModel.js';

export const itemSchema = mongoose.Schema({
  'category': {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  'name': {
    type: String,
    trim: true,
    required: true
  },
  'image': ImageSchema,
  'price': {
    type: Number,
    required: true,
    default: 0.00
  },
  'description': {
    type: String,
    required: false,
    default: '',
    maxLength: 128
  },
}, { timestamps: true });

const Item = mongoose.model('Item', itemSchema);

export default Item;