"use client"
import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
function page() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const onSubmit =async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("/api/auth/signup", {
        username: username,
        email: email,
        password: password
      }) 
      console.log("Response Data : ", resp) 
      
      if (resp.status == 200) {
        toast.success(resp.data.message || "Done SignUp", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
        router.push("/login");
      }

    } catch (error) {
      toast.error(resp.data.message || "Something went wrong while sign up", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
console.log("Something went wrong while making request ",error) 
    }
    setUsername("");
    setEmail("");
    setPassword("");
  }
  return (
    <div className='h-screen w-full bg-white flex justify-center items-center'>
      <div className='bg-black h-[400px] w-[300px] rounded-md px-8'>
        <h1 className="font-sans text-white text-center text-2xl font-semibold mt-4  mb-10">SignUp Page</h1>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className='bg-black text-white outline-none  border-b border-white p-4 mb-2
         '  placeholder='Enter your Username : ' />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className='bg-black  text-white outline-none  border-b border-white p-4 mb-2
         '  placeholder='Enter your Email : ' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" className='bg-black  text-white outline-none border-b border-white p-4 mb-4
         '  placeholder='Enter your Password : ' />
        <button className='bg-black text-white hover:bg-white hover:text-black transition-all duration-200
         border  py-2 px-5 rounded-lg' onClick={onSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default page
