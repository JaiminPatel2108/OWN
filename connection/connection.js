import mongoose from "mongoose"

export const connectDB = ()=>{
    mongoose.connect("mongodb://localhost:27017/jimmy_patel")
    .then(()=>{console.log("your connection with moongodb is done")})

}
// connectDB()
