import { useContext } from "react";
import { AuthContext } from "../../AuthProbider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxios from "../../useHook/UseAxios";
import UseCart from "../../useHook/UseCart";

const ShopCarts = ({ cheeps }) => {
  const { image, recipe, price, name, category, _id } = cheeps;
  const [, refetch] = UseCart();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const axiosSecure = UseAxios();

  //addto cart korar jonno eti navbar e giye dekhabe
  const hndleAddcart = (food) => {
    console.log(food);

    //jodi user and email thake tahole
    if (user && user.email) {
      //jodi user and email thake tahole serbver e add to cart er information gula pathabo
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} Successfully add`,
            showConfirmButton: false,
            timer: 1500,
          });
          //refresh korle jate cart add nh hoy tai eta kora hocce
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "tmi login korte caw?",
        text: "tmr login nai",
        icon: "warning",
        showCancelButton: true,

        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sure!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="bg-zinc-100 m-5 h-[450px] ">
        <div className="relative">
          <img className="w-[100%]" src={image} alt="img" />
          <div className="flex justify-end">
          <p className="py-1 w-[60px] border-none text-center text-xl bg-orange-500 text-white  absolute top-0 ">${price}</p>
          </div>
        </div>
        <div className="p-5 text-center">
          <h1 className="text-[22px] font-semibold">{name}</h1>
          <p className="py-3 text-sm">{recipe}</p>

          <p className="py-3 text-sm font-bold">{category}</p>
          <button
            onClick={() => hndleAddcart(cheeps)}
            className="btn bg-yellow-600 text-white border-none"
          >
            Add To cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCarts;
