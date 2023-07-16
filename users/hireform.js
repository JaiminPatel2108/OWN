import mongoose from "mongoose"

const hireSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    mobile: {
        type: Number,
        require: true
    },
    subject: {
        type: String,
        require: true
    },
    project_description: {
        type: String,
        require: true
    }
})

export const hiringDetail = new mongoose.model("hiringdetail",hireSchema)