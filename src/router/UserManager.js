 //Modularizacion de server(Express)
 
//  const {Router} = require ('express')
//  const router = Router()


//  router.get('/' , (req ,res )=>{
//     res.send('Get All/USERS ')
//   })
  
//   router.get('/:id/USERS' , (req ,res )=>{
//       const {id} = req.query
//       //recorro el users.json -metodo find : id
//       const user = BD.find(item => item.id === parseInt(id))
//           if (!user) return res.send ({error:"user not found"})
//           else res.send(user)
//   })
  
//   router.put('/:id' , (req ,res )=>{
//       res.send('put USERS ID')
//   })
  
//   router.post('/' , (req ,res )=>{
//       res.send('Post All/USERS')
//   })
  
  
//   router.delete('/:id' , (req ,res )=>{
//       res.send('Delete id/USERS')
//   })

//  module.exports = router

//  //Agregar persona por medio de formulario dentro de un array
// const crypto =requiere('crypto')

// let users=[]



// class UserManager{
//     getUsers=()=>{
//             return users
//     }

//     insertUser=user=>{
//         user.salt = crypto.randomBytes(128).toString('base64')
//         user.password = crypto.createHmac('sha256',user.salt).update((user.password)).digest('hex')
//         DB.push(user)
//         return user
//     }
//     validateUser=(username,password)=>{
//         const user = DB.find(u=> u.username == username)
//             if (!user){
//                 console.log('user no found')
//                 return
//             }

//             const newHash = crypto.createHmac('sha256',user.salt).update((password)).digest('hex')
    
//             if (newHash == user.password) console.log('logged!')
//             else console.log('invalid password')
//         }
// }

// const Usuario = new UserManager()

// Usuario.insertUser({
//     name:'Santiago',
//     lastname:'Catan',
//     username:'SantiagoCatan',
//     password:'CodeHouse22'
// })

