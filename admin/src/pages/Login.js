import React, { useEffect } from 'react';
import CustomInput from '../components/CustomInput';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './../features/auth/authSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let userSchema = yup.object().shape({
        email: yup.string().email('Email Should be Valid').required('Email is Required'),
        password: yup.string().required('Password is Required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: userSchema,
        onSubmit: (values) => {
            dispatch(login(values));
            // alert(JSON.stringify(values, null, 2));
        },
    });

    const authState = useSelector((state) => state);

    const { user, isLoading, isError, isSuccess, message } = authState.auth;

    useEffect(() => {
        if (!user == null || isSuccess) {
            navigate('admin');
        } else {
            navigate('');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, isLoading, isError, isSuccess]);

    return (
        <div className="py-5" style={{ background: '#ffd333', minHeight: '100vh' }}>
            <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4 position-relative" style={{ top: '100px' }}>
                <h4 className="text-center title">Login</h4>
                <p className="text-center">Login to your account to continue.</p>
                <div className="error text-center">{message.message === 'Rejected' ? 'You are not an Admin' : ''}</div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="text"
                        name="email"
                        label="Email Address"
                        i_id="email"
                        val={formik.values.email}
                        onCh={formik.handleChange('email')}
                    />
                    <div className="error">
                        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                    </div>
                    <CustomInput
                        type="password"
                        name="password"
                        label="Password"
                        i_id="pass"
                        val={formik.values.password}
                        onCh={formik.handleChange('password')}
                    />
                    <div className="error">
                        {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
                    </div>

                    <div className="mb-3 text-end">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                    <button
                        className="border-0 px-2 py-2 text-white fw-bold w-100 rounded-3 text-center text-decoration-none fs-6"
                        style={{ background: '#ffd333' }}
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
