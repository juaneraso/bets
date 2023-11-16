const { Bet, PRODUCT_TYPE } = require('../models/bet');


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
};

const getProducts = async(req, res) => {

    const products  = await Bet.find();

    res.status(201).json(products);
};

const createProducts = async(req , res) => {  
    
  try { 
   
    const bet = new Bet(req.body);

    await bet.save();
   
    res.status(201).json(bet)}
   

    catch (error) { 
     
     res.status(500).json({error:error.message});

    }


};


const getProductById = async(req, res) => {
    
    const {id} = req.params ;

    const product = await Bet.findById(id);

    res.status(201).json(product);
};

const updateProduct = async(req, res) => {
    
    const {id} = req.params ;

    res.status(201).json(id);
};

const deleteProduct = async(req, res) => {
    
    const {id} = req.params ;

    res.status(201).json(id);
};



module.exports = {
    createBet,
    getProducts,
    createProducts,
    getProductById,
    updateProduct,
    deleteProduct,
}