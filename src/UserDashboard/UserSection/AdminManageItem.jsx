import Swal from "sweetalert2";
import SectionHead from "../../Pages/Shared/SectionHeading/SectionHead";
import Usehook from "../../useHook/Usehook";
import UseAxios from "../../useHook/UseAxios";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
const AdminManageItem = () => {
  const [menu, isLoading, refetch] = Usehook();
  const axiosSecure = UseAxios();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "আপনি কি নিশ্চিত?",
      text: "আপনি এটি ফিরে পাবেন না!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "হ্যাঁ, মুছুন!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        if (res.data.deletedCount > 0) {
          // UI আপডেট করার জন্য পুনরুদ্ধার করুন
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} মুছে ফেলা হয়েছে`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div>
      <div className="-mt-14 md:mt-14">
      <SectionHead  sectionPar="---HURRY---" sectionhead="MANAGE ITEM" />
      </div>
      {/* <h2>TOTAL ITEM: {menu.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                
                                <th>নাম</th>
                                <th>শ্রেণী</th>
                                <th>রেসিপি</th>
                                <th>মূল্য</th>
                                <th>কার্যক্রম</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menu.map((item) => (
                                <tr key={item._id}>
                                    
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img src={item.image} alt={item.name} className="object-cover" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>
                                                <div className="text-sm opacity-50">{item.category}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.recipe}</td>
                                    <td>
                                        <span className="badge badge-ghost badge-sm">{item.price}</span>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteItem(item)} className="btn btn-sm btn-error">
                                            মুছুন
                                        </button>
                                    </td>
                                    <td>
                                        <Link to={`/userdashboard/updatemenu/${item._id}`}>আপডেট করুন</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div> */}

      <div>
        <div className="bg-white md:m-11 p-3 md:p-8">
          <div className="pb-3 md:py-11 ">
            <h1 className="md:text-2xl text-sm font-semibold">
              TOTAL ORDERS : {menu.length}
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="grid md:grid-cols-12 bg-orange-400 text-white border-none px-8 py-2">
              <h1 className="md:col-span-1 ">No</h1>
              <h1 className="md:col-span-1">Image</h1>
              <h1 className="md:col-span-4"></h1>
              <h1 className="md:col-span-2">Category</h1>
              <h1 className="md:col-span-2">Price</h1>
              <h1 className="md:col-span-1">Edit</h1>
              <h1 className="md:col-span-1">Delet</h1>
            </div>
            {menu.map((item, index) => (
              <div className="px-8 border border-b-gray-200" key={item._id}>
                {/* row 1 */}
                <p className="grid md:grid-cols-12">
                  <p className="md:col-span-1 col-span-1 py-3 mt-[8px]">
                    {index + 1}
                  </p>
                  <p className="md:col-span-1 col-span-1  py-3">
                    <img className="md:w-[80px] " src={item.image} alt="" />
                  </p>
                  <p className="md:col-span-4 col-span-1  py-3 pl-4 mt-[8px]">
                    {item.name}
                  </p>
                  <p className="md:col-span-2 col-span-1  py-3 mt-[8px]">
                    {item.category}
                  </p>
                  <p className="md:col-span-2  py-3 mt-[8px] ">{item.price}</p>
                  <Link
                    to={`/userdashboard/updatemenu/${item._id}`}
                    className="mt-[19px] py-3 col-span-1 text-end bg-red-800 rounded-md h-[30px] w-[30px] text-white text-lg"
                  >
                    <p>
                      <FaRegEdit className="ml-[5px] -mt-[6px]" />
                    </p>
                  </Link>
                  <button
                    className="mt-[19px]  bg-red-800 rounded-md h-[30px]  col-span-1 py-3 w-[30px] text-end text-white text-lg"
                    onClick={() => handleDeleteItem(item)}
                  >
                    <p>
                      <RiDeleteBin5Line className=" ml-[5px] -mt-[6px]" />
                    </p>
                  </button>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden block -mt-2">
          <div className="">
            

            <div>
              <div className=" bg-orange-400 text-white border-none px-8 py-2 text-center">
                <h1 className="">ITEMES</h1>
              </div>
              {menu.map((item, index) => (
                <div className=" p-2 border border-b-gray-200" key={item._id}>
                  {/* row 1 */}
                  <p className="">
                    <p className="">{index + 1}</p>
                    <div className="grid grid-cols-3">
                      <p className="col-span-1">
                        <img className="" src={item.image} alt="" />
                      </p>
                      <div className="col-span-2 -mt-3 pl-3">
                        <p className="  ">
                          <span className="font-semibold">Name :</span>{" "}
                          {item.name}
                        </p>
                        <p className="">
                          <span className="font-semibold">Category :</span>{" "}
                          {item.category}
                        </p>
                        <p className="    ">
                          <span className="font-semibold">Price :</span>{" "}
                          {item.price}
                        </p>
                        <button className="bg-red-800 rounded-md h-[25px]  col-span-1 w-[25px] text-end text-white text-lg">
                          <Link
                            to={`/userdashboard/updatemenu/${item._id}`}
                            className="   "
                          >
                            <FaRegEdit className="ml-[5px] -mt-[3px]" />
                          </Link>
                        </button>
                        <button
                          className=" ml-1 bg-red-800 rounded-md h-[25px]  col-span-1 w-[25px] text-end text-white text-lg"
                          onClick={() => handleDeleteItem(item)}
                        >
                          <p>
                            <RiDeleteBin5Line className=" ml-[3px] -mt-[3px]" />
                          </p>
                        </button>
                      </div>
                    </div>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminManageItem;
