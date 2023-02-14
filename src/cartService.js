//Manejo y creacion de json de productos

const fs = require('fs')

const db = require("../carts.json")
class CartService {
    constructor() {}
static cart = []
    //funcion para genera el enerador
   static generadorIds = () => {
        const count = this.cart.length

        if (count === 0) {
            return 1
        } else {
            return (this.cart[count - 1].id) + 1
        }

    }
    //funcion para generar el array y pushearlo dentro del mismo
   static createCart = async (cid,pid) => {
        let cart = [];
        let products = [];
        if(cid === undefined){
            cid = this.generadorIds()
            
        }else{
            cart = db.find(p => p.cid === parseInt(cid))
            products = cart.products
        }
        

        //Validad(obligatorio)
        if (!pid || cart.length === 0) {
            
            console.error("faltan parametros")
            return  400;
        }

        let productsFinded = products.find((p)=> p.id === pid)
        if (products.length === 0 || productsFinded === undefined)
            products.push({pid})
        
        
        
        cart.push({
            cid,
            products
        })

        this.saveCart(cart)
      
        return 201;
    }

    static saveCart = async(cart) =>{
        fs.writeFileSync('carts.json', JSON.stringify(cart, null, 2))
    }

    static deleteCart = async(db,id) => {

        if(db.length === 0){
            return 400;
        }

        const dbFiltered = db.filter(p => p.id != parseInt(id))
       
        if (dbFiltered.length === db.length){
            return 404;
        }
        await this.saveCart(dbFiltered)

        return 200;
    }
}

module.exports = CartService

