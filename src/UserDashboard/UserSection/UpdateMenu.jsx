import { useForm } from "react-hook-form";
import SectionHead from "../../Pages/Shared/SectionHeading/SectionHead";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import UseAxios from "../../useHook/UseAxios";
import useAxiosPublic from "../../useHook/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMGBB;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateMenu = () => {
    const loader = useLoaderData();
    const { name, category, price, _id } = loader;
    console.log(loader)
    
    console.log(loader)
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = UseAxios();

    const onSubmit = async (data) => {
        console.log(data);
        // ছবি আপলোড করা হচ্ছে imgbb তে
        const imgFile = { image: data.image[0]};
        const res = await axiosPublic.post(image_hosting_api, imgFile, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log(res.data);
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                price: parseFloat(data.price),
                category: data.category, // এখানে 'category' এ ভুল ছিল 'cetagory'
                recipe: data.recipe,
                image: res.data.data.display_url,
            };
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "আপনার কাজ সংরক্ষণ করা হয়েছে",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        }
    };

    return (
        <div>
            <SectionHead sectionPar='---Whats new---' sectionhead='UPDATE ITEMS'></SectionHead>
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-[#F3F3F3] py-20 px-10 space-y-5 ">
                    <div>
                        <label htmlFor="name">পণ্য শিরোনাম</label>
                        <input
                            className="bg-white w-full p-2 rounded-md outline-none border "
                            defaultValue={name}
                            {...register("name")}
                            
                        />
                    </div>
                    <div className="grid lg:grid-cols-2 lg:gap-10">
                        <div>
                            <label htmlFor="Price">মূল্য</label>
                            <input
                                className="bg-white w-full p-2 rounded-md outline-none border "
                                defaultValue={price}
                                {...register("price")}
                            />
                        </div>
                        <div>
                            <label htmlFor="Name">শ্রেণী*</label>
                            <select
                                className="bg-white w-full p-2 rounded-md outline-none border "
                                defaultValue={category}
                                {...register("category")}
                            >
                                <option value="salad">সলাদ</option>
                                <option value="dessert">ডেজার্ট</option>
                                <option value="soup">সুপ</option>
                                <option value="drinks">পানীয়</option>
                                <option value="pizza">পিজ্জা</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="recipe">বিবরণ</label>
                        <textarea
                            className="outline-none p-2 rounded-md w-[100%] h-[100px] bg-white"
                            {...register("recipe")}
                            
                        ></textarea>
                        <input type="file" className="file-input w-full max-w-xs mt-5" {...register("image")} />
                        <div className="mt-8">
                            <input className="bg-orange-700 text-white btn" type="submit" value='আইটেম আপডেট করুন' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateMenu;
