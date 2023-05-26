const express=require('express')
const router=express.Router()
const {sighnIn,sighnUp}=require('../controllers/usercontrollers')
const {sighnupValidation,sighninValidation}=require('../middleware/validations')
router.route('/sighnin',sighninValidation).post(sighnIn)
router.route('/sighnup',sighnupValidation).post(sighnUp)

module.exports=router