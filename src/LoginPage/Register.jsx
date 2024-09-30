
import { Link } from 'react-router-dom';
import LoginImg from '../assets/others/authentication2.png'
import { useForm } from "react-hook-form"
import { useContext } from 'react';
import { AuthContext } from '../AuthProbider/AuthProvider';
import useAxiosPublic from '../useHook/useAxiosPublic';
import Swal from 'sweetalert2';


const Register = () => {

    const { createUser, googleCreateUser } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const userInfo = {

                    email: data.email,

                }
                console.log(result.user);
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log('user added sucessfull');
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Login Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            })
            .then(error => {
                console.error(error)
            })
    }

    const hndleGoogleRegister = () => {
        googleCreateUser()
            .then(result => {
                console.log(result.user);
                const userInfo = {

                    email: result.user.email,

                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {

                        if (res.data.insertedId) {
                            console.log('user added sucessfull');
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Login Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                
            })
            .then(error => {
                console.error(error)
            })
    }
    // watch input value by passing the name of it

    // const handleRegister = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(email, password);

    return (
        <div className="">
            <div className="loginBack h-[100vh]">
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left">

                            <p className="py-6">
                                <img src={LoginImg} alt="img" />
                            </p>
                        </div>
                        <div className="card  w-full max-w-sm shrink-0 ">
                            <h1 className="text-2xl text-center font-bold">Register now!</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <input {...register("name")} placeholder="name" className="input bg-white input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input {...register("photoUrl")} placeholder="photoUrl" className="input bg-white input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Email</span>
                                    </label>
                                    <input {...register("email")} placeholder="email" className="input bg-white input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input {...register("password", { required: true })} placeholder="password" className="input bg-white input-bordered" required />

                                </div>


                                <div className="form-control mt-6">
                                    <button className="btn btn-primary bg-orange-400 border-none text-white">Login</button>
                                </div>
                            </form>
                            <p>Your already account? <Link to='/login'>Register</Link></p>
                            <button onClick={hndleGoogleRegister} className="btn bg-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;