"use client";
 
import Link from "next/link";
import { usePathname } from "next/navigation";
 
export default function Navbar ( )
{
     const pathname = usePathname ( );
     console.log ( pathname );
     return (
          <header className="bg-blue-600 p-4 text-white flex">
               <h1 className="text-3xl font-bold">Navbar</h1>
               <ul className="flex space-x-4 ml-8 mt-2">
                    <li><Link className={ pathname === '/' ? 'text-amber-400' : ''} href="/">Home</Link></li>
                    <li><Link className={ pathname === '/about' ? 'text-amber-400' : ''} href="/about">About</Link></li>
                    <li><Link className={ pathname === '/contact' ? 'text-amber-400' : ''} href="/contact">Contact</Link></li>
                    <li><Link className={ pathname === '/blog' ? 'text-amber-400' : ''} href="/blog">Blog</Link></li>
                    <li><Link className={ pathname === '/counter' ? 'text-amber-400' : ''} href="/counter">Counter</Link></li>
                    <li><Link className={ pathname === '/login' ? 'text-amber-400' : ''} href="/login">Login</Link></li>
               </ul>
          </header>
     )
}