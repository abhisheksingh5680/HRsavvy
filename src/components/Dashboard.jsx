import { useState, useEffect } from 'react';
import Button from "./Button";
import sun from "../assets/sun.png"
import dev from "../assets/dev.png"
import report from "../assets/report.png"
import joini from "../assets/joini.png"
import joining from "../assets/joining.png"
const Dashboard = () => {

  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12; // Convert to 12-hour format
    hours = hours ? hours : 12; // 0 becomes 12
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes; // Leading zero for minutes
    return `${hours}:${minutesFormatted} ${ampm}`;
  };

  const formatDate = (dateObj) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' }; // Custom format
    return dateObj.toLocaleDateString('en-US', options);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      setTime(formatTime(currentTime));
      setDate(formatDate(currentTime));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    /* realtime insights */
    <div className="flex flex-col py-4  mb-4">
      <div className="flex gap-4 ">
        <div className='w-64 h-fit py-8 px-4 flex flex-col justify-between rounded-3xl border-2 border-deep-orange-500'>
          <div className='flex flex-row items-center justify-center mb-8'>
            <span className='mr-4'><img src={sun} alt="/" name="sun" /></span>
            <span className='flex flex-col'>
              <span className='text-3xl font-semibold'>{time}</span>
              <span className='text-sm font-normal'>Realtime Insight</span>
            </span>
          </div>
          <div>
            <p className='font-bold'>Today:</p>
            <p className='font-medium text-base'>{date}</p>
          </div>
          <div className='w-full flex justify-center'>
            <Button
              textColor="text-white"
              bgColor="bg-deep-orange-500"
              buttonText="View Attendance"
              additionalClasses="mt-5"
            />
          </div>
        </div>
        <div className='w-3/4'>
          <div className="grid grid-cols-2 gap-4">
            {/* Department */}
            <div className='bg-[#07092c]  text-white rounded-lg p-4'>
              <div className=" flex">
                <span className='mr-4'><div className='rounded-full bg-[#FFFFFF4D] w-10 h-10'><img src={dev} alt="/" name="sun" className='w-9 h-7' width={1000} height={1000} /></div></span>
                <h3 className="text-m font-bold mb-2">Department</h3>
              </div>
              <h1 className='mt-5 text-lg font-semibold'>Development</h1>
            </div>

            {/* Reports To */}
            <div className='bg-[#db2828]  text-white rounded-lg p-4'>
              <div className=" flex">
                <span className='mr-4'><div className='rounded-full bg-[#FFFFFF66] w-10 h-10'><img src={report} alt="/" name="sun" className='w-9 h-8' width={1000} height={1000} /></div></span>
                <h3 className="text-m font-semibold mb-2">Reports to</h3>
              </div>
              <h1 className='mt-5'>Shri Krishna Gupta</h1>
            </div>

            {/* Date Of Joining */}
            <div className='bg-[#07092c]  text-white rounded-lg p-4'>
              <div className=" flex">
                <span className='mr-4'><div className='flex items-center rounded-full bg-gray-600 w-10 h-10'><img src={joining} alt="/" name="sun" className='w-8 h-8' width={1000} height={1000} /></div></span>
                <h3 className="text-m font-semibold mb-2">Date Of Joining</h3>
              </div>
              <h1 className='mt-5'>12-Sep-2022</h1>
            </div>

            {/* Current Experience */}
            <div className='bg-[#db2828]  text-white rounded-lg p-4'>
              <div className=" flex">
                <span className='mr-4'><div className='rounded-full bg-gray-600 w-10 h-10'><img src={joini} alt="/" name="sun" className='w-9 h-8' width={1000} height={1000} /></div></span>
                <h3 className="text-m font-semibold mb-2">Current Experience</h3>
              </div>
              <h1 className='mt-5'>2.03 Years</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;




{/* <div className='rounded-full bg-gray-200 w-10 h-10'></div> */ }