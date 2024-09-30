import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";
import { useContext } from "react";
import { AuthContext } from "../AuthProbider/AuthProvider";


const UseCart = () => {
    //eti hocce add to cart korar jonno 
    //tan stack query website theke korce
    const axiosSecure = UseAxios();
    const{user}=useContext(AuthContext)
    const {refetch, data: cart=[]}= useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
    return [cart,refetch] // eti navbar e giyece
};

export default UseCart;