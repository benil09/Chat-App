import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import { useAuthStore } from "./store/useAuthStore";
import {Loader} from "lucide-react"

const App = () => {
       const {authUser,checkAuth,isCheckingAuth}=useAuthStore()

       
       useEffect(()=>{
         checkAuth()
        },[checkAuth])
        
        console.log(authUser)

       if(isCheckingAuth && !authUser) 
        return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin"/>
      </div>
      
        )
       


  

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={authUser?<HomePage />:<Navigate to="/login"/>}></Route>
        <Route path="/signup" element={!authUser?<SignUpPage />:<Navigate to="/"/>}></Route>
        <Route path="/login" element={!authUser?<LoginPage />:<Navigate to="/"/>}></Route>
        <Route path="/settings" element={<SettingsPage />}></Route>
        <Route path="/profile" element={authUser?<ProfilePage />:<Navigate to="/login"/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
