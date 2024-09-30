import { useContext } from "react";
import { AuthContext } from "../../AuthProbider/AuthProvider";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";



const UserHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <div>
            <div>
            
                
                <div className=" lg:m-auto m-5">
                <div className="card  ">
                            <figure className=" pt-10">
                            <div className="text-3xl ">
                                {
                                    user ? <>
                                        <img className="rounded-full" src={user.photoURL} alt="" />
                                    </> : <FaRegUserCircle className="text-zinc-400" />
                                }
                            </div>
                            </figure>
                            <div className="card-body items-center text-center">
                            {
                                user ? <>
                                    <h1 className="text-2xl mt-1 font-bold">{user.email}</h1>


                                </> : <Link to='/login'>No user name <button className="text-orange-500">Sign In</button></Link>
                            }

                                

                            </div>
                        </div>
                    

                    <div className="lg:p-8 p-4 lg:w-[80%] lg:m-auto items-center">

                        <div>
                            <div className="text-center mb-10]">
                                <h2 className="text-xl">User Update</h2>
                                <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
                            </div>
                            <form  className="mt-8">
                                <label className="text-gray-500" htmlFor="name">User Name</label>
                                <input className="w-[100%] p-1 bg-white" type="text" name="name" id="name" required />
                                <label className="mt-7 text-gray-500" htmlFor="email">Email</label>
                                <input className="w-[100%] p-1 bg-white" type="email" name="email" id="email" required />
                                <label className="text-gray-500" htmlFor="phone">Contact No.</label>
                                <input className="w-[100%] p-1 bg-white" type="text" name="phone" id="phone" required />
                                <label className="text-gray-500" htmlFor="password">Password</label>
                                <input className="w-[100%] p-1 bg-white" type="password" name="password" id="password" required />





                                <input className="mt-8 bg-orange-400 text-center text-white p-2 w-[100%]" type="submit" value="Submit" />
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default UserHome;