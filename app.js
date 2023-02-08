const express=require('express')

const productRouter = require ('./src/router/ProductManager')
//const userRouter = require ('./src/router/UserManager')

const app = express()


app.listen (8080,()=> console.log ('Server Up'))

app.use ('/' , express.static('public'))
app.use ('/Products', productRouter)
//app.use ('/userManager', userRouter)

