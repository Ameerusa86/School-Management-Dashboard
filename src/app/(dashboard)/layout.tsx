import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="h-screen flex">
        {/* Left Section */}
        <div className="w-[15%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-50 p-4">
          <Link
            href={"/"}
            className="flex items-center justify-center lg:justify-start gap-2"
          >
            <Image src="/logo.png" alt="logo" width={32} height={32} />
            <span className="hidden lg:block">SchoolWise</span>
          </Link>
          <Menu />
        </div>
        {/* Right Section */}
        <div className="w-[85%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-100">
          Right
        </div>
      </div>
    </html>
  );
}
