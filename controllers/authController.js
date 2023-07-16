import express from 'express'
import { ContactDetail } from '../users/contactform.js'
import { hiringDetail } from '../users/hireform.js'

export const registerUser = async(req,res)=>{
    const {name,email,mobile,subject,message} = req.body

    if(!name || !email || !mobile || !subject || !message){
        return res.send({
            success: false,
            message: "Feilds can't be empty"
        })
    }
    
    const user = await ContactDetail.findOne({email})
    console.log(user);
    if(user){
        return res.send({
            success: false,
            message: "This email already exist"
        })
    }

    try {
        const newMessage = new ContactDetail({name,email,mobile,subject,message}) 
        await newMessage.save()
        return res.send({
            success: true,
            message: "Youe response has been recorded successfully",
            newMessage
        })
    } catch (error) {
        return res.send({
            success: false,
            message: "Something went wrong"
        })
    }
 
    
}

export const hireMe = async(req,res)=>{
    const {name,email,mobile,subject,project_description} = req.body
    
    if(!name || !email || !mobile || !subject || !project_description){
        return res.send({
            success: false,
            message: "Feilds can't be empty"
        })
    }

    const user = await hiringDetail.findOne({email})
    console.log(user);
    if(user){
        return res.send({
            success: false,
            message: "This email already exist"
        })
    }

    try {
        const newHire = new hiringDetail({name,email,mobile,subject,project_description}) 
        await newHire.save()
        return res.send({
            success: true,
            message: "Thank You for your response",
            newHire
        })
    } catch (error) {
        return res.send({
            success: false,
            message: "Something went wrong"
        })
    }
}
