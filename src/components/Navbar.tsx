import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-sm">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-sm rounded-full ring-1 ring-gray-300 px-3 py-2 hover:ring-gray-400 transition-all duration-300">
        <Image src="/search.png" alt="Search" width={16} height={16} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] bg-transparent outline-none placeholder-gray-500 text-gray-700"
        />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        {/* Message Icon */}
        <div className="relative">
          <div className="bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors duration-300">
            <Image src="/message.png" alt="Messages" width={20} height={20} />
          </div>
        </div>
        {/* Announcement Icon */}
        <div className="relative">
          <div className="bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors duration-300">
            <Image
              src="/announcement.png"
              alt="Announcements"
              width={20}
              height={20}
            />
            <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
              1
            </div>
          </div>
        </div>
        {/* User Info */}
        <div className="flex items-center gap-2">
          <div className="flex flex-col text-right">
            <span className="text-sm font-medium text-gray-700">John Doe</span>
            <span className="text-xs text-gray-500">Admin</span>
          </div>
          <Image
            src="/avatar.png"
            alt="User Avatar"
            width={36}
            height={36}
            className="rounded-full border border-gray-200 shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
