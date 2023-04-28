import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Header = ({ title }) => {
    return (
        <>
            <div className="flex justify-between py-[9px] px-[20px] bg-regal-light dark:bg-regal-dark-500">
                <div className="flex items-center gap-3">
                    <Link to="/" className="text-white flex items-center">
                        <img src={logo} alt="" className="h-[45px] w-[45px]" />
                        <div className="ml-2 leading-[12px]">
                            <h2>MARKET-EASE</h2>
                        </div>
                    </Link>
                    <div className="h-[20px] w-[1px] bg-white "></div>
                    <h2 className="text-white">{title}</h2>
                </div>
                <button className="py-1 px-3  rounded-sm text-white max-sm:hidden">You need help?</button>
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

export default Header;
