import mongoose from "mongoose"

const ContactSchema = mongoose.Schema({
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
    message: {
        type: String,
        require: true
    }
})

export const ContactDetail = new mongoose.model("ContactDetail",ContactSchema)

