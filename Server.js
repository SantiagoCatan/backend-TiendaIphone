const http = require('http')

const server = http.createServer ((request,response ) => {
    console.log('alguien hizo una peticion..')
    response.end('Hola,Mundo---')
})

server.listen(8080, ()=>console.log('Server Up'))