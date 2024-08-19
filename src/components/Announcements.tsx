const Announcements = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Announcements</h1>
        <span className="text-sm text-blue-600 cursor-pointer hover:underline transition-all duration-200">
          View All
        </span>
      </div>
      <div className="flex flex-col gap-6">
        <div className="bg-blue-100 rounded-lg p-5 shadow-sm transition-transform transform hover:scale-105">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold text-gray-700">
              Lorem ipsum dolor sit
            </h2>
            <span className="text-xs text-gray-500 bg-white rounded-md px-2 py-1 shadow">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
        <div className="bg-purple-100 rounded-lg p-5 shadow-sm transition-transform transform hover:scale-105">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold text-gray-700">
              Lorem ipsum dolor sit
            </h2>
            <span className="text-xs text-gray-500 bg-white rounded-md px-2 py-1 shadow">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
        <div className="bg-yellow-100 rounded-lg p-5 shadow-sm transition-transform transform hover:scale-105">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold text-gray-700">
              Lorem ipsum dolor sit
            </h2>
            <span className="text-xs text-gray-500 bg-white rounded-md px-2 py-1 shadow">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
