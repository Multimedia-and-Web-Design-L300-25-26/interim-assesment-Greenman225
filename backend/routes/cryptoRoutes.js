const express = require('express');
const router = express.Router();
const {
  getAllCryptos,
  getTopGainers,
  getNewListings,
  createCrypto,
  getCryptoById,
} = require('../controllers/cryptoController');

// Public routes
router.get('/', getAllCryptos);
router.get('/gainers', getTopGainers);
router.get('/new', getNewListings);
router.get('/:id', getCryptoById);

// Create new crypto (can be protected later)
router.post('/', createCrypto);

module.exports = router;