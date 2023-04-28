/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomInput from '../../components/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

import { loginUser } from '../../features/user/useSlide';
import google from '../../images/google.png';
import Meta from '../../components/Meta';

import login from '../../images/auth/login.png';
import Header from './header';
import Footer from './../../components/Footer';

const loginSchema = yup.object({
    email: yup.string().email('Email Should Be Valid').required('Email Address is Required'),
    password: yup.string().required('Password No is Required'),
});

const LoginTest = () => {
    const authState = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [password, setPassword] = useState(true);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            dispatch(loginUser(values));
        },
    });

    useEffect(() => {
        if (authState.user !== null && authState.isError === false) {
            navigate('/');
        }
    }, [authState]);

    const clientId = '387544023335-7r4dbg893fk5otknebjthiv1n0r2mfad.apps.googleusercontent.com';
    useEffect(() => {
        gapi.load('client:auth2', () => {
            gapi.auth2.init({ clientId: clientId });
        });
    }, []);

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    const googleFailure = (error) => {
        console.log(error);
        console.log('Google Sign In was unsuccessful. Try Again Later');
    };

    return (
        <>
            <Meta title="Login" />
            <Header title="Log In" />
            <div className="bg-white">
                <div className="w-full flex items-center justify-center py-5">
                    <div className="w-[70%] flex justify-between max-lg:w-[90%]">
                        <div className="w-[40%] flex items-center max-lg:w-[48%] max-sm:hidden">
                            <img src={login} alt="login-images" />
                        </div>
                        <div className="w-[42%] bg-white border-[1px] border-[#131921] dark:border-[#2dc26d]  rounded-lg p-[25px] max-lg:w-[48%] max-sm:w-full">
                            <div className="pt-2 pb-4 text-center">
                                <h2 className="text-black text-[45px]">Log In</h2>
                            </div>
                            <form action="" onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
                                <div>
                                    <CustomInput
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        onChange={formik.handleChange('email')}
                                        onBlur={formik.handleBlur('email')}
                                        value={formik.values.email}
                                        classes={formik.values.email ? 'valid' : 'invalid'}
                                    />
                                    <div className="error">{formik.touched.email && formik.errors.email}</div>
                                </div>
                                <div>
                                    <CustomInput
                                        type={password ? 'password' : 'text'}
                                        name="password"
                                        placeholder="Password"
                                        onChange={formik.handleChange('password')}
                                        onBlur={formik.handleBlur('password')}
                                        value={formik.values.password}
                                        classes={formik.values.password ? 'valid' : 'invalid'}
                                        iconEye={password ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                        onClickHandleEye={() => setPassword(!password)}
                                    />
                                    <div className="error">{formik.touched.password && formik.errors.password}</div>
                                </div>
                                <div>
                                    <div>
                                        <button
                                            className="bg-regal-light dark:bg-regal-dark-500 w-full py-[12px] font-[18px] cursor-pointer rounded text-white hover:opacity-95"
                                            type="submit"
                                        >
                                            LOGIN
                                        </button>
                                    </div>
                                    <Link
                                        to="/forgot-password"
                                        className="text-black py-3 text-center w-full hover:text-[#bf4800]"
                                    >
                                        <p>Forgot Password</p>
                                    </Link>
                                    <div className="flex items-center px-3">
                                        <div className="h-[1px] w-full bg-slate-200 flex-1"></div>
                                        <span>Or</span>
                                        <div className="h-[1px] w-full bg-slate-200 flex-1"></div>
                                    </div>
                                    <GoogleLogin
                                        clientId={clientId}
                                        render={(renderProps) => (
                                            <div
                                                className="flex items-center justify-center p-2 my-3 border-[1px] border-[#ccc] cursor-pointer rounded-xl"
                                                onClick={renderProps.onClick}
                                                disabled={renderProps.disabled}
                                            >
                                                <img src={google} alt="images" className="h-[30px]" />
                                                <span className="ml-2">SIGN UP WITH GOOGLE</span>
                                            </div>
                                        )}
                                        onSuccess={googleSuccess}
                                        onFailure={googleFailure}
                                        cookiePolicy="single_host_origin"
                                    />

                                    <div className="flex items-center justify-center py-2">
                                        <span>Already have an account? </span>
                                        <Link to="/signup" className="ml-2 text-[#bf4800]">
                                            Signup
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer footerBtn={false} />
        </>
    );
};

export default LoginTest;
