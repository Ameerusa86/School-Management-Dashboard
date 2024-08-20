import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, subjectsData } from "@/lib/data";
import Image from "next/image";

type Subject = {
  id: number;
  name: string;
  teachers: string[];
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Teachers",
    accessor: "teachers",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const SubjectListPage = () => {
  const renderRow = (item: Subject) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-gray-50 hover:bg-blue-100 transition-all duration-300"
    >
      <td className="flex items-center gap-4 p-4">{item.name}</td>
      <td className="hidden md:table-cell">{item.teachers.join(", ")}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="subject" type="update" data={item} />
              <FormModal table="subject" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-2xl flex-1 m-4 md:m-6 lg:m-8 mt-4 transition-all duration-500 hover:shadow-xl">
      {/* TOP */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 md:mb-6 lg:mb-8">
        <h1 className="text-xl md:text-3xl font-bold text-gray-800">
          All Subjects
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mt-4 md:mt-0">
          <TableSearch />
          <div className="flex items-center gap-2 md:gap-4">
            <button className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300 shadow-md">
              <Image src="/filter.png" alt="Filter" width={14} height={14} />
            </button>
            <button className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300 shadow-md">
              <Image src="/sort.png" alt="Sort" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="subject" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      <div className="overflow-x-auto">
        <Table columns={columns} renderRow={renderRow} data={subjectsData} />
      </div>
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default SubjectListPage;
