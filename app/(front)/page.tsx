import Image from 'next/image'


async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

export default async function Page() {
  const users = await getUsers()
  console.log(users)
  return (
    <div className="p-8">
      {/* <img src="about1.webp" alt="About Image" className="w-64 h-auto mb-4" /> */}
      <Image src="/about1.webp" style={{width:"10%", height:"auto"}} alt="About Image" width={256} height={256} className="mb-4" />
      <h1 className="text-3xl font-bold mb-4">รายชื่อผู้ใช้</h1>
      <ul className="list-disc pl-5">
        {users.map((user: any) => (
          <li key={user.id} className="mb-2">
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  )
}