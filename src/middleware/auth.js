const User = require('../models/user')
const jwt = require('jsonwebtoken')

const auth = async (req,res, next) => {

   
    try {
        const token = req.header('Authorization').replace('Bearer ','')
        console.log(token)
        const decoded = jwt.verify(token,'thisisatokenchapter')
        const user = await user.findOne({ id : decoded._id, 'tokens.token' : token})

        if(!user)
        {
            throw new Error()
        }
        req.user =user
        next()
    }catch(err){
        res.status(401).send({ error: 'Please check authentication details.'
        })
    }
}

module.exports= auth