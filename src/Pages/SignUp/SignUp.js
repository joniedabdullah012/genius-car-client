import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { setAuthToken } from '../../api/Auth';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);



    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;



        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setAuthToken(user)
            })
            .catch(err => console.error(err));


    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt=""></img>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-20 py-20">
                    <h1 className=" text-center text-5xl font-bold">Sign Up</h1>

                    <form onSubmit={handleSignup} className="card-body">


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="your name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="your email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />

                        </div>
                    </form>

                    <p className='text-center'>Already have anaccount ??<Link className='text-orange-600 font-bold' to='/login'>Log in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;