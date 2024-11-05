"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
function page() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: email,
        password: password
      })
      console.log("Here is Response : ", response)
     
      if (response.status == 200) {
        localStorage.setItem('token',response.data.token)
        toast.success(response.data.message || "Login Done Successfully ", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      }
    } catch (error) {
      toast.error(`User or Password something is wrong `, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }
    
    setEmail("");
    setPassword("");
    
  }
  return (
    <div className='h-screen w-full bg-white flex justify-center items-center'>
      <div className='bg-black h-[400px] w-[300px] rounded-md px-8'>
        <h1 className="font-sans text-white text-center text-2xl font-semibold mt-4  mb-10">Login Page</h1>
        
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className='bg-black   text-white outline-none
          border-b border-white p-4 mb-2
         '  placeholder='Enter your Email : ' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" className='bg-black required text-white outline-none  border-b border-white p-4 mb-4
         '  placeholder='Enter your Password : ' />
        <button className='bg-black text-white hover:bg-white hover:text-black transition-all duration-200
         border  py-2 px-5 rounded-lg' onClick={(e)=>handleSubmit(e)}>Submit</button>
      </div>
    </div>
  )
}

export default page
