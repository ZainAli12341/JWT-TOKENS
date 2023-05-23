const {sighnUp,sighnIn}=require('../controllers/usercontrollers')
const yup =require('yup')


const userssinghnupSchema =yup.object({
    email:yup.string().email({regex:'/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'}),
    password:yup.string(),
    username:yup.string()
    }).required()
const userssinghninSchema =yup.object({
    email:yup.string().email({regex:'/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'}),
    password:yup.string()
    }).required()

const sighnupValidation = userssinghnupSchema.validate(sighnUp,{abortEarly:false,stripUnknown:true})
const sighninValidation= userssinghninSchema.validate(sighnIn,{abortEarly:false,stripUnknown:true})



module.exports={sighnupValidation,sighninValidation}

