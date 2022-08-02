import mongoose from 'mongoose';
import { itemSchema } from './itemModel.js';

const orderSchema = mongoose.Schema({
  'orderItems': [
    {
      'item': itemSchema,
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

const Order = mongoose.model('Order', orderSchema);

export default Order;