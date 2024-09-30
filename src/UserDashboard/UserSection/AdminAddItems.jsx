import { useForm } from "react-hook-form";
import SectionHead from "../../Pages/Shared/SectionHeading/SectionHead";
import useAxiosPublic from "../../useHook/useAxiosPublic";
import UseAxios from "../../useHook/UseAxios";

// eti hocce ekti img er url bananor jonno 1st-step imgbb api website theke
const image_hosting_key = import.meta.env.VITE_IMGBB;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AdminAddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = UseAxios();

  const onSubmit = async (data) => {
    console.log(data);
    //image upload to imgbb
    const imgFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imgFile, {
      headers: {
        "Content-Type": "multipart/form-data",
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
      await axiosSecure.post("/menu", menuItem).then((res) => {
        // if (res.data.modifiedCount > 0) {
        //   refetch();
        //   Swal.fire({
        //     position: "top-end",
        //     icon: "success",
        //     title: "Your work has been saved",
        //     showConfirmButton: false,
        //     timer: 1500
        //   });

        // }
        console.log(res.data);
      });
    }
  };

  return (
    <div>
      <SectionHead
        sectionPar="---Whats new---"
        sectionhead="ADD IN ITEMS"
      ></SectionHead>

      <div className="">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#F3F3F3] py-20 px-10 space-y-5 "
        >
          <div>
            {" "}
            <label htmlFor="name">Product Title</label>
            <input
              className=" bg-white w-full p-2 rounded-md outline-none border "
              {...register("name")}
              placeholder="Enter Your Phonr number"
            />
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-10">
            <div>
              {" "}
              <label htmlFor="Price">Price</label> <br />
              <input
                className="bg-white w-full p-2 rounded-md outline-none border "
                {...register("price")}
              />
            </div>
            <div>
              <label htmlFor="Name">Name*</label> <br />
              <select
                className="bg-white w-full p-2 rounded-md outline-none border "
                
                {...register("catagory")}
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
            <label htmlFor="description">Description</label>

            <textarea
              className="outline-none p-2 rounded-md w-[100%] h-[100px] bg-white"
              {...register("recipe")}
              placeholder="Product Description"
            ></textarea>
            <input
              type="file"
              className="file-input w-full max-w-xs mt-5"
              {...register("image")}
            />

            <div className=" mt-8">
              <input
                className="bg-orange-700 text-white btn"
                type="submit"
                value="Add Items"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AdminAddItems;
