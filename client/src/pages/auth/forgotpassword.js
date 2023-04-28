import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Meta from '../../components/Meta';
import CustomInput from '../../components/CustomInput';
import { forgotPasswordToken } from '../../features/user/useSlide';
import { useDispatch } from 'react-redux';
import forgotPassword from '../../images/auth/forgot-password.png';
import Footer from '../../components/Footer';
import Header from './header';

const signUpSchema = yup.object({
    email: yup.string().email('Email Should Be Valid').required('Email Address is Required'),
});

const ForgotPassword = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            dispatch(forgotPasswordToken(values));
        },
    });
    return (
        <>
            <Meta title="Forgot Password" />
            <Header title="FORGOT PASSWORD" />
            <div className="bg-white">
                <div className="w-full flex items-center justify-center py-5">
                    <div className="w-[70%] flex justify-between max-lg:w-[90%]">
                        <div className="w-[40%] flex items-center max-lg:w-[48%] max-sm:hidden">
                            <img src={forgotPassword} alt="login-images" />
                        </div>
                        <div className="w-[42%] bg-white border-[1px] border-[#131921] dark:border-[#2dc26d]  rounded-lg p-[25px] max-lg:w-[48%] max-sm:w-full">
                            <div className="pt-2 pb-4 ">
                                <h4 className="text-black py-2 text-xl">Forgot Password</h4>
                                <h2 className="text-black text-xl">Verify Email!</h2>
                                <div className="py-2">
                                    <span>Enter your registered email address</span>
                                </div>
                            </div>

                            <form action="" onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
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
                                <button
                                    className="bg-regal-light dark:bg-regal-dark-500 w-full py-[12px] font-[18px] cursor-pointer rounded text-white hover:opacity-95"
                                    type="submit"
                                >
                                    SUBMIT
                                </button>
                                <div className="flex items-center justify-center py-4">
                                    <span>Having doubts? </span>
                                    <Link to="/login" className="ml-2 text-[#bf4800]">
                                        Go back
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

export default ForgotPassword;
