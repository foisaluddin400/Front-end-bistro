
import { useContext, useEffect, useState } from 'react';
import LoginImg from '../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProbider/AuthProvider';
import Swal from 'sweetalert2'

const Login = () => {
    
    const [disable, setDisable] = useState(true)
    const { SignInUser ,googleCreateUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    // eta hocce form capta korar jonno start

    useEffect(() => {
        loadCaptchaEnginge(5);
    }, [])
    const hndleCapta = (e) => {
        const user_captcha_value = e.target.value;

        if (validateCaptcha(user_captcha_value) == true) {

            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }
    // eta hocce form capta korar jonno end

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        SignInUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
            .then(error => {
                console.error(error)
            })
    }
    const hndleGoogleLogin =()=>{
        googleCreateUser()
        .then(result => {
            console.log(result.user);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            navigate(from, { replace: true });
        })
        .then(error => {
            console.error(error)
        })
    }
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
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <h1 className="text-2xl text-center font-bold">Login  now!</h1>
                                    <label className="label">
                                        <span className="label-text ">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input bg-white input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input bg-white input-bordered" required />

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>

                                    <input onBlur={hndleCapta} type="text" placeholder="typecapta" className="input bg-white input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button disabled={disable} className="btn btn-primary bg-orange-400 border-none text-white">Login</button>
                                </div>
                            </form>
                            <button onClick={hndleGoogleLogin} className="btn bg-white">
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
                            <p>Your No account? <Link to='/register'>Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;