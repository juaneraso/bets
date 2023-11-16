const { Bet, PRODUCT_TYPE } = require("../models/bet");

const getProducts = async (req, res) => {
  try {
    const products = await Bet.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProducts = async (req, res) => {
  const bet = new Bet(req.body);

  try {
    await bet.save();

    res.status(201).json(bet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Bet.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  const { _id, key, ...rest } = req.body;

  try {
    const result = await Bet.findByIdAndUpdate(id, rest, { new: true });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Bet.deleteOne({ _id: id });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getProducts,
  createProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
