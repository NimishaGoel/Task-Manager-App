const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser : true,
    useCreateIndex: true,
    useFindAndModify : false
})



// const task1= new Task({
//     description : "Clean the house",
//     completed :true
// })

// task1.save().then(()=>{
//     console.log(task1)
// }).catch((error)=>{
//     console.log('error',error)
// })