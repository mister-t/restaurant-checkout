import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
  'name': {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  'image': {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Image'
  },
}, { timestamps: true });

const Category = mongoose.model('Category', categorySchema);

export default Category;