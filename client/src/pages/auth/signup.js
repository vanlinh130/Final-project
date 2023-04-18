import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import CustomInput from './../../components/CustomInput';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../features/user/useSlide';
import Meta from '../../components/Meta';

const signUpSchema = yup.object({
    firstname: yup.string().required('First Name is Required'),
    lastname: yup.string().required('Last Name is Required'),
    email: yup.string().email('Email Should Be Valid').required('Email Address is Required'),
    mobile: yup.string().required('Mobile No is Required'),
    password: yup.string().required('Password No is Required'),
});

const SignupTest = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
            navigate('/login');
        },
    });
    return (
        <>
            <Meta title="Sign Up" />
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
                                <h2 className="text-white">Hi 👋</h2>
                                <span className="text-white">Let’s setup you account real quick</span>
                            </div>

                            <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
                                <CustomInput
                                    type="text"
                                    name="firstname"
                                    placeholder="First Name"
                                    value={formik.values.firstname}
                                    onChange={formik.handleChange('firstname')}
                                    onBlur={formik.handleBlur('firstname')}
                                />
                                <div className="error">{formik.touched.firstname && formik.errors.firstname}</div>
                                <CustomInput
                                    type="text"
                                    name="lastname"
                                    placeholder="Last Name"
                                    value={formik.values.lastname}
                                    onChange={formik.handleChange('lastname')}
                                    onBlur={formik.handleBlur('lastname')}
                                />
                                <div className="error">{formik.touched.lastname && formik.errors.lastname}</div>
                                <CustomInput
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange('email')}
                                    onBlur={formik.handleBlur('email')}
                                />
                                <div className="error">{formik.touched.email && formik.errors.email}</div>

                                <CustomInput
                                    type="tel"
                                    name="mobile"
                                    placeholder="Mobile Number"
                                    value={formik.values.mobile}
                                    onChange={formik.handleChange('mobile')}
                                    onBlur={formik.handleBlur('mobile')}
                                />
                                <div className="error">{formik.touched.mobile && formik.errors.mobile}</div>

                                <CustomInput
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange('password')}
                                    onBlur={formik.handleBlur('password')}
                                />
                                <div className="error">{formik.touched.password && formik.errors.password}</div>
                                <div>
                                    <div>
                                        <button className="btn-auth" type="submit">
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignupTest;
