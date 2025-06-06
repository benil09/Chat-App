import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import cloudinary from "../lib/cloudinary.js";
import { getReceiverSocketId,io } from "../lib/socket.js";

export const getUsersForSidebar =async (req,res)=>{
    try {
        const loggedInUser=req.user._id;
        const filteredUsers=await User.find({_id:{$ne:loggedInUser}}).select("-password")
        res.status(200).json(filteredUsers)
    } catch (error) {
        console.error("Error in getUsersForSidebar:",error.message);
        res.status(500).json({error:"Internal Server error"})
    }


}

export const getMessages =async (req,res)=>{
    try {
        const {id:userToChatId}=req.params
        const myId=req.user._id;

        const messages = await Message.find({
            $or:[
                {senderId:myId,receiverId:userToChatId},
                {senderId:userToChatId,receiverId:myId}
            ]
        })
            res.status(200).json(messages)
        } catch (error) {
            
        
    }
}

export const sendMessage =async (req,res) =>{
    try {
        const {text,image}  = req.body
        const {id:receiverId}=req.params
        const senderId=req.user._id;

        let imageUrl;
        if(image){
            // upload base64 image to the cloudinary
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl=uploadResponse.secure_url
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image:imageUrl,

        })
        await newMessage.save();
        //todo : realtime functionality  goes here => socket.io
        const receiverSocketId=getReceiverSocketId(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit('newMessage',newMessage)
        }

        } catch (error) {
            console.log("Error in sendMessage controller : ",error.Message)
            res.status(500).json({message:"Internal server Error"})
        
    }

}
