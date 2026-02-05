export default async function BlogPage() {

    // 2. จำลองการโหลดข้อมูล (หน่วงเวลา 3 วินาที)
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // 3. จำลอง Error
    throw new Error("ไม่สามารถโหลดบทความได้");

    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold">บทความ</h1>
        <p className="mt-4">
          ยินดีต้อนรับสู่หน้า Blog
        </p>
      </div>
    )
}