require('../src/db/mongoose')
const Task= require('../src/models/task')

// Task.findByIdAndUpdate('5d4b0b78cbbf424200b6feff', { completed : false}).then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed :false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async (id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed :'false'})
    return count
}

deleteTaskAndCount('5d4b0b78cbbf424200b6feff').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})