const express=require('express')
const router=express.Router()
const {sighnIn,sighnUp}=require('../controllers/usercontrollers')

router.route('/sighnin').post(sighnIn)
router.route('/sighnup').post(sighnUp)

module.exports=router