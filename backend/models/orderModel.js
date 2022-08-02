import mongoose from 'mongoose';
import ItemSchema from './itemModel.js';

const orderSchema = mongoose.Schema({
  'orderItems': [
    {
      'item': ItemSchema,
      'quantity': { type: Number, required: true },
    }
  ],
  'payment': {
    'cardType': { type: String, trim: true, required: false },
    'nameOnCard': { type: String, trim: true, required: true },
    'expirationMonth': { type: Number, required: true },
    'expirationYear': { type: Number, required: true },
    'cvc': { type: Number, required: true },
  },
  'totalAmount': {
    type: Number, required: true
  },
}, { timestamps: true });

const Order = mongoose.model('Order', categorySchema);

export default Order;