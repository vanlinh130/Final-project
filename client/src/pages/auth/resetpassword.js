import React from 'react';
import Meta from '../../components/Meta';
import { useLocation, useNavigate } from 'react-router-dom';
import CustomInput from '../../components/CustomInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../features/user/useSlide';
import resetPass from '../../images/auth/reset-password.png';
import Footer from '../../components/Footer';
import Header from './header';

const passwordSchema = yup.object({
    password: yup.string().required('Password No is Required'),
});

const ResetPassword = () => {
    const location = useLocation();
    const getToken = location.pathname.split('/')[2];
    console.log(getToken);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            password: '',
        },
        validationSchema: passwordSchema,
        onSubmit: (values) => {
            dispatch(resetPassword({ token: getToken, password: values.password }));
            navigate('/login');
        },
    });

    return (
        <>
            <Meta title="Reset Password" />
            <Header title="RESET PASSWORD" />
            <div className="bg-white">
                <div className="w-full flex items-center justify-center py-5">
                    <div className="w-[70%] flex justify-between max-lg:w-[90%]">
                        <div className="w-[40%] flex items-center max-lg:w-[48%] max-sm:hidden">
                            <img src={resetPass} alt="login-images" />
                        </div>
                        <div className="w-[42%] bg-white border-[1px] border-[#131921] dark:border-[#2dc26d]  rounded-lg p-[25px] max-lg:w-[48%] max-sm:w-full">
                            <div className="pt-2 pb-4 ">
                                <h4 className="text-black py-2 text-xl">Forgot Password</h4>
                                <h2 className="text-black text-xl">Reset Password!</h2>
                                <div className="py-2">
                                    <span>Enter your registered email address</span>
                                </div>
                            </div>

                            <form action="" onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
                                <div>
                                    <CustomInput
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={formik.values.password}
                                        classes={formik.values.password ? 'valid' : 'invalid'}
                                        onChange={formik.handleChange('password')}
                                        onBlur={formik.handleBlur('password')}
                                    />
                                    <div className="error">{formik.touched.password && formik.errors.password}</div>
                                </div>

                                <div>
                                    <div>
                                        <button
                                            className="bg-regal-light dark:bg-regal-dark-500 w-full py-[12px] font-[18px] cursor-pointer rounded text-white hover:opacity-95"
                                            type="submit"
                                        >
                                            SUBMIT
                                        </button>
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

export default ResetPassword;
