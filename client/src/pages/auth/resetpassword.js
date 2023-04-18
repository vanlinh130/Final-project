import React from 'react';
import Meta from '../../components/Meta';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CustomInput from '../../components/CustomInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../features/user/useSlide';

const passwordSchema = yup.object({
    password: yup.string().required('Password No is Required'),
    // confirmpassword: yup.string().required('Confirm Password No is Required'),
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
            // confirmpassword: '',
        },
        validationSchema: passwordSchema,
        onSubmit: (values) => {
            dispatch(resetPassword({ token: getToken, password: values.password }));
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
                            <div className="auth-right-heading pb-5">
                                <h4 className="text-white">Forgot Password</h4>
                                <h2 className="text-white">Set Password!</h2>
                                <span>enter your registered email address</span>
                            </div>

                            <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
                                <CustomInput
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange('password')}
                                    onBlur={formik.handleBlur('password')}
                                />
                                <div className="error">{formik.touched.password && formik.errors.password}</div>

                                {/* <CustomInput
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formik.values.confirmpassword}
                                    onChange={formik.handleChange('confirmpassword')}
                                    onBlur={formik.handleBlur('confirmpassword')}
                                />
                                <div className="error">
                                    {formik.touched.confirmpassword && formik.errors.confirmpassword}
                                </div> */}

                                <div>
                                    <div>
                                        <button className="btn-auth" type="submit">
                                            SUBMIT
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

export default ResetPassword;
