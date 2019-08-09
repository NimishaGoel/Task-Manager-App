require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5d4b1a48083cb5200494b8dc', {age :1 }).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeandCount = async (id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeandCount('5d4c7ca101fcc7718c907a23',2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})