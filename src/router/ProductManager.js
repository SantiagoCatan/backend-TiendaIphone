//modularizacion por router
const {Router} = require ('express')

const router = Router()

const BD = require ('C:/Users/santiago/Desktop/backend-TiendaIphone/users.json')

router.get('/' , (req ,res )=>{
  res.send('Get All/products ')
})

router.get('/:id' , (req ,res )=>{
    const {id} = req.query
    //recorro el users.json -metodo find : id
    const user = BD.find(item => item.id === parseInt(id))
        if (!user) return res.send ({error:"user not found"})
        else res.send(user)
})

router.put('/:id' , (req ,res )=>{
    res.send('put id')
})

router.post('/' , (req ,res )=>{
    res.send('Post All')
})


router.delete('/:id' , (req ,res )=>{
    res.send('Delete id')
})
//para poder exportar users.json 
module.exports = router



//Manejo y creacion de json de productos

const fs =require ('fs')

let users = []

class ProductManager {
    constructor(events){
        this.events=events
    }
//funcion para genera el enerador
generadorIds=()=>{
    const count=users.length
    if(count=== 0){
        return 1
    }else{
        return (users[count-1].id)+ 1 
    }

}
//busca el id del producto , y me dice si lo encontre o no 
getProductByid=()=>{
   if (users.find(element=> element.id===id)){
        console.log("Se encontro el "+ id +" dentro del la lista");
    }
    else
    console.log("No se encontro el id correspondiente");
}

//funcion para generar el array y pushearlo dentro del mismo
addEvent = async (title, descriptions, price, thumbnail, code, capacity) => {
    const id= this.generadorIds()
     //Validad los 6 parametros (obligatorios)
     if (!title|| !descriptions|| !price|| !thumbnail|| !code|| !capacity){
        console.error("Falta algun elemento del objeto");
        return 
    } 
    
    users.push({
        id,
        title,
        descriptions,
        price,
        thumbnail,
        code,
        capacity
    })

        fs.writeFileSync(this.events, JSON.stringify(users,null,2))
}
//Mostrar item por Consola

WriteEvent=async()=>{
    let ListProducts=fs.readFileSync('./users.json')
    let Product =JSON.parse(ListProducts)
    console.log (typeof Product)
    
}

//eliminar producto mediante el id
removeEvent=async(id)=>{
    
    users.filter(producto => producto.id != id);
}

}

async function CracionJson(){

const productManage =new ProductManager('users.json') 

await productManage.addEvent ('Iphones','iphone 11', 450, 'https://http2.mlstatic.com/D_NQ_NP_656548-MLA46114829749_052021-O.jpg','item1',20)
await productManage.addEvent ("Iphones",'iphone 12', 850, 'https://m.media-amazon.com/images/I/41xssMLI2DL._AC_.jpg',"item2",20) 
await productManage.addEvent ("Iphones",'iphone 13', 950, 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443174_sd.jpg',"item3",20) 
await productManage.addEvent ("Iphones",'iphone 14', 1050, 'https://www.ventasrosario.com.ar/wp-content/uploads/2022/09/61bK6PMOC3L._AC_SL1500_.jpg',"item4",40)
await productManage.addEvent ("Ipads",'Ipad Pro', 900, 'https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_SL1500_.jpg',"item5",20)
await productManage.addEvent ("Ipads",'Ipad Air', 600, 'https://carrello.com.ar/ecom/wp-content/uploads/2022/05/ipad-air-select-wifi-pink-202203.jpg',"item6",20) 
await productManage.addEvent ("Ipads",'Ipad Mini', 1200, 'https://m.media-amazon.com/images/I/618hKLi2ljL._AC_SL1500_.jpg',"item7",40)
await productManage.addEvent ("Macbook",'Macbook Pro', 1500, 'https://www.macstation.com.ar/img/productos/2922-2846-2620-1.jpg',"item8",20) 
await productManage.addEvent ("Macbook",'Macbook Air', 2000, 'https://mobilestore.ec/wp-content/uploads/2022/07/MacBook-Air-M2-2022-Mght-Mobile-Store-Ecuador.jpg',"item9",20) 
await productManage.addEvent ("Macbook",'Macbook 24', 3500, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM-5u68LsuGUhTu3xdC47-EV14PICNqWW3LiiAMw05yJUks4RW&usqp=CAc',"item10",20) 
await productManage.addEvent ("Watch",'Watch Ultra', 150, 'https://www.mgmstore.com.ar/1479-large_default/Apple-Watch-Ultra-49mm-Titanium.jpg',"item11",20) 
await productManage.addEvent ("Watch",'Watch Serie8', 100, 'https://http2.mlstatic.com/D_NQ_NP_858093-MLA48096508611_112021-O.webp',"item12",20) 
await productManage.addEvent ("Watch",'Watch nike', 500, 'https://tecnoselect.com/pub/media/catalog/product/cache/33323691697b683682a920cb116273e9/m/i/mght-pure-platinum-black-nike-45mm.jpg',"item13",40 )
}
CracionJson()
