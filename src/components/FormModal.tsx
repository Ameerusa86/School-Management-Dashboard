"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, ReactNode } from "react";
import { Pencil, Plus, Trash2 } from "lucide-react";

// Lazy load the forms with a custom loading indicator
const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => (
    <div className="flex justify-center items-center h-40">
      <Image src="/spinner.gif" alt="Loading..." width={40} height={40} />
    </div>
  ),
});

const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => (
    <div className="flex justify-center items-center h-40">
      <Image src="/spinner.gif" alt="Loading..." width={40} height={40} />
    </div>
  ),
});

interface FormTypes {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
}

const forms: FormTypes = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
};

interface FormModalProps {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}

const FormModal: React.FC<FormModalProps> = ({ table, type, data, id }) => {
  const [open, setOpen] = useState(false);

  const size = "w-8 h-8";
  const bgColor =
    type === "create"
      ? "bg-yellow-400"
      : type === "update"
      ? "bg-blue-500"
      : "bg-purple-600";

  const getIcon = (): ReactNode => {
    switch (type) {
      case "create":
        return <Plus size={14} className="text-black" />;
      case "delete":
        return <Trash2 size={20} className="text-white" />;
      case "update":
        return <Pencil size={20} className="text-white" />;
      default:
        return null;
    }
  };

  const FormContent = (): ReactNode => {
    if (type === "delete" && id) {
      return (
        <form className="p-6 flex flex-col gap-4">
          <span className="text-center font-medium text-gray-800">
            All data will be lost. Are you sure you want to delete this {table}?
          </span>
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full transition-colors duration-300 self-center">
            Delete
          </button>
        </form>
      );
    } else if (type === "create" || type === "update") {
      return forms[table](type, data);
    } else {
      return (
        <span className="text-center font-medium text-red-500">
          Form not found!
        </span>
      );
    }
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor} hover:scale-110 transition-transform duration-300 shadow-lg w-9 h-9 md:w-10 md:h-10`}
        onClick={() => setOpen(true)}
      >
        {getIcon()}
      </button>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl shadow-xl relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] transform transition-all duration-500 ease-in-out scale-105">
            {FormContent()}
            <div
              className="absolute top-4 right-4 cursor-pointer hover:scale-110 transition-transform duration-300"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="Close" width={20} height={20} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
