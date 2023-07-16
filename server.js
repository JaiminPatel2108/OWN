import express from "express"
import cors from "cors" 
import authRoute from "./route/authRoute.js"
import { connectDB } from "./connection/connection.js"
import path from "path"
import {fileURLToPath} from 'url
// import 

//esmodule fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,"./frontend/build")))
connectDB()
const port = 5000

app.use("*",function (req,res) {
    res.send(path.join(__dirname,"./frontend/build/index.html"))
})

app.use("/api/v1/auth",authRoute)   

app.listen(port,()=>{
    console.log(`your backend server is running on port ${port}`);
})
