import mongoose from 'mongoose';

export const ImageSchema = mongoose.Schema({
  'name': {
    type: String,
    unique: true,
    trim: true,
    required: true
  }
}, { timestamps: true });

const Image = mongoose.model('Image', ImageSchema);

export default Image;