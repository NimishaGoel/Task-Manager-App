require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5d4b1a48083cb5200494b8dc', {age :1 }).then((user)=>{
    console.log(user)
    return User.countDocuments({age:1})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})