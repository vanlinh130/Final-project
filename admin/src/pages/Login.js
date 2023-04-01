import React from 'react';
import CustomInput from '../components/CustomInput';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="py-5" style={{ background: '#ffd333', minHeight: '100vh' }}>
            <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4 position-relative" style={{ top: '100px' }}>
                <h4 className="text-center title">Login</h4>
                <p className="text-center">Login to your account to continue.</p>
                <form action="">
                    <CustomInput type="text" label="Email Address" i_id="email" />
                    <CustomInput type="password" label="Password" i_id="pass" />
                    <div className="mb-3 text-end">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                    <Link
                        to="/admin"
                        className="border-0 px-2 py-2 text-white fw-bold w-100 rounded-3 text-center text-decoration-none fs-6"
                        style={{ background: '#ffd333' }}
                        type="submit"
                    >
                        Login
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
