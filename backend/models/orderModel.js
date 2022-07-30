import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  'orderItems': [{
    'name': { type: String, trim: true, required: true },
    
    'price': { type: Number, required: true },
    'quantity': { type: Number, required: true },
    'image': {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Image'
    },
    'item': {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Item'
    },
  }],
  'payment': {
    'cardType': { type: String, trim: true, required: true },
    'nameOnCard': { type: String, trim: true, required: true },
    'expirationMonth': { type: Number, required: true },
    'expirationYear': { type: Number, required: true },
    'cvc': { type: Number, required: true },
  },
  'totalAmount': {
    type: String, trim: true, required: true
  },
}, { timestamps: true });

const Order = mongoose.model('Order', categorySchema);

export default Order;