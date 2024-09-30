import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://bistro-bosss.vercel.app'
})
const useAxiosPublic = () => {

    return axiosPublic
};

export default useAxiosPublic;