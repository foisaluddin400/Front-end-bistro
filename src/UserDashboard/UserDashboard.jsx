import { Outlet } from "react-router-dom";
import UserNavbar from "./UserNavbar";

const UserDashboard = () => {
  return (
    <div>
      <div className="md:hidden block">
        <div className="">
          <div className="md:bg-orange-400 p-11 ">
            <UserNavbar></UserNavbar>
          </div>
          <div className="w-full md:bg-gray-100">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex">
          <div className="md:bg-orange-400 pl-4 pt-8 w-[300px] h-screen">
            <UserNavbar></UserNavbar>
          </div>
          <div className="w-full md:bg-gray-100">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
