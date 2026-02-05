import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <Navbar />
        <main className="min-h-screen">{children}</main>
      
        <Footer />
    </div>
  );
}