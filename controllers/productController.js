const Product = require('../models/productModel')

const { getPostData } = require('../utils')

// @desc    Get all products.
// route    GET /api/products
async function getProducts(req, res){
    try {
    
        const products = await Product.findAll()
        res.writeHead(200, { 'Content-Type': 'application/json' })
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
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(product))
    
        } else {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product not found :(' }))
        }
    
    } catch (error) {
        console.log(error)
    }
}

// @desc    Create a product.
// route    POST /api/products
async function createProduct(req, res){
    try {
        const body = await getPostData(req) 

        const { title, price } = JSON.parse(body)

        const product = {
            title,
            price
        }
        
        const newProduct = await Product.create(product)
        
        res.writeHead(201, ({ 'Content-Type': 'application/json' }))
        return res.end(JSON.stringify(newProduct))
    
    } catch (error) {
        console.log(error)
    }
}

// @desc    Update a product.
// route    PUT /api/products/:id
async function updateProduct(req, res, id){
    try {

        const product = Product.findByID(id)

        if(product){

            const body = await getPostData(req) 

            console.log(body)

            const { title, price } = JSON.parse(body)
    
            const productData = {
                title: title || product.title,
                price: price || product.price
            }

            const updateProduct = await Product.update(id, productData)
            
            res.writeHead(200, ({ 'Content-Type': 'application/json' }))
            return res.end(JSON.stringify(updateProduct))
        
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product not found :(' }))
        }
    
    } catch (error) {
        console.log(error)
    }
}

// @desc    Delete product.
// route    DELETE /api/products/:id
async function deleteProduct(req, res, id){
    try {
        const product = await Product.findByID(id)
    
        if(product){
            await Product.remove(id)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: `Product ${id} removed`}))
    
        } else {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product not found :(' }))
        }
    
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}