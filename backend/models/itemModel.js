import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
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
  'image': {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Image'
  },
  'price': {
    type: Number,
    required: true,
    default: 0.00
  },
}, { timestamps: true });

const Item = mongoose.model('Item', itemSchema);

export default Item;