import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Typeahead } from 'react-bootstrap-typeahead';
import { BsSearch, BsBorderWidth } from 'react-icons/bs';
import { MdContactPage } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';
import { CiLogin, CiLogout } from 'react-icons/ci';
import { AiFillHome, AiOutlinePhone, AiOutlineHeart, AiOutlineShoppingCart, AiFillAppstore } from 'react-icons/ai';
import { FaRegUser, FaBlogger } from 'react-icons/fa';
import Tippy from '@tippyjs/react/headless';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import logo from '../images/logo.png';
import vietname from '../images/vietnam.png';
import enghish from '../images/english.png';
import { getAProduct } from '../features/products/productSlice';
import ToggleTheme from './ToggleTheme';

const Header = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartState = useSelector((state) => state?.auth?.cartProducts);
    const authState = useSelector((state) => state.auth);
    const productState = useSelector((state) => state?.product?.product);

    const [total, setTotal] = useState(null);
    const [productOpt, setProductOpt] = useState([]);
    const [paginate, setPaginate] = useState(true);

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('lng', lng);
    };

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
        <div className="px-3 bg-regal-light dark:bg-regal-dark-500">
            <header className="py-2 max-sm:hidden">
                <div className="container-xxl">
                    <div className="w-full flex items-center ">
                        <div className="w-1/2 flex gap-2">
                            <p className="text-white text-text ">{t('free_shipping')}</p>
                            <p className="text-white text-text px-2 border-l-[1px] border-l-[#ccc] cursor-pointer max-lg:hidden">
                                {t('load_app')}
                            </p>
                        </div>
                        <div className="w-1/2">
                            <div className="flex items-center justify-end">
                                <div className="flex px-2">
                                    <AiOutlinePhone className="text-white" />
                                    <p className="text-white text-text px-2">{t('hotline')}:</p>
                                    <a className="text-white text-text" href="tel: +84 787945995">
                                        +84 787945995
                                    </a>
                                </div>
                                <Tippy
                                    delay={[0, 200]}
                                    interactive
                                    placement="bottom-start"
                                    render={(attrs) => (
                                        <div className="box" tabIndex="-1" {...attrs}>
                                            <div className="bg-white rounded mt-1 ml-3 shadow-lg">
                                                <ul className="cursor-pointer">
                                                    <li
                                                        onClick={() => handleChangeLng('vi')}
                                                        className="flex items-center text-sm font-normal py-[10px] px-[12px] gap-2 hover:text-[#bf4800] border-b-[1px] border-b-[#ccc]"
                                                    >
                                                        <img
                                                            src={vietname}
                                                            alt="images language"
                                                            className="h-[20px] w-[20px]"
                                                        />
                                                        <p>Tiếng Việt</p>
                                                    </li>
                                                    <li
                                                        onClick={() => handleChangeLng('en')}
                                                        className="flex items-center text-sm font-normal py-[10px] px-[12px] gap-2 hover:text-[#bf4800] border-b-[1px] border-b-[#ccc]"
                                                    >
                                                        <img
                                                            src={enghish}
                                                            alt="images language"
                                                            className="h-[20px] w-[20px]"
                                                        />
                                                        English
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                >
                                    <div className="flex items-center px-2 gap-2 cursor-pointer border-l-[1px] border-l-[#ccc]">
                                        <img
                                            src={t('image_language')}
                                            alt="images language"
                                            className="h-[20px] w-[20px]"
                                        />
                                        <p className="text-white text-text">{t('language')}</p>
                                    </div>
                                </Tippy>
                                <div className="text-white pl-2 cursor-pointer  border-l-[1px] border-l-[#ccc]">
                                    <ToggleTheme />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <header className="pt-3 pb-2 max-sm:fixed max-sm:top-0 max-sm:right-0 max-sm:left-0 max-sm:bg-regal-light dark:bg-regal-dark-500 max-sm:z-50">
                <div className="container-xxl max-sm:p-0">
                    <div className="flex items-center w-full ">
                        <div className="w-[15%] pr-2 max-lg:w-[25%] max-sm:hidden">
                            <h2>
                                <Link to="/" className="text-white flex items-center">
                                    <img src={logo} alt="" className="h-[45px] w-[45px]" />
                                    <div className="ml-2 leading-[12px]">
                                        <h2>MARKET-EASE</h2>
                                        <span className="text-[10px]">{t('shopping_online')}</span>
                                    </div>
                                </Link>
                            </h2>
                        </div>
                        <div className="w-[50%] px-2 max-lg:w-[50%] max-sm:w-[70%]">
                            <div className="relative">
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
                                    placeholder={t('search')}
                                />
                                <span className="absolute right-[2px] top-[2px] px-4 py-[10px] bg-regal-light dark:bg-regal-dark-500 rounded-md cursor-pointer hover:opacity-[0.9] max-sm:hidden">
                                    <BsSearch className="fs-6 text-white" />
                                </span>
                                <span className="absolute left-[9px] top-[14px] hidden max-sm:block">
                                    <BsSearch className="text-[13px] " />
                                </span>
                            </div>
                        </div>
                        <div className="w-[35%] px-2 max-lg:w-[25%] max-sm:w-[30%] ">
                            <div className="flex items-center justify-end gap-2">
                                <div className="py-1 px-2 hover:bg-[#3b4149] rounded-md cursor-pointer max-sm:hidden">
                                    <Link to="/wishlist" className="flex items-center gap-2 text-white max-md:gap-0">
                                        <AiOutlineHeart className="h-[30px] w-[30px]" />
                                        <p className="text-sm font-normal max-lg:hidden">{t('favourite')}</p>
                                    </Link>
                                </div>

                                <Tippy
                                    delay={[0, 200]}
                                    interactive
                                    placement="bottom-start"
                                    render={(attrs) => (
                                        <div className="box" tabIndex="-1" {...attrs}>
                                            <div className="bg-white rounded mt-2 ml-3 shadow-lg">
                                                <ul>
                                                    <li className="border-b-[1px] border-b-[#ccc]">
                                                        {authState?.user === null ? (
                                                            <Link
                                                                to="/login"
                                                                className="flex items-center text-sm font-normal py-[10px] px-8 gap-2 hover:text-[#bf4800]"
                                                            >
                                                                <CiLogin />
                                                                {t('log_in')}
                                                            </Link>
                                                        ) : (
                                                            <Link
                                                                to="/"
                                                                onClick={handleLogout}
                                                                className="flex items-center text-sm font-normal py-[10px] px-8 gap-2 hover:text-[#bf4800]"
                                                            >
                                                                <CiLogout />
                                                                {t('log_out')}
                                                            </Link>
                                                        )}
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/my-profile"
                                                            className="flex items-center text-sm font-normal py-[10px] px-8 gap-2 hover:text-[#bf4800]"
                                                        >
                                                            <FiUser />
                                                            {t('profile')}
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                >
                                    <div className="flex items-center gap-3 text-white py-1 px-2 hover:bg-[#3b4149] rounded-md cursor-pointer">
                                        <FaRegUser className="h-[25px] w-[25px]" />
                                        {authState?.user === null ? (
                                            <p className="text-sm font-normal max-lg:hidden">{t('my_account')}</p>
                                        ) : (
                                            <p className="text-sm font-normal capitalize max-lg:hidden">
                                                {authState?.user?.firstname}
                                            </p>
                                        )}
                                    </div>
                                </Tippy>
                                <div className="border-l-[1px] border-l-[#ccc] h-[20px] w-[1px] max-sm:hidden"></div>
                                <div className="py-1 px-2 hover:bg-[#3b4149] rounded-md cursor-pointer">
                                    <Link to="/cart" className="flex items-center gap-3">
                                        <div className="flex items-center text-white relative">
                                            <AiOutlineShoppingCart className="h-[30px] w-[30px] text-yellow-200 max-sm:h-[25px] max-sm:w-[25px]" />
                                            <div className="flex items-center justify-center h-5 w-5 top-[-15px] right-[-15px] p-1 rounded-full bg-red-500 absolute">
                                                <span className=" text-white text-sm font-normal max-sm:text-xs">
                                                    {cartState?.length ? cartState?.length : 0}
                                                </span>
                                            </div>
                                        </div>
                                        <p className=" text-white text-sm font-normal max-sm:hidden">
                                            $ {total ? total : 0}
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <header className="p-2 border-t-[1px] border-t-[#ccc] max-sm:hidden">
                <div className="container-xxl">
                    <div className="w-full">
                        <div className="flex items-center pl-[200px] max-lg:pl-0">
                            <Tabs>
                                <TabList className="flex items-center  max-lg:gap-5">
                                    <Tab>
                                        <NavLink to="/" className="text-white flex items-center gap-1 ">
                                            <AiFillHome />
                                            {t('home')}
                                        </NavLink>
                                    </Tab>
                                    <Tab>
                                        <NavLink to="/product" className="text-white ">
                                            {t('our_store')}
                                        </NavLink>
                                    </Tab>
                                    <Tab>
                                        <NavLink to="/my-orders" className="text-white ">
                                            {t('my_orders')}
                                        </NavLink>
                                    </Tab>
                                    <Tab>
                                        <NavLink to="/blogs" className="text-white ">
                                            Blogs
                                        </NavLink>
                                    </Tab>
                                    <Tab>
                                        <NavLink to="/contact" className="text-white ">
                                            {t('contact')}
                                        </NavLink>
                                    </Tab>
                                </TabList>
                                <TabPanel></TabPanel>
                                <TabPanel></TabPanel>
                                <TabPanel></TabPanel>
                                <TabPanel></TabPanel>
                                <TabPanel></TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </header>

            {/* responsive */}
            <header className="p-2 hidden fixed bottom-0 left-0 right-0 z-50 bg-regal-light dark:bg-regal-dark-500 max-sm:block ">
                <div className="container-xxl">
                    <div className="w-full">
                        <div className="flex items-center pl-[200px] max-lg:pl-0">
                            <Tabs>
                                <TabList className="flex items-center  max-lg:gap-5">
                                    <Tab>
                                        <NavLink to="/" className="text-white flex items-center gap-1  ">
                                            <AiFillHome />
                                        </NavLink>
                                    </Tab>
                                    <Tab>
                                        <NavLink to="/product" className="text-white ">
                                            <AiFillAppstore />
                                        </NavLink>
                                    </Tab>
                                    <Tab>
                                        <NavLink to="/my-orders" className="text-white ">
                                            <BsBorderWidth />
                                        </NavLink>
                                    </Tab>
                                    <Tab>
                                        <NavLink to="/blogs" className="text-white ">
                                            <FaBlogger />
                                        </NavLink>
                                    </Tab>
                                    <Tab>
                                        <NavLink to="/contact" className="text-white ">
                                            <MdContactPage />
                                        </NavLink>
                                    </Tab>
                                </TabList>
                                <TabPanel></TabPanel>
                                <TabPanel></TabPanel>
                                <TabPanel></TabPanel>
                                <TabPanel></TabPanel>
                                <TabPanel></TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
