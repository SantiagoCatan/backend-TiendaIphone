const express = require('express')
const seedProducts = require ('./src/seedProducts')


const productHandler = require ('./src/router/productHandler')
//const userHandler = require ('./src/router/UserManager')
const cartHandler = require ('./src/router/cartHandler')

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen (8080,()=> {
    console.log ('Server Up')
    seedProducts()
    })

app.use ('/' , express.static('public'))
app.use ('/api/products', productHandler)
app.use ('/api/carts', cartHandler)
// app.use ('/userManager', userHandler)

