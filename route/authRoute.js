import express from 'express'
import {registerUser,hireMe} from "../controllers/authController.js"

const Router = express.Router()

Router.get("/",(req,res)=>{
    res.send("this is router.get")
})

Router.post("/register",registerUser)

Router.post("/hireme",hireMe)

export default Router;