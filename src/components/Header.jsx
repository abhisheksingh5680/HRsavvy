import darkmode from "../assets/darkmode.png"
const Header = () => {
  return (
    <header className="p-4 flex items-center justify-between">
      {/* Welcome Text */}
      <div>
        <h1 className="text-2xl font-semibold">Good Morning, Meghna !</h1>
        <p className="text-sm text-gray-500 my-1">Welcome back to <b>Savvy HRMS</b> ! Here`s your dashboard overview.</p>
      </div>

      {/* theme-mode switch */}
      <div className="flex items-center gap-4">
        {/* switch-toggle */}
        <div className='rounded-full  w-10 h-10'>
          <img src={darkmode} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
