import { useContext } from "react";
import { AuthContext } from "../../AuthProbider/AuthProvider";
import UseAxios from "../../useHook/UseAxios";
import { useQuery } from "@tanstack/react-query";

const AdminUserHome = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxios();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("admin-stats");
      return res.data;
    },
  });
  
  return (
    <div className="flex justify-center mt-13">
     
      
      <div className="stats shadow bg-green-900 text-white">
        <div className="stat place-items-center">
          <div className="stat-title">Revenue</div>
          <div className="stat-value">{stats.revenue}</div>
          
        </div>

        <div className="stat place-items-center ">
          <div className="stat-title">Orders</div>
          <div className="stat-value text-secondary">{stats.orders}</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Total Items</div>
          <div className="stat-value">{stats.menuItems}</div>
          
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Total Users</div>
          <div className="stat-value">{stats.users}</div>
          
        </div>
      </div>
    </div>
  );
};

export default AdminUserHome;
