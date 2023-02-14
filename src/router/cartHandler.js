//modularizacion por router
const {Router} = require ('express')

const cartService = require ('../cartService')

const cartRouter =  Router()


//  //Crear un Array vacio (nuevo carrito)
//  router.post('/' , async (req ,res )=>{
//     const {products} = req.body;
    
//     const status = await cartService.createCart(products)
//     if (status === 400 ){

//         return res.status(400).json({status:"error",massage:"carrito invalido"})
//     }
    
//     return res.status(201).json({status:"success" , message:"Carrito Creado!"})

// })


//debe agregar el producto que indico por parametro y meterlo al carrito creado
cartRouter.post('/:cid/product/:pid' ), async (req ,res )=>{
    const { cid, pid } = req.params;
        
    const status = await cartService.createCart(cid,pid)

    if (status === 404) {
        return res.status(404).json({status:"error",massage:"carrito invalido"})
    }

    return res.status(201).json({status:"success" , message:"Carrito Creado!"})

 }


module.exports = cartRouter ;