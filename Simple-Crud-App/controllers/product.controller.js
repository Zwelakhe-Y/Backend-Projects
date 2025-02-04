//IMPORTS THE MODEL SCHEMA AND HOW DATA SHOULD BE HANDLED
const Product = require('../models/product.model');

//C
const postProduct = async (req, res) => {
    try{
        const product = await Product.create(req.body);
        //creates a variable that waits for product details before saving and saves product request body from the front end
        res.status(200).json(product)
        //200 = success
        //json(product) = product info is returned in json format
    } catch (error){
        res.status(500).json({message: error.message});
    }
}

//R
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (error){
        res.status(500).json({message: error.message})
    }
}

const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;
       const product = await Product.findById(id);
       res.status(200).json(product);
    } catch (error){
        res.status(500).json({message: error.message});
    }
};

//U
const updateProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({message: "Product not found"});
        }

        //RETURNS THE UPDATED OBJECT/PRODUCT AS A RESPONSE
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

        } catch(error){
        res.status(500).json({message: error.message})
    }
};

//D

const deleteProduct = async(req, res) => {
    try {
        const {id} = req.params;
        const product =await Product.findByIdAndDelete(id)
        //CHECK IF THE PRODUCT EXISTS FIRST

        if(!product){
            return res.status(404).json({message: "Product not found"});
        }

        res.status(200).json({message: "Product deleted succesfully"})


    } catch(error){
        res.status(500).json({message: error.message})
    }
};


//This exports all the functions/controllers you want to use
module.exports = {
    postProduct,
    getProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct

}