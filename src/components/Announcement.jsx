import speaker from "../assets/speaker.png"
import thought from "../assets/thought.png"
const Announcement = () => {
  const announcements = [
    {
      title: 'Thought of the Day',
      content:
        'When you make a mistake, don’t look back at it long. Take the reason of the thing into your mind and then look forward. Mistakes are lessons of wisdom. The past cannot be changed. The future is yet in your power.',
    },
    {
      title: 'Quote',
      content:
        'A strong, positive self-image is the best possible preparation for success.',
    },
  ];

  return (
    <div className="p-8 border-2 border-gray-300 rounded-3xl">
      <div className="w-full flex flex-row justify-start items-center mb-8">
        <div className="w-1/2 flex flex-row justify-start items-center">
          <span className="mr-4"><div className='rounded-lg bg-[#FF001D14] w-12 h-12'>
            <img src={speaker} alt="/" name="sun" className='w-11 h-10' width={1000} height={1000} />  </div></span>
          <p className="font-semibold text-xl">Announcements</p>
        </div>
        <div className="w-1/2 flex flex-row justify-start items-center">
          <span className="mr-4"><div className='rounded-lg bg-gray-200 w-12 h-12'>
            <img src={thought} alt="/" name="sun" className='w-11 h-10' width={1000} height={1000} /></div></span>
          <p className="font-semibold text-xl text-indigo-500">Thought of the day</p>
        </div>
      </div>
      {announcements.map((announcement, index) => (
        <div key={index} className="pb-4 mb-4 border-b-2 border-gray-100 last-of-type:border-0 last-of-type:pb-0 last-of-type:mb-0">
          <p className="text-sm font-medium text-gray-700">{announcement.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Announcement;
