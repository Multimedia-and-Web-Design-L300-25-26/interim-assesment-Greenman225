const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a cryptocurrency name'],
      unique: true,
      trim: true,
    },
    symbol: {
      type: String,
      required: [true, 'Please add a symbol'],
      unique: true,
      uppercase: true,
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Please add a price'],
      min: 0,
    },
    image: {
      type: String,
      required: [true, 'Please add an image URL'],
    },
    change24h: {
      type: Number,
      required: [true, 'Please add 24h change percentage'],
      default: 0,
    },
    marketCap: {
      type: Number,
      default: 0,
    },
    volume24h: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Add index for better query performance
cryptoSchema.index({ symbol: 1 });
cryptoSchema.index({ createdAt: -1 });
cryptoSchema.index({ change24h: -1 });

const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;