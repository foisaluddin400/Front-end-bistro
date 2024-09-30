import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProbider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import UseCart from "../../../useHook/UseCart";
// import { UseAdmin } from '../../../useHook/UseAdmin';
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [cart] = UseCart();
//   const [isAdmin]=UseAdmin();
  const navOption = (
    <>
      
    </>
  );

  const hndleLogout = () => {
    logOut()
      .then(() => {
        alert("logout");
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="navbar fixed z-30 max-w-screen-xl text-white bg-[#00000041]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars className="text-[20px]"/>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold uppercase"
            >
              <li>
        <NavLink to="/">home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>

      {/* {
               user &&  isAdmin && <li className="flex"><NavLink to='/userdashboard/adminuserhome'>Dashboard</NavLink></li>
            }
            {
               user &&  !isAdmin && <li className="flex "><NavLink to='/userdashboard/userhome'>Dashboard</NavLink></li>
            } */}

      <li>
        <NavLink to="/ourmenu">Our menu</NavLink>
      </li>
      <li>
        <NavLink to="/ourshop/pizza">Our Shop</NavLink>
      </li>
              <Link to="/userdashboard/userhome">

                <li className="py-2 pl-2">Dashboard</li>
              
            </Link>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">FOODSHOP</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold uppercase">
          <li>
        <NavLink to="/">home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>

      {/* {
               user &&  isAdmin && <li className="flex"><NavLink to='/userdashboard/adminuserhome'>Dashboard</NavLink></li>
            }
            {
               user &&  !isAdmin && <li className="flex "><NavLink to='/userdashboard/userhome'>Dashboard</NavLink></li>
            } */}

      <li>
        <NavLink to="/ourmenu">Our menu</NavLink>
      </li>
      <li>
        <NavLink to="/ourshop/pizza">Our Shop</NavLink>
      </li>
      <li>
        <NavLink to="/chatbox">chat</NavLink>
      </li>

            
            
              <Link to="/userdashboard/userhome">

                <li className="py-2 pl-2">Dashboard</li>
              
            </Link>
            
          </ul>
        </div>
        <div className="navbar-end ">
          <Link to="/userdashboard/cartsection">
            <button className="bg-[#ffffff00] border-none p-1 mr-3">
              <div className="bg-green-700 w-[35px] h-[35px] flex items-center pl-[6px] rounded-full"><FaShoppingCart className=" text-white"/></div>
              <div className=" absolute w-[17px] h-[17px] bottom-3 ml-[20px] rounded-full text-[8px] bg-red-600 text-white pt-[3px]">+{cart.length}</div>
            </button>
          </Link>
          {user ? (
            <>
              <NavLink
                onClick={hndleLogout}
                className="btn bg-white border-none text-black"
              >
                {" "}
                LogOut
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="btn bg-white border-none text-black"
              >
                {" "}
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
