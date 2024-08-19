import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-gradient-to-r odd:from-purple-500 odd:via-purple-600 odd:to-purple-700 even:bg-gradient-to-r even:from-yellow-400 even:via-yellow-500 even:to-yellow-600 p-5 flex-1 min-w-[150px] shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600 shadow-md">
          2024/25
        </span>
        <Image src="/more.png" alt="More Options" width={20} height={20} />
      </div>
      <h1 className="text-3xl font-bold text-white my-4 tracking-wide">
        1,234
      </h1>
      <h2 className="capitalize text-sm font-medium text-gray-100">{type}s</h2>
    </div>
  );
};

export default UserCard;
