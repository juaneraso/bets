const { Schema, model } = require("mongoose");

const PRODUCT_TYPE = {
  CHANCE: "chance",
};

const BetSchema = Schema({
  nombre: {
    type: String,
    required: [true, "nombre es requerido"],
  },
  descripcion: {
    type: String,
  },
  precio: {
    type: Number,
    required: [true, "precio es requerido"],
  },
  tipoProducto: {
    type: String,
    required: [true, "tipoProduto es requerido"],
    enum: Object.values(PRODUCT_TYPE),
  },
  porcentajeComision: {
    type: Number,
  },
  imagen: {
    type: String,
  },
});

const Bet = model("Bet", BetSchema);

module.exports = {
  Bet,
  PRODUCT_TYPE,
};
