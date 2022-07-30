import mongoose from 'mongoose';

const imageSchema = mongoose.Schema({
  'name': {
    type: String,
    unique: true,
    trim: true,
    required: true
  }
}, { timestamps: true });

const Image = mongoose.model('Image', imageSchema);

export default Image;