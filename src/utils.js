//Manejo y creacion de json de productos

const fs = require('fs')

//const db = require("../products.json")

class Utils {
    constructor() {}
static products = []
    //funcion para genera el enerador
   static generadorIds = () => {
        const count = this.products.length

        if (count === 0) {
            return 1
        } else {
            return (this.products[count - 1].id) + 1
        }

    }
    //funcion para generar el array y pushearlo dentro del mismo
   static addEvent = async (title, descriptions, price, thumbnail, code, capacity) => {
        const id = this.generadorIds()
        //Validad los 6 parametros (obligatorios)
        if (!title || !descriptions || !price || !thumbnail || !code || !capacity) {

            //ARMAR SWITCH

            
            console.error("faltan parametros")
            return  400;
        }
        console.log()
        this.products.push({
            id,
            title,
            descriptions,
            price,
            thumbnail,
            code,
            capacity
        })
        fs.writeFileSync('products.json', JSON.stringify(this.products, null, 2))
        
        return 201;
    }
}

module.exports = Utils

