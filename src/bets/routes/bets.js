const { Router } = require("express");
const {
  getProducts,
  createProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/bets");

const router = Router();

router.get("/productos", getProducts);
router.get("/productos/:id", getProductById);

router.post("/productos", createProducts);
router.put("/productos/:id", updateProduct);
router.delete("/productos/:id", deleteProduct);

module.exports = router;
