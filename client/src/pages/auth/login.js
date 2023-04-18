import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomInput from '../../components/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { loginUser } from '../../features/user/useSlide';
import google from '../../images/google.png';
import Meta from '../../components/Meta';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

const loginSchema = yup.object({
    email: yup.string().email('Email Should Be Valid').required('Email Address is Required'),
    password: yup.string().required('Password No is Required'),
});

const LoginTest = () => {
    const authState = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            dispatch(loginUser(values));
            navigate('/');
        },
    });

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
            <div className="container-auth">
                <div className="preview-header">
                    <div className="header-heading">
                        <Link to="/" className="text-white">
                            Dev Corner
                        </Link>
                    </div>
                    <button className="preview-header-btn">Buy Now</button>
                </div>
                <div className="auth">
                    <div className="auth-content">
                        <div className="auth-left">
                            <div className="auth-left-heading">
                                <img src="" alt="images" />
                                <h1>Dev Corner</h1>
                            </div>
                            <div className="left-description">
                                <h2>
                                    Collect & Sell <br />
                                    Your <br />
                                    AWESOMENFTs
                                </h2>
                            </div>
                        </div>
                        <div className="auth-right">
                            <div className="auth-right-heading text-center pb-5">
                                <h2 className="text-white">Welcome To Dev</h2>
                            </div>
                            <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
                                <CustomInput
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={formik.handleChange('email')}
                                    onBlur={formik.handleBlur('email')}
                                    value={formik.values.email}
                                />
                                <div className="error">{formik.touched.email && formik.errors.email}</div>
                                <CustomInput
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={formik.handleChange('password')}
                                    onBlur={formik.handleBlur('password')}
                                    value={formik.values.password}
                                />
                                <div className="error">{formik.touched.password && formik.errors.password}</div>
                                <div>
                                    <div>
                                        <button className="btn-auth" type="submit">
                                            LOGIN
                                        </button>
                                    </div>
                                    <Link to="/forgot-password" className="forPass">
                                        Forgot Password
                                    </Link>
                                    <div className="info-or">
                                        <div className="info-or-left"></div>
                                        <span>Or</span>
                                        <div className="info-or-right"></div>
                                    </div>
                                    <GoogleLogin
                                        clientId={clientId}
                                        render={(renderProps) => (
                                            <div
                                                className="auth-google"
                                                onClick={renderProps.onClick}
                                                disabled={renderProps.disabled}
                                            >
                                                <img src={google} alt="images" />
                                                <span>SIGN UP WITH GOOGLE</span>
                                            </div>
                                        )}
                                        onSuccess={googleSuccess}
                                        onFailure={googleFailure}
                                        cookiePolicy="single_host_origin"
                                    />

                                    <div className="d-flex p-5">
                                        <span>Already have an account? </span>
                                        <Link to="/signup">Signup</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default LoginTest;
