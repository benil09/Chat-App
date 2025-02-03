import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'


const SignUpPage = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [formData,setFormData]=useState({
    fullName:"",
    email:"",
    password:"",
  })

  const {signup,isSignUp}=useAuthStore();
  const validateForm=()=>{

  }
  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  return (
    <div>
      
    </div>
  )
}

export default SignUpPage
