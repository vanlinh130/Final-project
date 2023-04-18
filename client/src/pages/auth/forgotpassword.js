import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Meta from '../../components/Meta';
import CustomInput from '../../components/CustomInput';
import { forgotPasswordToken } from '../../features/user/useSlide';
import { useDispatch } from 'react-redux';

const signUpSchema = yup.object({
    email: yup.string().email('Email Should Be Valid').required('Email Address is Required'),
});

const ForgotPassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            dispatch(forgotPasswordToken(values));
            // navigate('/login');
        },
    });
    return (
        <>
            <Meta title="Forgot Password" />
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
                            <div className="auth-right-heading pb-5">
                                <h4 className="text-white">Forgot Password</h4>
                                <h2 className="text-white">Verify Email!</h2>
                                <span>enter your registered email address</span>
                            </div>

                            <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
                                <CustomInput
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange('email')}
                                    onBlur={formik.handleBlur('email')}
                                />
                                <div className="error">{formik.touched.email && formik.errors.email}</div>
                                <div>
                                    <div>
                                        <button className="btn-auth" type="submit">
                                            SUBMIT
                                        </button>
                                    </div>
                                    <div className="d-flex p-5">
                                        <span>Having doubts? </span>
                                        <Link to="/login">Go back</Link>
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

export default ForgotPassword;
