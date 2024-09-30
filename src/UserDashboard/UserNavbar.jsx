import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { UseAdmin } from "../useHook/UseAdmin";
import { FaBars } from "react-icons/fa";
const UserNavbar = () => {
    const [isAdmin] = UseAdmin();
    return (
        <div>


<div className="md:hidden block ">
<div className="drawer z-30">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn rounded-full bg-green-600 border-none text-white -ml-5 -mt-4 btn-primary drawer-button fixed"><FaBars /></label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu text-black bg-orange-400 text-base-content min-h-full w-80 p-4 ">
      {/* Sidebar content here */}
      <h2 className="text-[18px] font-bold">FOODSHOP</h2>
            <p>R E S T A U R A N T</p>
            <div className="">
                {
                    isAdmin ? <>
                    <ul className="">
                <li className=" "><IoMdHome className=""/><NavLink to='/userdashboard/adminuserhome'>ADMIN HOME</NavLink></li>
                <li className=" "><IoMdHome className=""/><NavLink to='/userdashboard/adminitems'>ADD ITEMS</NavLink></li>
                <li className=" "><IoMdHome className=""/><NavLink to='/userdashboard/adminmanage'>MANAGE ITEMS</NavLink></li>
                <li className=" "><IoMdHome className=""/><NavLink  to='/userdashboard/adminbooking'>MANAGE BOOKING</NavLink></li>
                <li className=" "><IoMdHome className=" "/><NavLink to='/userdashboard/adminuser'>ALL USER</NavLink></li>
                </ul>

                    </>:
                    <>
                    <ul className="">
                <li className="flex "><IoMdHome className=""/><NavLink to='/userdashboard/userhome'>USER HOME</NavLink></li>
                <li className="flex -my-4"><IoMdHome className=""/><NavLink to='/userdashboard/reservation'>RESERVATION</NavLink></li>
                <li className="flex -my-4"><IoMdHome className=" "/><NavLink to='/userdashboard/paymenthistory'>PAYMENT HISTORY</NavLink></li>
                <li className="flex -my-4"><IoMdHome className=""/><NavLink  to='/userdashboard/cartsection'>MY CART</NavLink></li>
                <li className="flex -my-4"><IoMdHome className=" "/><NavLink to='/userdashboard/addreview'>ADD REVIEW</NavLink></li>
                <li className="flex -my-4"><IoMdHome className=" "/><NavLink to='/userdashboard/usermybooking'>MY BOOKING</NavLink></li>
                </ul>
                    </>
                }
                <br />
                <hr />
                <ul className="">
                <li className="flex -my-4"><IoMdHome className=" "/><NavLink to='/'>HOME</NavLink></li>
                <li className="flex -my-4"><IoMdHome className=" "/><NavLink to='/ourmenu'>MENU</NavLink></li>
                <li className="flex -my-4"><IoMdHome className=" "/><NavLink to='/ourshop/pizza'>SHOP</NavLink></li>
                <li className="flex -my-4"><IoMdHome className=" "/><NavLink to='/contact'>CONTACT</NavLink></li>
                
                </ul>
            </div>
    </ul>
  </div>
</div>

</div>





            <div className="hidden md:block">
            <h2 className="text-[18px] font-bold">FOODSHOP</h2>
            <p>R E S T A U R A N T</p>
            <div className="pt-6">
                {
                    isAdmin ? <>
                    <ul className="">
                <li className="flex py-2"><IoMdHome className="text-3xl mr-2"/><NavLink to='/userdashboard/adminuserhome'>ADMIN HOME</NavLink></li>
                <li className="flex py-2"><IoMdHome className="text-3xl mr-2"/><NavLink to='/userdashboard/adminitems'>ADD ITEMS</NavLink></li>
                <li className="flex py-2"><IoMdHome className="text-3xl mr-2"/><NavLink to='/userdashboard/adminmanage'>MANAGE ITEMS</NavLink></li>
                <li className="flex py-2"><IoMdHome className="text-3xl mr-2"/><NavLink className='active' to='/userdashboard/adminbooking'>MANAGE BOOKING</NavLink></li>
                <li className="flex py-2"><IoMdHome className="text-3xl mr-2"/><NavLink to='/userdashboard/adminuser'>ALL USER</NavLink></li>
                </ul>

                    </>:
                    <>
                    <ul className="">
                <li className="flex py-2"><IoMdHome className="text-3xl mr-2"/><NavLink to='/userdashboard/userhome'>USER HOME</NavLink></li>
                <li className="flex py-2"><IoMdHome className="text-3xl mr-2"/><NavLink to='/userdashboard/reservation'>RESERVATION</NavLink></li>
                <li className="flex py-2"><IoMdHome className="text-3xl mr-2"/><NavLink to='/userdashboard/paymenthistory'>PAYMENT HISTORY</NavLink></li>
                <li className="flex py-2"><IoMdHome className="text-3xl mr-2"/><NavLink className='active' to='/userdashboard/cartsection'>MY CART</NavLink></li>
                <li className="flex py-2"><IoMdHome className="text-3xl mr-2"/><NavLink to='/userdashboard/addreview'>ADD REVIEW</NavLink></li>
                <li className="flex py-2"><IoMdHome className="text-3xl mr-2"/><NavLink to='/userdashboard/usermybooking'>MY BOOKING</NavLink></li>
                </ul>
                    </>
                }
                <hr />
                <ul className="">
                <li className="flex py-2"><IoMdHome className="text-3xl mr-2"/><NavLink to='/'>HOME</NavLink></li>
                <li className="flex py-2"><IoMdHome className="text-3xl mr-2"/><NavLink to='/ourmenu'>MENU</NavLink></li>
                <li className="flex py-2"><IoMdHome className="text-3xl mr-2"/><NavLink to='/ourshop/pizza'>SHOP</NavLink></li>
                <li className="flex py-2"><IoMdHome className="text-3xl mr-2"/><NavLink to='/contact'>CONTACT</NavLink></li>
                
                </ul>
            </div>
            </div>
        </div>
    );
};

export default UserNavbar;