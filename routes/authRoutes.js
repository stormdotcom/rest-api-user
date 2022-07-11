import express from 'express'
import { login, register } from '../controllers/user.js'
import JoiValidator from 'express-joi-validation'
import { verifyToken } from '../middleware/auth.js';
import {registerSchema, loginSchema} from "../helpers/middlewareHelpers.js"
const validator = JoiValidator.createValidator({})

const router = express.Router()

router.get('/test', (req, res)=>{
    for(let i=0; i< 1e8; i++) {
        //some long running task which delays
    }
    res.send(`api live in process ${process.pid}`)
})

router.post('/register',  validator.body(registerSchema), register)
router.post('/login',validator.body(loginSchema), login)

export default router;
