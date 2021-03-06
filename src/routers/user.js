const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/users', async(req,res)=>{
    const user = new User(req.body)
    try{
        await user.save()
        const token = await user.generateAuthToken()
        res.send({user, token})
    }catch(err){
        res.status(400).send(err)
    }
})

router.post('/users/login', async (req,res) =>{

    try{
        const user = await User.findByCredentials(req.body.email , req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    }catch(err){
        res.status(400).send(err)
    }
})

router.get('/users',auth, async(req,res)=>{
   
   res.send(req.user)
})

router.get('/users/:id', async (req,res)=>{
    const _id= req.params.id
    try{
        const user = await User.findById(_id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send(e)
    }
})

router.patch('/users/:id',async(req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','email','password','age']
    const isValidatorOperations = updates.every((update) => { return allowedUpdates.includes(update)})
    if(!isValidatorOperations)
    {
        return res.status(400).send('Invalid Updates!!!')
    }

    try{
        const user= await User.findById(req.params.id)

        updates.forEach((update) => user[update] = req.body[update])
        await user.save()
       // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new : true , runValidators : true})
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send(e)
    }
})

router.delete('/users/:id', async (req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user)
        {
            return res.status(404).send()
        }
        res.send(user)
    }catch(err)
    {
        res.send(500).send(e)
    }
})

module.exports = router