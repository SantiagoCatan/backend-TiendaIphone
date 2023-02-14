//modularizacion por router
const {Router} = require ('express')

const utils = require ('../utils')

const router =  Router()


const db = require ('../../products.json')

//mostrar todos los productos
// 1. GET OK
router.get('/' , (req ,res )=>{
  res.send({status:"success",playload:db})
  res.status(400).send({status:"error",error:"Ocurrio un error"})

})

/// localhost:8080/api/products/1 => param
// api/products?id=1 => query
// 2. Get by ID
router.get('/:id' , (req ,res )=>{
    const {id} = req.query
    //recorro el Products.json -metodo find : id
    const user = db.find(p => p.id === parseInt(id))
        if (!user) return res.send ({error:"user not found"})
        else res.send(user)
})



//Poder agregar mas productos
// 3. POST OK
router.post('/' , async (req ,res )=>{
    const {title, descriptions, price, thumbnail, code, capacity} = req.body;
    
    const status = await utils.addEvent(title, descriptions, price, thumbnail, code, capacity)
    if (status === 400 ){

        return res.status(400).json({status:"error",massage:"Producto invalido"})
    }
    
    return res.status(201).json({status:"success" , message:"Producto Creado!"})

})

//Actualizacion del productos(No debe eliminar ID)
router.put('/:id' , async (req ,res )=>{
    const { id } = req.params
    // Producto a modificar
    const body = req.body
    const idProducto = db.findIndex(p => p.id === parseInt(id))


    //Crear swtich -validacion
    if(idProducto === -1){
        console.log(id)

        return res.status(404).json({status:"error",massage:"Producto no encontrado"})
    }


    db[idProducto] = {id: db[idProducto].id , ...body}

    await utils.saveProduct(db);
    res.status(200).json({status:"Actualizado",massage:"Producto Actualizado"})

})


//poder eliminar producto
router.delete('/:id' , async (req ,res )=>{

    const { id } = req.params

    const state = await utils.deleteProduct(db, id)
    if(state === 404) {
        return res.status(404).json({status:"error",massage:"Producto no encontrado"})
    }

    if(state === 400) {
        return res.status(404).json({status:"error",massage:"Producto no invalido"})
    }
    
    return res.status(200).json({status:"Success",massage:"Producto eliminado"})
    
})


//para poder exportar Products.json 
module.exports = router



