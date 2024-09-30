import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const Usehook = () => {
    const axiosPublic = useAxiosPublic();

    // useQuery hook for fetching menu data
    const { data: menu = [], isLoading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu');
            return res.data;
        },
        onError: (err) => {
            console.error("Error fetching menu:", err); // Error handling
        }
    });

    // Returning menu data, loading state, refetch function, and error
    return [menu, isLoading, refetch];
};

export default Usehook;