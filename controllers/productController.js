const Product = require('../models/productModel')

// @desc    Get all products.
// route    GET /api/products
async function getProducts(req, res){
    try {
        const products = await Product.findAll()
        res.writeHeader(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(products))
    } catch (error) {
        console.log(error)
    }
}

// @desc    Get single product.
// route    GET /api/products/:id
async function getProduct(req, res, id){
    try {
        const product = await Product.findByID(id)
        if(product){
            res.writeHeader(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(product))
        } else {
            res.writeHeader(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product not found :(' }))
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getProducts,
    getProduct
}