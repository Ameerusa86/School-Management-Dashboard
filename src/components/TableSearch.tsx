import Image from "next/image";

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-3 text-sm rounded-full bg-white shadow-sm ring-1 ring-gray-300 px-4 py-2 transition-all duration-300 hover:ring-blue-400 focus-within:ring-blue-400">
      <Image src="/search.png" alt="Search Icon" width={16} height={16} />
      <input
        type="text"
        placeholder="Search..."
        className="w-[200px] bg-transparent outline-none text-gray-700 placeholder-gray-400"
      />
    </div>
  );
};

export default TableSearch;
