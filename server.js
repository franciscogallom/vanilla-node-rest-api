const http = require('http')

const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('./controllers/productController')

const server = http.createServer((req, res) => {

    if(req.url === '/api/products') {
        
        req.method === 'GET' ? getProducts(req, res) :
        req.method === 'POST' && createProduct(req, res)
    
    } else if(req.url.match(/\/api\/products\/([0-9]+)/)){
        
        const id = req.url.split('/')[3]
        
        req.method === 'GET' ? getProduct(req, res, id) :
        req.method === 'PUT' ? updateProduct(req, res, id) :
        req.method === 'DELETE' && deleteProduct(req, res, id)

    } else {

        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route Not Found :('}))
    
    }
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`SERVER ON PORT ${PORT}`)
})