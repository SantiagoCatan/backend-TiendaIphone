const crypto =requiere('crypto')

let DB=[]

class UserManager{
    getUsers=()=>{
            return DB
    }

    insertUser=user=>{
        user.salt = crypto.randomBytes(128).toString('base64')
        user.password = crypto.createHmac('sha256',user.salt).update((user.password)).digest('hex')
        DB.push(user)
        return user
    }
    validateUser=(username,password)=>{
        const user = DB.find(u=> u.username == username)
            if (!user){
                console.log('user no found')
                return
            }

            const newHash = crypto.createHmac('sha256',user.salt).update((password)).digest('hex')
    
            if (newHash == user.password) console.log('logged!')
            else console.log('invalid password')
        }
}

const Usuario = new UserManager()

Usuario.insertUser({
    name:'Santiago',
    lastname:'Catan',
    username:'SantiagoCatan',
    password:'CodeHouse22'
})

console.log(manager.getUsers())
