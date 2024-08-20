const Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-between text-gray-700">
      <button
        disabled
        className="py-2 px-4 rounded-full bg-slate-200 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 hover:bg-slate-300"
      >
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm font-medium">
        <button className="px-3 py-1 rounded-full bg-blue-500 text-white transition-transform duration-300 hover:scale-110">
          1
        </button>
        <button className="px-3 py-1 rounded-full text-blue-500 transition-colors duration-300 hover:bg-blue-100 hover:text-blue-700">
          2
        </button>
        <button className="px-3 py-1 rounded-full text-blue-500 transition-colors duration-300 hover:bg-blue-100 hover:text-blue-700">
          3
        </button>
        <span className="px-2">...</span>
        <button className="px-3 py-1 rounded-full text-blue-500 transition-colors duration-300 hover:bg-blue-100 hover:text-blue-700">
          10
        </button>
      </div>
      <button className="py-2 px-4 rounded-full bg-slate-200 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 hover:bg-slate-300">
        Next
      </button>
    </div>
  );
};

export default Pagination;
