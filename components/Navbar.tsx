import Link from "next/link"
export default function Navbar() {
  return (
    <header className="flex bg-blue-800 text-amber-100 font-bold text-2xl p-4">
      <h1 className="text-3xl font-bold"><Link href="/" className="hover:text-blue-600">
        My app
      </Link></h1>
 <ul className="flex gap-4 p-4 text-xl">
      <Link href="/" className="hover:text-blue-600">
        หน้าแรก
      </Link>
      <Link href="/about" className="hover:text-blue-600">
        เกี่ยวกับเรา
      </Link>
      <Link href="/blog" className="hover:text-blue-600">
        บทความ
      </Link>
      <Link href="/contact" className="hover:text-blue-600">
        ติดต่อ
      </Link>
            <Link href="/counter" className="hover:text-blue-600">
        Counter
      </Link>
            <Link href="/login" className="hover:text-blue-600">
        login
      </Link>
    </ul>
    </header>
 
 
 
  )
}
