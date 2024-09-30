import Swal from "sweetalert2";
import UseAxios from "../../useHook/UseAxios";
import UseCart from "../../useHook/UseCart";
import { Link } from "react-router-dom";
import SectionHead from "../../Pages/Shared/SectionHeading/SectionHead";
import { RiDeleteBin5Line } from "react-icons/ri";

const MyCart = () => {
    const [cart, refetch] = UseCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = UseAxios();

    const hndleDelet = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }
    return (
        <div className="">
            <div className="-mt-11 md:mt-11">
            <SectionHead  sectionPar='---Check it out---' sectionhead='MY CART'></SectionHead>
            </div>
            <div className="bg-white md:m-11 p-3 md:p-8">
                <div className="flex justify-between pb-3 md:py-11 ">
                    <h1 className="md:text-2xl text-sm font-semibold">TOTAL ORDERS : {cart.length}</h1>
                    <h1 className="md:text-2xl text-sm font-semibold">TOTAL PRICE : {totalPrice}</h1>
                    <Link className="bg-orange-400 text-white px-4 pt-[2px]" to='/userdashboard/payment'><button>Pay</button></Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-orange-400 text-white border-none">
                            <tr className="border-none ">
                                <th>No</th>
                                <th>img</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            cart.map((carts,index) => <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>{index+1}</th>
                                    <td><img className="w-[80px] " src={carts.image} alt="" /></td>
                                    <td>{carts.name}</td>
                                    <td>{carts.price}</td>
                                    <button className="mt-[19px] ml-6 bg-red-800 rounded-md h-[30px] w-[30px] text-white text-lg" onClick={() => hndleDelet(carts._id)}><td><RiDeleteBin5Line className="-mt-2 -ml-[10px]"/></td></button>
                                </tr>


                            </tbody>)
                        }

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;