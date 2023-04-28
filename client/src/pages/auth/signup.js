/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import CustomInput from './../../components/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../features/user/useSlide';
import Meta from '../../components/Meta';

import signup from '../../images/auth/signup.png';
import { useState } from 'react';
import Header from './header';
import Footer from '../../components/Footer';

const signUpSchema = yup.object({
    firstname: yup.string().required('First Name is Required'),
    lastname: yup.string().required('Last Name is Required'),
    email: yup.string().email('Email Should Be Valid').required('Email Address is Required'),
    mobile: yup.string().required('Mobile No is Required'),
    password: yup.string().required('Password No is Required'),
});

const SignupTest = () => {
    const authState = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [password, setPassword] = useState(true);

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            password: '',
        },
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            dispatch(registerUser(values));
        },
    });

    useEffect(() => {
        if (authState.createdUser !== null && authState.isError === false) {
            navigate('/login');
        }
    }, [authState]);

    return (
        <>
            <Meta title="Sign Up" />
            <Header title="REGISTER" />
            <div className="bg-white ">
                <div className="w-full flex items-center justify-center py-5">
                    <div className="w-[70%] flex  justify-between  max-lg:w-[90%]">
                        <div className="w-[40%] flex items-center max-lg:w-[48%] max-sm:hidden">
                            <img src={signup} alt="login-images" />
                        </div>
                        <div className="w-[42%] bg-white border-[1px] border-[#131921] dark:border-[#2dc26d]  rounded-lg p-[25px] max-lg:w-[48%] max-sm:w-full">
                            <div className="pt-2 pb-2 text-center">
                                <h2 className="text-black text-3xl">Hi 👋</h2>
                                <span className="text-black text-lg">Let’s setup you account real quick</span>
                            </div>

                            <form action="" onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
                                <div>
                                    <CustomInput
                                        type="text"
                                        name="firstname"
                                        placeholder="First Name"
                                        value={formik.values.firstname}
                                        onChange={formik.handleChange('firstname')}
                                        onBlur={formik.handleBlur('firstname')}
                                        classes={formik.values.firstname ? 'valid' : 'invalid'}
                                    />
                                    <div className="error">{formik.touched.firstname && formik.errors.firstname}</div>
                                </div>
                                <div>
                                    <CustomInput
                                        type="text"
                                        name="lastname"
                                        placeholder="Last Name"
                                        value={formik.values.lastname}
                                        onChange={formik.handleChange('lastname')}
                                        onBlur={formik.handleBlur('lastname')}
                                        classes={formik.values.lastname ? 'valid' : 'invalid'}
                                    />
                                    <div className="error">{formik.touched.lastname && formik.errors.lastname}</div>
                                </div>
                                <div>
                                    <CustomInput
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange('email')}
                                        onBlur={formik.handleBlur('email')}
                                        classes={formik.values.email ? 'valid' : 'invalid'}
                                    />
                                    <div className="error">{formik.touched.email && formik.errors.email}</div>
                                </div>

                                <div>
                                    <CustomInput
                                        type="tel"
                                        name="mobile"
                                        placeholder="Mobile Number"
                                        value={formik.values.mobile}
                                        onChange={formik.handleChange('mobile')}
                                        onBlur={formik.handleBlur('mobile')}
                                        classes={formik.values.mobile ? 'valid' : 'invalid'}
                                    />
                                    <div className="error">{formik.touched.mobile && formik.errors.mobile}</div>
                                </div>

                                <div>
                                    <CustomInput
                                        type={password ? 'password' : 'text'}
                                        name="password"
                                        placeholder="Password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange('password')}
                                        onBlur={formik.handleBlur('password')}
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
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <span>Already have an account? </span>
                                    <Link to="/login" className="ml-2 text-[#bf4800]">
                                        Log In
                                    </Link>
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

export default SignupTest;
