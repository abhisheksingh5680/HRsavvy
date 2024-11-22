import Sidebar from "../styles/Sidebar";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Panel from "../components/Panel";
import Announcement from "../components/Announcement";

const HomePage = () => {
  return (
    <div className="flex h-screen bg-indigo-500">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-row bg-white m-4 rounded-3xl">

        {/* Main Content */}
        <div className="w-10/12 flex flex-col rounded-3xl p-4">
          {/* Header */}
          <Header />
          {/* Dashboard Section */}
          <div className="flex px-4 overflow-hidden">
            <Dashboard />
          </div>
          {/* Announcements Section */}
          <div className="flex px-4 overflow-hidden">
            <Announcement />
          </div>
        </div>

        {/* Side Content */}
        <div className="w-5/12 flex flex-col rounded-e-3xl overflow-scroll bg-indigo-50 p-4">
          <Panel />
        </div>
      </div>

    </div>
  );
};

export default HomePage;
