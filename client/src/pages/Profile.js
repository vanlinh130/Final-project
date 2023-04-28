import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineEdit } from 'react-icons/ai';
import { useFormik } from 'formik';
import * as yup from 'yup';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import { updateProfile } from '../features/user/useSlide';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import CustomInput from '../components/CustomInput';
import Meta from '../components/Meta';
import { useTranslation } from 'react-i18next';

const profileSchema = yup.object({
    firstname: yup.string().required('First Name Is Required'),
    lastname: yup.string().required('Last Name Is Required'),
    email: yup.string().email('Email Should Be Valid').required('Email Address is Required'),
    mobile: yup.string().required('Mobile No Is Required'),
});

const Profile = () => {
    const { t } = useTranslation();
    const info = [
        {
            id: 1,
            image: 'https://down-vn.img.susercontent.com/file/sg-11134004-23030-h2pjoq78nvovd7',
            title: t('special_offer_for_you'),
            new: true,
        },
        {
            id: 2,
            image: 'https://down-vn.img.susercontent.com/file/sg-11134004-7qvdr-lfozr58zgl59d0',
            title: t('salary_On_sales_to'),
            new: true,
        },
        {
            id: 3,
            image: 'https://down-vn.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4',
            title: t('my_account_profile'),
            new: false,
            children: [
                {
                    id: 1,
                    title: t('file'),
                },
                {
                    id: 2,
                    title: t('bank'),
                },
                {
                    id: 3,
                    title: t('address'),
                },
                {
                    id: 4,
                    title: t('change_password'),
                },
            ],
        },
        {
            id: 4,
            image: 'https://down-vn.img.susercontent.com/file/f0049e9df4e536bc3e7f140d071e9078',
            title: t('purchase_order'),
            new: false,
        },
        {
            id: 5,
            image: 'https://down-vn.img.susercontent.com/file/e10a43b53ec8605f4829da5618e0717c',
            title: t('notification'),
            new: false,
        },
        {
            id: 6,
            image: 'https://down-vn.img.susercontent.com/file/84feaa363ce325071c0a66d3c9a88748',
            title: t('voucher_warehouse'),
            new: false,
        },
        {
            id: 7,
            image: 'https://down-vn.img.susercontent.com/file/a0ef4bd8e16e481b4253bd0eb563f784',
            title: t('market_ease_coins'),
            new: false,
        },
    ];

    const getTokenFromLocalStorage = localStorage.getItem('customer')
        ? JSON.parse(localStorage.getItem('customer'))
        : null;

    const config2 = {
        headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ''}`,
            Accept: 'application/json',
        },
    };

    const dispatch = useDispatch();
    const userState = useSelector((state) => state.auth.user);
    const [edit, setEdit] = useState(true);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstname: userState?.firstname,
            lastname: userState?.lastname,
            email: userState?.email,
            mobile: userState?.mobile,
        },
        validationSchema: profileSchema,
        onSubmit: (values) => {
            dispatch(updateProfile({ data: values, config2: config2 }));
            setEdit(true);
        },
    });

    return (
        <>
            <Meta title={t('profile')} />
            <BreadCrumb title={t('profile')} />
            <Container class1="store-wrapper home-wrapper-2 py-5 max-sm:!py-1">
                <div className="w-full bg-regal-light py-[10px] px-3 rounded-t-md mb-3 hidden max-sm:block">
                    <div className="flex items-center justify-between">
                        <Link to="/">
                            <BiArrowBack className="me-2 text-[24px] text-white" />
                        </Link>
                        <h4 className="text-xl font-medium text-white">{t('profile')}</h4>
                        <FiUser className="me-2 text-[24px] text-white" />
                    </div>
                </div>
                <div className="w-full flex justify-between max-sm:flex-col py-2">
                    <div className="w-[23%] max-sm:w-full max-sm:px-10">
                        <div className="w-full flex items-center my-4 gap-2 max-sm:hidden">
                            <h4 className="text-[18px] font-medium capitalize">{userState?.firstname}</h4>
                            <div
                                className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-gray-500"
                                onClick={() => setEdit(false)}
                            >
                                <AiOutlineEdit />
                                <span className="text-[16px] font-medium">{t('milk_profile')}</span>
                            </div>
                        </div>
                        <ul>
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex  gap-2 cursor-pointer my-3">
                                        <img src={item.image} alt="info" className="h-[25px] w-[25px]" />
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-2">
                                                <span className="hover:text-[#bf4800]">{item.title}</span>
                                                {item.new && (
                                                    <div className="bg-red-500 h-[20px] flex items-center px-2 rounded-t-[10px] rounded-br-[10px]">
                                                        <span className="text-white text-[13px]">{t('new')}</span>
                                                    </div>
                                                )}
                                            </div>
                                            {item?.children?.map((item, index) => {
                                                return (
                                                    <span key={index} className="hover:text-[#bf4800]">
                                                        {item.title}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="w-[74%] bg-white py-2 px-5 max-sm:w-full max-sm:!px-3">
                        <div className="w-full">
                            <div className="flex items-center justify-between">
                                <h4 className="my-3 text-[18px] font-medium max-sm:text-xl">{t('update_profile')}</h4>
                                <FiEdit className="text-[20px] hidden max-sm:block" onClick={() => setEdit(false)} />
                            </div>
                        </div>
                        <div className="w-full">
                            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
                                <div>
                                    <CustomInput
                                        type="text"
                                        name="firstname"
                                        placeholder={t('first_name')}
                                        label={t('first_name')}
                                        value={formik.values.firstname}
                                        onChange={formik.handleChange('firstname')}
                                        onBlur={formik.handleBlur('firstname')}
                                        classes={formik.values.firstname ? 'valid' : 'invalid'}
                                    />
                                    <div className="error">{formik.touched.firstname && formik.errors.firstname}</div>
                                </div>
                                <div>
                                    <CustomInput
                                        type="text"
                                        name="lastname"
                                        placeholder={t('last_name')}
                                        label={t('last_name')}
                                        value={formik.values.lastname}
                                        onChange={formik.handleChange('lastname')}
                                        onBlur={formik.handleBlur('lastname')}
                                        classes={formik.values.lastname ? 'valid' : 'invalid'}
                                    />
                                    <div className="error">{formik.touched.lastname && formik.errors.lastname}</div>
                                </div>
                                <div>
                                    <CustomInput
                                        type="text"
                                        name="email"
                                        placeholder={t('email')}
                                        label={t('email')}
                                        value={formik.values.email}
                                        onChange={formik.handleChange('email')}
                                        onBlur={formik.handleBlur('email')}
                                        classes={formik.values.email ? 'valid' : 'invalid'}
                                    />
                                    <div className="error">{formik.touched.email && formik.errors.email}</div>
                                </div>
                                <div>
                                    <CustomInput
                                        type="number"
                                        name="mobile"
                                        placeholder={t('Mobile')}
                                        label={t('Mobile')}
                                        value={formik.values.mobile}
                                        onChange={formik.handleChange('mobile')}
                                        onBlur={formik.handleBlur('mobile')}
                                        classes={formik.values.mobile ? 'valid' : 'invalid'}
                                    />
                                    <div className="error">{formik.touched.mobile && formik.errors.mobile}</div>
                                </div>
                                {edit === false && (
                                    <button
                                        type="submit"
                                        className="bg-blue-500 w-[20%] py-[10px] flex items-center justify-center text-center rounded-xl hover:bg-blue-400 max-md:w-full"
                                    >
                                        <span className="text-white font-medium">{t('save')}</span>
                                    </button>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Profile;
