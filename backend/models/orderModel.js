import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  'id': { type: String, required: true },
  'name': { type: String, trim: true, required: true },
  'price': { type: Number, required: true },
  'qty': { type: Number, required: true },
  'imgSrc': { type: String, required: false },
  'description': { type: String, required: false },
});

const orderSchema = new mongoose.Schema({
  'items': [orderItemSchema], //mongoose only supports Schema-type or Subdocument-type arrays; specifying directly the object and its fields no longer work in recent versions
  'payment': {
    'cardType': { type: String, trim: true, required: false },
    'ccNumber': { type: Number, required: true },
    'fullName': { type: String, trim: true, required: true },
    'expMonth': { type: Number, required: true },
    'expYear': { type: Number, required: true },
    'cvc': { type: Number, required: true },
  },
  'total': { type: Number, required: true },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;