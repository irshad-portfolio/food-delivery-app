const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    orderNumber: {
      type: String,
      unique: true,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant',
      required: true,
    },
    items: [
      {
        menuItem: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'MenuItem',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,
          required: true,
        },
        specialInstructions: String,
      },
    ],
    deliveryAddress: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      coordinates: {
        latitude: Number,
        longitude: Number,
      },
    },
    subtotal: {
      type: Number,
      required: true,
    },
    deliveryCharges: {
      type: Number,
      default: 0,
    },
    taxAmount: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'preparing', 'ready', 'out_for_delivery', 'delivered', 'cancelled'],
      default: 'pending',
    },
    paymentMethod: {
      type: String,
      enum: ['cash', 'card', 'upi', 'wallet'],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'completed', 'failed'],
      default: 'pending',
    },
    deliveryPartner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    estimatedDeliveryTime: Date,
    actualDeliveryTime: Date,
    notes: String,
    rating: {
      type: Number,
      default: null,
      min: 1,
      max: 5,
    },
    review: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
