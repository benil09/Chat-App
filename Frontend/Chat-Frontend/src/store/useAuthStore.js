import {create} from "zustand"
import { axiosInstance } from "../lib/axios.js"
import { toast } from "react-hot-toast";



export const useAuthStore= create((set)=>({
    authUser:null,
    isSigningUp:false,
    isLoggingIn:false,
    isUpdatingProfile:false,

    isCheckingAuth: true,


    checkAuth: async()=>{
            try {
                const res=await axiosInstance.get("/auth/check")

                set({authUser:res.data})

            } catch (error) {
                console.log("Error in checkAuth:",error);
                
                set({authUser:null})
            }finally{
                set({isCheckingAuth:false})
            }

    },

    signup: async(data)=>{
        set({isSigningUp:true})
        try {
        
            const res= await axiosInstance.post("/auth/signup",data)
            set({authUser:res.data})
            toast.success("Account created successfully")


            
            } catch (error) {
                const errorMessage = error.response?.data?.message || "Signup failed";
                toast.error(errorMessage);
                
            }finally{
                set({isSigningUp:false})
            }
    },
    logout: async()=>{
        try {
            await axiosInstance.post("/auth/logout")
            set({authUser:null})
            toast.success("Logged out successfully")
        } catch (error) {
            console.log("Error in logout:",error?.response?.data?.message);
            
        }
    },
    login: async(data)=>{
        set({isLoggingIn:true})
        try {
            const res=await axiosInstance.post("/auth/login",data)
            set({authUser:res.data})
            toast.success("Logged in successfully")
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Login failed";
            toast.error(errorMessage);
        }finally{
            set({isLoggingIn:false})
        }
    },
    updateProfile: async(data)=>{
       set({isUpdatingProfile:true})
       try {
        const res=await axiosInstance.put("/auth/update-profile",data)
        set({authUser:res.data})
        toast.success("Profile updated successfully")

        
       } catch (error) {
        console.log("Error in updateProfile:",error);
        const errorMessage = error.response?.data?.message || "Profile update failed";
        toast.error(errorMessage);
        }finally{
        set({isUpdatingProfile:false})
        }



    }
}))