class ProductManager{
    constructor(){
        this.events=[]
    }
//funcion para genera el enerador
generadorIds=()=>{
    const count=this.events.length
    if(count=== 0){
        return 1
    }else{
        return (this.events[count + 1].id)+ 1 
    }

}

getEvents =()=>{
    return this.events
}
getProductByid=()=>{
     
    if (this.events.find(element=> element.id===id)){
        console.log("Se encontro el "+ id +" dentro del la lista");
    }
    else 
     console.log("no se encontro " +Id +" del objeto")

}

//funcion para generar el array y pushearlo dentro del mismo
addEvent=(title, descriptions, price, thumbnail, code, capacity)=>{
    const id=  this.generadorIds()
     //Validad los 6 parametros (obligatorios)
     if (!title|| !descriptions|| !price|| !thumbnail|| !code|| !capacity){
        console.error("Falta algun elemento del objeto");
        return 
    }
    
    if (this.events.find(element=> element.code===code)){
        console.error("el elemento ya existe");
        return 
    }
   
    this.events.push({
        id,
        title,
        descriptions,
        price,
        thumbnail,
        code,
        capacity
    })
}
}

ProductManager.addEvent("Iphones",'iphone 11', 450, 'https://http2.mlstatic.com/D_NQ_NP_656548-MLA46114829749_052021-O.jpg',"item1",20)
ProductManager.addEvent("Iphones",'iphone 12', 850, 'https://m.media-amazon.com/images/I/41xssMLI2DL._AC_.jpg',"item2",20) 
ProductManager.addEvent("Iphones",'iphone 13', 950, 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443174_sd.jpg',"item3",20) 
ProductManager.addEvent("Iphones",'iphone 14', 1050, 'https://www.ventasrosario.com.ar/wp-content/uploads/2022/09/61bK6PMOC3L._AC_SL1500_.jpg',"item4",40)

ProductManager.addEvent("Ipads",'Ipad Pro', 900, 'https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_SL1500_.jpg',"item5",20)
ProductManager.addEvent("Ipads",'Ipad Air', 600, 'https://carrello.com.ar/ecom/wp-content/uploads/2022/05/ipad-air-select-wifi-pink-202203.jpg',"item6",20) 
ProductManager.addEvent("Ipads",'Ipad Mini', 1200, 'https://m.media-amazon.com/images/I/618hKLi2ljL._AC_SL1500_.jpg',"item7",40)

ProductManager.addEvent("Macbook",'Macbook Pro', 1500, 'https://www.macstation.com.ar/img/productos/2922-2846-2620-1.jpg',"item8",20) 
ProductManager.addEvent("Macbook",'Macbook Air', 2000, 'https://mobilestore.ec/wp-content/uploads/2022/07/MacBook-Air-M2-2022-Mght-Mobile-Store-Ecuador.jpg',"item9",20) 
ProductManager.addEvent("Macbook",'Macbook 24', 3500, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM-5u68LsuGUhTu3xdC47-EV14PICNqWW3LiiAMw05yJUks4RW&usqp=CAc',"item10",20) 

ProductManager.addEvent("Watch",'Watch Ultra', 150, 'https://www.mgmstore.com.ar/1479-large_default/Apple-Watch-Ultra-49mm-Titanium.jpg',"item11",20) 
ProductManager.addEvent("Watch",'Watch Serie8', 100, 'https://http2.mlstatic.com/D_NQ_NP_858093-MLA48096508611_112021-O.webp',"item12",20) 
ProductManager.addEvent("Watch",'Watch nike', 500, 'https://tecnoselect.com/pub/media/catalog/product/cache/33323691697b683682a920cb116273e9/m/i/mght-pure-platinum-black-nike-45mm.jpg',"item13",40 )


console.log(ProductManager.getEvents())