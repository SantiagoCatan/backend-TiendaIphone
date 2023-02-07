const { response } = require("express")
const { request } = require("http")

const express = requiere ('express')

const app = express()

app.liste(8080,()=>console.log('Server Up'))



app.get('/' , (request , response)=>{
   
    response.send('Hola, Cliente')
})

//pasar por paramentro el array users.json


app.get('/Products/' , (request ,response )=>{
    const {id} = request.query

    const user = users.find(item => item.id ===id)
    if (!user) response.send ({error :"user not found "})
    else response.send({ user: id })
})


