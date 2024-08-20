import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";

const TeacherPage = () => {
  return (
    <div className="flex-1 p-6 flex gap-6 flex-col xl:flex-row bg-gray-50 min-h-screen">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-6 rounded-2xl shadow-lg transition-transform duration-300 transform  hover:shadow-xl">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;
