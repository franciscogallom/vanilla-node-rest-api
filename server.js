const http = require('http')

const products = require('./data/products.json')

const server = http.createServer((req, res) => {
    res.writeHeader(200, { 'Content-Type': 'aplication/json' })
    res.end(JSON.stringify(products))
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`SERVER ON PORT ${PORT}`)
})