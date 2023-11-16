const { Bet, PRODUCT_TYPE } = require('../models/bet')

const createBet = async(req, res) => {
    const bet = new Bet({
        nombre: 'fsdafs',
        descripcion:"djflakf",
        precio : 10 ,
        tipoProducto: PRODUCT_TYPE.CHANCE,
        porcentajeComision: 50,
        imagen : "hhfdl",
    })
    await bet.save();
    res.status(201).json(bet)
}

module.exports = {
    createBet,
}