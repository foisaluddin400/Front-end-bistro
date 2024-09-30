import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Contactus from "../Pages/Contactus/Contactus";

import MainDashboard from "../Dashboard/Maindashboard/MainDashboard";
import MainMenu from "../Menusection/MainMenu.jsx/MainMenu";
import MainOurShop from "../Our Shop/MainOurShop/MainOurShop";
import Login from "../LoginPage/Login";
import Register from "../LoginPage/Register";
import UserDashboard from "../UserDashboard/UserDashboard";
import UserHome from "../UserDashboard/UserSection/UserHome";
import MyCart from "../UserDashboard/UserSection/MyCart";
import { AdminUser } from "../UserDashboard/UserSection/AdminUser";
import AdminAddItems from "../UserDashboard/UserSection/AdminAddItems";
import { AdminRoutes } from "../PrivetRouter/AdminRoutes";
import AdminManageItem from "../UserDashboard/UserSection/AdminManageItem";
import UpdateMenu from "../UserDashboard/UserSection/UpdateMenu";
import Payment from "../UserDashboard/UserSection/Payment";
import PaymentHistory from "../UserDashboard/UserSection/PaymentHistory";
import AdminUserHome from "../UserDashboard/UserSection/AdminUserHome";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import ManageBooking from "../UserDashboard/UserSection/ManageBooking";
import UserReservetion from "../UserDashboard/UserReservetion";
import UserBooking from "../UserDashboard/UserSection/UserBooking";
import UserAddreview from "../UserDashboard/UserAddreview";
import ChatBox from "../Pages/Contactus/ChatBox";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>,

        },
        {
            path: '/contact',
            element: <Contactus></Contactus>,

        },
        {
          path: '/dashboard',
          element: <PrivetRouter><MainDashboard></MainDashboard></PrivetRouter>

        },
        {
          path:'/chatbox',
          element: <ChatBox></ChatBox>
        },
        {
          path: '/ourmenu',
          element: <MainMenu></MainMenu>

        },
        {
          path: '/ourshop/:category',
          element: <MainOurShop></MainOurShop>

        },
        {
          path: '/login',
          element: <Login></Login>

        },
        {
          path: '/register',
          element: <Register></Register>

        }
      ]
    },
    {
      path:'userdashboard',
      element:<UserDashboard></UserDashboard>,
      children:[
        {
          path:'cartsection',
          element: <MyCart></MyCart>
        },
        {
          path:'userhome',
          element: <UserHome></UserHome>
        },
        {
          path:'usermybooking',
          element: <UserBooking></UserBooking>
        },
        {
          path:'addreview',
          element: <UserAddreview></UserAddreview>
        },
        {
          path:'reservation',
          element: <UserReservetion></UserReservetion>
        },
        // admin user
        {
          path:'adminuser',
          element: <AdminRoutes><AdminUser></AdminUser></AdminRoutes>
        },
        
        {
          path:'adminbooking',
          element: <AdminRoutes><ManageBooking></ManageBooking></AdminRoutes>
        },
        {
          path:'adminuserhome',
          element: <AdminRoutes><AdminUserHome></AdminUserHome></AdminRoutes>
        },
        {
          path:'adminitems',
          element: <AdminRoutes><AdminAddItems></AdminAddItems></AdminRoutes>
        },
        {
          path:'adminmanage',
          element: <AdminRoutes><AdminManageItem></AdminManageItem></AdminRoutes>
        },
        {
          path:'updatemenu/:id',
          element: <AdminRoutes><UpdateMenu></UpdateMenu></AdminRoutes>,
          loader: ({params}) => fetch(`https://bistro-bosss.vercel.app/menu/${params.id}`)
        },
        {
          path:'payment',
          element: <Payment></Payment>
        },
        {
          path:'paymenthistory',
          element: <PaymentHistory></PaymentHistory>
        }
      ]
    }
  ]);
