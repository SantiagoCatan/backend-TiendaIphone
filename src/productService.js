//Manejo y creacion de json de productos

const fs = require('fs')


class ProductService {
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

        this.saveProduct(this.products)
      
        
        return 201;
    }

    static saveProduct = async(product) =>{
        fs.writeFileSync('products.json', JSON.stringify(product, null, 2))
    }

    static deleteProduct = async(db,id) => {

        if(db.length === 0){
            return 400;
        }

        const dbFiltered = db.filter(p => p.id != parseInt(id))
       
        if (dbFiltered.length === db.length){
            return 404;
        }
        await this.saveProduct(dbFiltered)

        return 200;
    }
}

module.exports = ProductService

