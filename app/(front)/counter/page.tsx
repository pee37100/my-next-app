"use client"
import { useEffect, useState } from "react"
export default function CounterPage() {
const [count,setCount]=useState(0)
// auto counter up every second
useEffect ( ( ) => {
          const interval = setInterval ( ( ) =>
               {
                    setCount ( ( prevCount ) => prevCount + 1 )
               }, 1000 )
               return ( ) => clearInterval ( interval )
     }, [ ] )
    return (
    <>
        < h1 className="text-3xl"> Counter Page</h1 >

        <button onClick={()=>setCount(count+1)} className="border p-2 rounded bg-amber-400 hover:bg-amber-800 cursor-pointer"> Counter Up</button>
        <button onClick={()=>setCount(count-1)} className="border p-2 rounded bg-green-400 hover:bg-green-500 cursor-pointer"> Counter Down</button>
        < h2 className="text-5xl">{count}</h2 >
    </ >
    )


}