const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Crypto = require('../models/Crypto');

dotenv.config();

const sampleCryptos = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 43245.67,
    image: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    change24h: 2.5,
    marketCap: 850000000000,
    volume24h: 25000000000,
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price: 2245.32,
    image: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    change24h: 1.8,
    marketCap: 270000000000,
    volume24h: 15000000000,
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    price: 98.45,
    image: 'https://cryptologos.cc/logos/solana-sol-logo.png',
    change24h: -0.5,
    marketCap: 42000000000,
    volume24h: 2000000000,
  },
  {
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.54,
    image: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
    change24h: 3.2,
    marketCap: 19000000000,
    volume24h: 800000000,
  },
  {
    name: 'XRP',
    symbol: 'XRP',
    price: 0.62,
    image: 'https://cryptologos.cc/logos/xrp-xrp-logo.png',
    change24h: 0.9,
    marketCap: 33000000000,
    volume24h: 1200000000,
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    
    await Crypto.deleteMany({});
    console.log('Cleared existing cryptos');
    
    await Crypto.insertMany(sampleCryptos);
    console.log('Added sample cryptocurrencies');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();