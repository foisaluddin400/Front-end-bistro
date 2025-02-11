import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProbider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: 'https://bistro-bosss.vercel.app/'
})
const UseAxios = () => {
    const navigate = useNavigate()
    const {logOut}= useContext(AuthContext);
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptoes', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function(error){
        return Promise.reject(error);
    })
    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async(error)=>{
        const status = error.response.status;
        // console.log('status error in the intercept', error)
        //401 403 jodi nah hoy tahole login page e pathai dibe

        if(status === 401 || status === 403){
            await logOut();
            navigate('/login')
        }
        return Promise.reject(error);

    })
    return axiosSecure
};

export default UseAxios;