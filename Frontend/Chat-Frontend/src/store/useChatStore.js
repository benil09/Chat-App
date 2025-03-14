import {create} from "zustand"

import toast from 'react-hot-toast'
import { axiosInstance } from "../lib/axios"

export  const useChatStore = create((set,get) => ({
            messages:[],
            users:[],
            selectedUser:null,
            setSelectedUser: (user) => set({selectedUser:user}),
            isUserLoading:false,
            isMessagesLoading:false,
            isSendingMessage:false,




            getUsers: async()=>{
                set({isUserLoading:true})

                try {
                    const res=await axiosInstance.get("/messages/users")
                    set({users:res.data})
                } catch (error) {
                    console.log("Error in getUsers:",error);
                    toast.error("Failed to fetch users")
                    
                }finally{
                    set({isUserLoading:false})
                }
            },
            getMessages: async (userId) => {
                set({ isMessagesLoading: true });
                try {
                  const res = await axiosInstance.get(`/messages/${userId}`);
                  set({ messages: res.data });
                } catch (error) {
                  toast.error(error.response.data.message);
                } finally {
                  set({ isMessagesLoading: false });
                }
              },

            sendMessage:async (messageData)=>{
              const {selectedUser,messages} = get()
                set({isSendingMessage:true})
                try {
                     res = axiosInstance.post(`/messages/send/${selectedUser._id}`,messageData)
                     set({messages:[...messages,res.data]})
                     
                } catch (error) {
                    console.log("Error in sendMessage:",error);
                    toast.error("Failed to send message")
                }finally{
                    set({isSendingMessage:false})
                }},

              // todo : optimize this one later

              setSelectedUser: (selectedUser) => set({ selectedUser }),
              

        }))
            

  
