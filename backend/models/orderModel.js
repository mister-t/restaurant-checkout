import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  'orderItems': [
    {
      'id': { type: String, required: true },
      'name': { type: String, trim: true, required: true },
      'price': { type: Number, required: true },
      'quantity': { type: Number, required: true }
    }
  ],
  'payment': {
    'cardType': { type: String, trim: true, required: false },
    'nameOnCard': { type: String, trim: true, required: true },
    'expirationMonth': { type: Number, required: true },
    'expirationYear': { type: Number, required: true },
    'cvc': { type: Number, required: true },
  },
  'totalAmount': { type: Number, required: true },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;