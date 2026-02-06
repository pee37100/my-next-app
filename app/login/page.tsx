"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'




export default function LoginPage() {
  const router = useRouter()  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); 
  
//function to handle login and check credentials 
 const authenticateUser = (e: React.FormEvent) => {
  e.preventDefault()
    if (username === 'admin' && password === 'password') {
      alert('Login successful')
      router.push('/counter');}
      else {
      alert('Invalid credentials')
    } 
  };


  return (
    <div className='flex flex-col justify-center'><h2 className="text-2xl font-bold">Login Page</h2>
  <form onSubmit={authenticateUser} className="max-w-md mx-auto mt-8">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username"> Username </label>
      <input 
      onChange={(e) => setUsername(e.target.value)}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
    <div className="mb-6">  
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password"> Password </label>
      <input 
      onChange={(e) => setPassword(e.target.value)}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
    </div>
    <div className="flex items-center justify-between">
      <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"> Sign In </button>
    </div>
  </form>
  <p className="text-center mt-4"><Link href="/" className="text-blue-500 hover:text-blue-700">Back to Home</Link></p>
  <p className="text-center text-gray-500 text-xs mt-4"> &copy;2024 Your Company. All rights reserved. </p>
</div>  
  )
}
