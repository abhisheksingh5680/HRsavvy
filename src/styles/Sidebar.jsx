
import brandLogo from "../assets/brand-logo.png";
import "../styles/components/Sidebar.css";
import {
  Calendar,
  Settings,
  Home,
  Users,
  Clock,
  Shield,
  LogOut,

} from "lucide-react";
const Sidebar = () => {
  const menuItems = [
    { icon: <Home size={20} />, label: "Dashboard" },
    { icon: <Users size={20} />, label: "Switch Role" },
    { icon: <Calendar size={20} />, label: "Self-Services" },
    { icon: <Clock size={20} />, label: "Attendance" },
    { icon: <Shield size={20} />, label: "Leave" },
    { icon: <Clock size={20} />, label: "Punch" },
    { icon: <Users size={20} />, label: "On duty" },
  ];
  const profileMenuItems = [
    { icon: <Users size={20} />, label: "My Profile" },
    { icon: <Settings size={20} />, label: "Settings" },
    { icon: <LogOut size={20} />, label: "Sign out" },
  ];

  return (
    <div className="bg-indigo-500 text-white h-full w-64 min-w-56 flex flex-col py-4 pl-9 pr-4 text-sm overflow-scroll">
      <img src={brandLogo} alt="brand-logo" className='mt-4 mb-6'></img>
      <nav className="space-y-8">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center space-x-3 text-white/80 hover:text-white"
          >
            {item.icon}
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      <div className="mt-auto pt-8">
        {profileMenuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center space-x-3 text-white/80 hover:text-white mt-4"
          >
            {item.icon}
            <span>{item.label}</span>
          </a>
        ))}
      </div>

      {/* Footer */}

    </div>
  );
};

export default Sidebar;

















































//   <div className="py-3 sidebar-active">
// <Link to="/" className="hover:text-gray-300 flex justify-start items-center font-normal cursor-pointer">
//   <span className='mr-2'>{/* fa-icon */}<div className='rounded-full bg-gray-200 w-4 h-4'></div></span>
//   <span>Dashboard</span>
// </Link>
//       </div >
//       <div className="py-2">
//         <details className="group">
//           <summary className="flex justify-between items-center font-normal cursor-pointer">
//             <span className='flex justify-start items-center my-2'>
//               <span className='mr-2'>{/* fa-icon */}<div className='rounded-full bg-gray-200 w-4 h-4'></div></span>
//               <span>Switch Role</span>
//             </span>
//             <span className="transition group-open:rotate-180">
//               <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
//             </span>
//           </summary>
//         </details>
//       </div>
//       <div className="py-2">
//         <details className="group">
//           <summary className="flex justify-between items-center font-normal cursor-pointer list-none">
//             <span className='flex justify-start items-center'>
//               <span className='mr-2'>{/* fa-icon */}<div className='rounded-full bg-gray-200 w-4 h-4'></div></span>
//               <span>Self-Services</span>
//             </span>
//             <span className="transition group-open:rotate-180">
//               <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
//             </span>
//           </summary>
//           {/* Menu Items */}
//           <ul className="flex-1 my-4 font-light">
//             {menuItems.map((item, index) => (
//               <li key={index} className="py-1 px-3">
//                 <Link to={item.path} className="hover:text-gray-300 text-xs">
//                   - {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </details>
//       </div>



















// {/* <div className="mt-auto my-3">
//   <div className="py-3">
//     <Link to="/profile" className="hover:text-gray-300 flex justify-start items-center font-normal cursor-pointer">
//       <span className='mr-2'>{/* fa-icon */}<div className='rounded-full bg-gray-200 w-4 h-4'></div></span>
//       <span>My Profile</span>
//     </Link>
//   </div>
//   <div className="py-3">
//     <Link to="/settings" className="hover:text-gray-300 flex justify-start items-center font-normal cursor-pointer">
//       <span className='mr-2'>{/* fa-icon */}<div className='rounded-full bg-gray-200 w-4 h-4'></div></span>
//       <span>Settings</span>
//     </Link>
//   </div>
//   <div className="py-3">
//     <Link to="/logout" className="hover:text-gray-300 flex justify-start items-center font-normal cursor-pointer">
//       <span className='mr-2'>{/* fa-icon */}<div className='rounded-full bg-gray-200 w-4 h-4'></div></span>
//       <span>Sign out</span>
//     </Link>
//   </div>
// </div> */}