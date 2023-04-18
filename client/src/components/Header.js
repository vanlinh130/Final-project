import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Typeahead } from 'react-bootstrap-typeahead';
import { BsSearch, BsMoon, BsSun } from 'react-icons/bs';
import { MdLanguage } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';
import Tippy from '@tippyjs/react/headless';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import wishlist from '../images/wishlist.svg';
import user from '../images/user.svg';
import cart from '../images/cart.svg';
import menu from '../images/menu.svg';
import { getAProduct } from '../features/products/productSlice';

const Header = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const dispatch = useDispatch();

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('lng', lng);
    };

    const [background, setBackground] = useState(false);

    const cartState = useSelector((state) => state?.auth?.cartProducts);
    const authState = useSelector((state) => state.auth);
    const [total, setTotal] = useState(null);
    const productState = useSelector((state) => state?.product?.product);
    const [productOpt, setProductOpt] = useState([]);
    const [paginate, setPaginate] = useState(true);
    const navigate = useNavigate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        let sum = 0;
        for (let index = 0; index < cartState?.length; index++) {
            sum = sum + Number(cartState[index].quantity) * cartState[index].price;
            setTotal(sum);
        }
    }, [cartState]);

    useEffect(() => {
        let data = [];
        for (let index = 0; index < productState.length; index++) {
            const element = productState[index];
            data.push({ id: index, prod: element?._id, name: element?.title });
        }
        setProductOpt(data);
    }, [productState]);

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <>
            <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className="text-white mb-0">{t('free_shipping')}</p>
                        </div>
                        <div className="header-top-info col-6">
                            <div className="d-flex align-items-center text-white mb-0 gap-10">
                                <div className="header-phone d-flex align-items-center">
                                    <p className="mb-0">Hotline:</p>
                                    <a className="text-white " href="tel: +84 787945995">
                                        +84 787945995
                                    </a>
                                </div>
                                <Tippy
                                    delay={[0, 200]}
                                    interactive
                                    placement="bottom-start"
                                    render={(attrs) => (
                                        <div className="box" tabIndex="-1" {...attrs}>
                                            <div className="language">
                                                <ul>
                                                    <li onClick={() => handleChangeLng('vi')}>Tiếng Việt</li>
                                                    <li onClick={() => handleChangeLng('en')}>English</li>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                >
                                    <div className="d-flex align-items-center ">
                                        <MdLanguage />
                                        <p className="mb-0">Language</p>
                                    </div>
                                </Tippy>
                                <div className="background-main" onClick={() => setBackground(!background)}>
                                    {background ? <BsMoon /> : <BsSun />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2>
                                <Link to="/" className="text-white">
                                    Dev Corner
                                </Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <Typeahead
                                    id="pagination-example"
                                    onPaginate={() => console.log('Results paginated')}
                                    onChange={(selected) => {
                                        navigate(`/product/${selected[0]?.prod}`);
                                        dispatch(getAProduct(selected[0]?.prod));
                                    }}
                                    options={productOpt}
                                    paginate={paginate}
                                    labelKey={'name'}
                                    minLength={2}
                                    placeholder="Search for Products here..."
                                />
                                <span className="input-group-text p-3" id="basic-addon2">
                                    <BsSearch className="fs-6" />
                                </span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                                        <img src={wishlist} alt="wishlist" />
                                        <p className="mb-0">
                                            {t('favourite')}
                                            <br />
                                            {t('wishlist')}
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Tippy
                                        delay={[0, 200]}
                                        interactive
                                        placement="bottom-start"
                                        render={(attrs) => (
                                            <div className="box" tabIndex="-1" {...attrs}>
                                                <div className="header-upper-profile">
                                                    <ul>
                                                        <li>
                                                            <Link
                                                                to={authState?.user === null ? '/login' : '/my-profile'}
                                                                className="profile-link gap-2"
                                                            >
                                                                <FiUser />
                                                                {authState?.user === null ? 'Log In' : 'Log Out'}
                                                            </Link>
                                                        </li>
                                                        {/* <li>
                                                            <Link to="/profile" className="profile-link gap-2">
                                                                <CiLogin />
                                                                Profile
                                                            </Link>
                                                        </li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    >
                                        <div className="d-flex align-items-center gap-10 text-white">
                                            <img src={user} alt="user" />
                                            {authState?.user === null ? (
                                                <p className="mb-0">
                                                    Log in <br /> My Account
                                                </p>
                                            ) : (
                                                <p className="mb-0">Welcome {authState?.user?.firstname}</p>
                                            )}
                                        </div>
                                    </Tippy>
                                </div>
                                <div>
                                    <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                                        <img src={cart} alt="cart" />
                                        <div className="d-flex flex-column gap-10">
                                            <span className="badge bg-white text-dark">
                                                {cartState?.length ? cartState?.length : 0}
                                            </span>
                                            <p className="mb-0">$ {total ? total : 0}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <header className="header-bottom py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img src={menu} alt="menu" />
                                            <span className="me-5 d-inline-block">Shop Categories</span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <Link className="dropdown-item text-white" to="">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item text-white" to="">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item text-white" to="">
                                                    Something else here
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="menu-links">
                                    <div className="d-flex align-items-center gap-15">
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="/product">Our Store</NavLink>
                                        <NavLink to="/my-orders">My Orders</NavLink>
                                        <NavLink to="/blogs">Blogs</NavLink>
                                        <NavLink to="/contact">Contact</NavLink>
                                        <button
                                            onClick={handleLogout}
                                            className="border border-0 bg-transparent text-white text-uppercase"
                                            type="button"
                                        >
                                            Log Out
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
