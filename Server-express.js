const { response } = require("express")
const { request } = require("http")

const express = requiere ('express')

const app = express()





app.liste(8080,()=>console.log('Server Up'))

app.get('/' , (request , response)=>{
    response.send('Hola, Cliente')
})

app.get('/Products' , (request ,response )=>{
    response.send('Llamar lista de preoductos')
})
