"use client";

import { ITEM_PER_PAGE } from "@/lib/settings";
import { useRouter } from "next/navigation";

const Pagination = ({ page, count }: { page: number; count: number }) => {
  const router = useRouter();

  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count;

  const changePage = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    router.push(`${window.location.pathname}?${params}`);
  };

  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button
        disabled={!hasPrev}
        className={`py-2 px-4 rounded-md text-xs font-semibold transition-colors
          ${
            hasPrev
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-300 cursor-not-allowed opacity-50"
          }`}
        onClick={() => changePage(page - 1)}
      >
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        {Array.from(
          { length: Math.ceil(count / ITEM_PER_PAGE) },
          (_, index) => {
            const pageIndex = index + 1;
            return (
              <button
                key={pageIndex}
                className={`px-3 py-1 rounded-md font-semibold transition-colors ${
                  page === pageIndex
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => changePage(pageIndex)}
              >
                {pageIndex}
              </button>
            );
          }
        )}
      </div>
      <button
        disabled={!hasNext}
        className={`py-2 px-4 rounded-md text-xs font-semibold transition-colors 
          ${
            hasNext
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-300 cursor-not-allowed opacity-50"
          }`}
        onClick={() => changePage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
