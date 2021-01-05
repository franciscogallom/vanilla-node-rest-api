const http = require('http')

const products = require('./data/products.json')

const server = http.createServer((req, res) => {
    if(req.url === '/api/products' && req.method === 'GET'){
        res.writeHeader(200, { 'Content-Type': 'aplication/json' })
        res.end(JSON.stringify(products))
    } else {
        res.writeHeader(404, { 'Content-Type': 'aplication/json' })
        res.end(JSON.stringify({ message: 'Route Not Found :('}))
    }
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`SERVER ON PORT ${PORT}`)
})