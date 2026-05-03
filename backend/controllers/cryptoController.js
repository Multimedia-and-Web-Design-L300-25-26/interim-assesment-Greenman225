const Crypto = require('../models/Crypto');

// @desc    Get all cryptocurrencies
// @route   GET /api/crypto
// @access  Public
const getAllCryptos = async (req, res) => {
  try {
    const cryptos = await Crypto.find({}).sort({ marketCap: -1 });
    res.json(cryptos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get top gainers (highest 24h change)
// @route   GET /api/crypto/gainers
// @access  Public
const getTopGainers = async (req, res) => {
  try {
    const gainers = await Crypto.find({})
      .sort({ change24h: -1 })
      .limit(10);
    res.json(gainers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get newest listings
// @route   GET /api/crypto/new
// @access  Public
const getNewListings = async (req, res) => {
  try {
    const newListings = await Crypto.find({})
      .sort({ createdAt: -1 })
      .limit(10);
    res.json(newListings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Create a new cryptocurrency
// @route   POST /api/crypto
// @access  Public (change to Private if needed)
const createCrypto = async (req, res) => {
  try {
    const { name, symbol, price, image, change24h, marketCap, volume24h } = req.body;

    // Check if crypto already exists
    const cryptoExists = await Crypto.findOne({ $or: [{ name }, { symbol }] });
    if (cryptoExists) {
      return res.status(400).json({ message: 'Cryptocurrency already exists' });
    }

    // Create new crypto
    const crypto = await Crypto.create({
      name,
      symbol: symbol.toUpperCase(),
      price,
      image,
      change24h: change24h || 0,
      marketCap: marketCap || 0,
      volume24h: volume24h || 0,
    });

    res.status(201).json(crypto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get single cryptocurrency by ID
// @route   GET /api/crypto/:id
// @access  Public
const getCryptoById = async (req, res) => {
  try {
    const crypto = await Crypto.findById(req.params.id);
    
    if (!crypto) {
      return res.status(404).json({ message: 'Cryptocurrency not found' });
    }
    
    res.json(crypto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  getAllCryptos,
  getTopGainers,
  getNewListings,
  createCrypto,
  getCryptoById,
};