// import Button from "./Button";

// const Calendar = () => {
//   return (
//     <div className="m-4 px-8 py-8 flex flex-col flex-1 bg-white rounded-3xl ">
//       <div className="flex flex-row justify-start items-center">
//         <Button 
//           textColor="text-gray-800" 
//           bgColor="bg-green-100" 
//           buttonText="Attendance"
//           additionalClasses="border-2 border-green-200 mr-3"
//         />
//         <Button 
//           textColor="text-red-800" 
//           bgColor="bg-red-100" 
//           buttonText="Upcoming Holidays"
//           additionalClasses="border-2 border-red-200"
//         />
//       </div>
//       {/* Calendar Section */}

//       {/* Placeholder for a calendar */}
//       <div className="bg-gray-100 p-4 my-6 rounded-lg text-center">[Calendar Placeholder]</div>

//       {/* Holidays Section */}
//     </div>
//   );
// };

// export default Calendar;




import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
  // Sample calendar data
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  // Holiday data
  const holidays = [
    { date: '15 August', name: 'Independence Day' },
    { date: '19 August', name: 'Raksha Bandhan' }
  ];

  // Helper function to check if a day is a holiday
  const isHoliday = (day) => [15, 19].includes(day);

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm max-w-md">
      {/* Toggle buttons */}
      <div className="flex gap-2 mb-4">
        <button className="px-4 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
          Attendance
        </button>
        <button className="px-4 py-1 rounded-full bg-red-100 text-red-600 text-sm font-medium">
          Upcoming Holidays
        </button>
      </div>

      {/* Calendar header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">August, 2024</h2>
        <div className="flex gap-2">
          <button className="p-1 hover:bg-gray-100 rounded-full">
            <ChevronLeft size={20} />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-full">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Calendar grid */}
      <div className="mb-6">
        {/* Week days header */}
        <div className="grid grid-cols-7 mb-2">
          {weekDays.map((day) => (
            <div
              key={day}
              className="text-center text-sm font-medium text-gray-500"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-1">
          {/* Empty cells for days before August 1st */}
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={`empty-${index}`} className="h-8" />
          ))}

          {/* Actual days */}
          {days.map((day) => (
            <div
              key={day}
              className={`h-8 flex items-center justify-center text-sm rounded-full
                ${isHoliday(day)
                  ? 'bg-red-500 text-white'
                  : 'hover:bg-gray-100'}`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>

      {/* Holidays section */}
      <div>
        <h3 className="font-semibold mb-3">Holidays</h3>
        <div className="space-y-2">
          {holidays.map((holiday) => (
            <div
              key={holiday.date}
              className="flex justify-between items-center text-sm"
            >
              <span className="text-gray-600">{holiday.date}</span>
              <span className="text-red-500 font-medium">{holiday.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;