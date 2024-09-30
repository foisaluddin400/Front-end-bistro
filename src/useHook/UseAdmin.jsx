import { useContext } from "react"
import { AuthContext } from "../AuthProbider/AuthProvider"
import UseAxios from "./UseAxios";
import { useQuery } from "@tanstack/react-query";

// admin chek korar jonno 
export const UseAdmin = () => {

    const {user}= useContext(AuthContext);
    const axiosSecure = UseAxios();
    const {data : isAdmin , isPending:isAdminLoading} = useQuery({
        queryKey:[user?.email, 'isAdmin'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(res.data);
            return res.data?.admin;

        }
    })
  return [isAdmin, isAdminLoading]
}


