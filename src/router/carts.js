// //modularizacion por router
// const {Router} = require ('express')

// const router = Router()


//       this.cart = this.cart || [];

// //Crear un Array vacio (nuevo carrito)
// router.post('/' , (req ,res )=>{
//     let cart = new Cart();
//     res.json(contenedorCarrito.save(cart));
//     res.send({ Msj: "Carrito Guardado", id: cart.id });
// })

// //indentificar id , Comparar productos
// router.get('/id' , (req ,res )=>{

//     const { id } = req.params
//     const idProducto = carrito.findindex (p => p.BD === parseInt(id))
      
// })


// //debe agregar el producto que indico por parametro y meterlo al carrito creado
// router.post('/:cid/product/:pid' , (req ,res )=>{
//     const { id, id_prod } = req.params;
//     const producto = contenedor.getById(id_prod);
//     const carritos = contenedorCarrito.getAll();
//     const carrito = contenedorCarrito.getById(id);
//     if (id > carritos.length) {
//       res.json({ error: "No existe el carrito" });
//     } else {
//       const carritoActualizado = [...carrito.products, producto];
  
//       contenedorCarrito.updateById(
//         carrito.id,
//         carrito.timestamp,
//         carritoActualizado
//       );
//       res.json({ msg: "Producto agregado" });
//     }
// })

// router.delete("/:id", (req, res) => {
//     let { id, id_prod } = req.params;
//     const carritos = await contenedorCarrito.getAll();
//     const carrito = await contenedorCarrito.getById(id);
//     if (id > carritos.length) {
//       res.json({ error: "No existe el carrito" });
//     } else {
//       const listaActualizada = carrito.products.filter(
//         (element) => element.id != id_prod
//       );
//       contenedorCarrito.updateById(
//         carrito.id,
//         carrito.timestamp,
//         listaActualizada
//       );
//       res.json({ msg: "Producto eliminado" });
//     }
//   });


// module.exports = router ;