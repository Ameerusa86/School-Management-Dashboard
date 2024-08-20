import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-8 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3 flex flex-col gap-8">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* USER INFO CARD */}
          <div className="bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] p-6 rounded-xl flex-1 flex gap-6 shadow-xl">
            <div className="flex-shrink-0 flex items-center justify-center w-36 h-36">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Teacher"
                width={144}
                height={144}
                className="rounded-full object-cover shadow-lg w-full h-full transition-transform transform hover:scale-110"
              />
            </div>
            <div className="flex-grow flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-white">
                  Leonard Snyder
                </h1>
                {role === "admin" && (
                  <FormModal
                    table="teacher"
                    type="update"
                    data={{
                      id: 1,
                      username: "deanguerrero",
                      email: "deanguerrero@gmail.com",
                      password: "password",
                      firstName: "Dean",
                      lastName: "Guerrero",
                      phone: "+1 234 567 89",
                      address: "1234 Main St, Anytown, USA",
                      bloodType: "A+",
                      dateOfBirth: "2000-01-01",
                      sex: "male",
                      img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                    }}
                  />
                )}
              </div>
              <p className="text-sm text-gray-200 mt-2">
                Passionate educator with years of experience in inspiring and
                guiding students to achieve their best.
              </p>
              <div className="flex flex-wrap gap-2 text-sm font-medium text-white mt-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/blood.png"
                    alt="Blood Type"
                    width={16}
                    height={16}
                  />
                  <span>A+</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/date.png"
                    alt="Date of Birth"
                    width={16}
                    height={16}
                  />
                  <span>January 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/mail.png" alt="Email" width={16} height={16} />
                  <span>user@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/phone.png" alt="Phone" width={16} height={16} />
                  <span>+1 234 567</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="flex flex-wrap gap-6 justify-between">
            {/* CARD */}
            <div className="bg-white p-6 rounded-xl flex gap-4 items-center shadow-lg w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] transition-transform transform hover:scale-105">
              <Image
                src="/singleAttendance.png"
                alt="Attendance"
                width={28}
                height={28}
                className="w-8 h-8"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">90%</h1>
                <span className="text-sm text-gray-500">Attendance</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-6 rounded-xl flex gap-4 items-center shadow-lg w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] transition-transform transform hover:scale-105">
              <Image
                src="/singleBranch.png"
                alt="Branches"
                width={28}
                height={28}
                className="w-8 h-8"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">2</h1>
                <span className="text-sm text-gray-500">Branches</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-6 rounded-xl flex gap-4 items-center shadow-lg w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] transition-transform transform hover:scale-105">
              <Image
                src="/singleLesson.png"
                alt="Lessons"
                width={28}
                height={28}
                className="w-8 h-8"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">6</h1>
                <span className="text-sm text-gray-500">Lessons</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-6 rounded-xl flex gap-4 items-center shadow-lg w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] transition-transform transform hover:scale-105">
              <Image
                src="/singleClass.png"
                alt="Classes"
                width={28}
                height={28}
                className="w-8 h-8"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">6</h1>
                <span className="text-sm text-gray-500">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-6 bg-white rounded-xl p-6 shadow-lg transition-transform transform ">
          <h1 className="text-xl font-semibold text-gray-800 mb-4">
            Teacher&apos;s Schedule
          </h1>
          <div className="h-[670px] overflow-hidden rounded-lg border-2 border-gray-200 p-2">
            <BigCalendar />
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105">
          <h1 className="text-xl font-semibold text-gray-800 mb-4">
            Shortcuts
          </h1>
          <div className="flex gap-4 flex-wrap text-sm text-gray-700">
            <Link
              className="p-3 rounded-xl bg-[#3B82F6] text-white hover:bg-blue-600 transition"
              href="/"
            >
              Teacher&apos;s Classes
            </Link>
            <Link
              className="p-3 rounded-xl bg-[#FBBF24] text-gray-800 hover:bg-yellow-400 transition"
              href="/"
            >
              Teacher&apos;s Students
            </Link>
            <Link
              className="p-3 rounded-xl bg-[#3B82F6] text-white hover:bg-blue-600 transition"
              href="/"
            >
              Teacher&apos;s Lessons
            </Link>
            <Link
              className="p-3 rounded-xl bg-[#FBBF24] text-gray-800 hover:bg-yellow-400 transition"
              href="/"
            >
              Teacher&apos;s Exams
            </Link>
            <Link
              className="p-3 rounded-xl bg-[#3B82F6] text-white hover:bg-blue-600 transition"
              href="/"
            >
              Teacher&apos;s Assignments
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
