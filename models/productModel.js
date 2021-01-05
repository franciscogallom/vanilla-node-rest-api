const products = require('../data/products.json')

function findAll(){
    return new Promise ((resolve, reject) => {
        resolve(products)
    })
}

function findByID(id){
    return new Promise ((resolve, reject) => {
        const product = products.find(product => product.id === id)
        resolve(product)
    })
}

module.exports = {
    findAll,
    findByID
}