const { isRegExp } = require('util/types')
const {sighnUp,sighnIn}=require('../controllers/usercontrollers')
const yup =require('yup')


const userssinghnupSchema =yup.object({
    email:yup.string().required(),
    password:yup.string().required(),
    username:yup.string().required()
})


    

const userssinghninSchema =yup.object({
    email:yup.string(),
    password:yup.string()
    }).required()

const sighnupValidation = userssinghnupSchema.validate(sighnUp,{abortEarly:false,stripUnknown:true})
const sighninValidation= userssinghninSchema.validate(sighnIn,{abortEarly:false,stripUnknown:true})


module.exports={sighnupValidation,sighninValidation}

