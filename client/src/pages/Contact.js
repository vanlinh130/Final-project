/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiArrowBack, BiInfoCircle, BiPhoneCall } from 'react-icons/bi';
import { MdContactPage } from 'react-icons/md';
import { useFormik } from 'formik';
import * as yup from 'yup';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from './../components/Container';
import { createQuery } from '../features/contact/contactSlide';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const contactSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().nullable().email('Email should be valid').required('Email is required'),
    mobile: yup.string().default('').nullable().required('Mobile Number is Required'),
    comment: yup.string().default('').nullable().required('Comment is Required'),
});

const Contact = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            name: '',
            mobile: '',
            email: '',
            comment: '',
        },
        validationSchema: contactSchema,
        onSubmit: (values) => {
            dispatch(
                createQuery({ name: values.name, email: values.email, mobile: values.mobile, comment: values.comment }),
            );
        },
    });

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <>
            <Meta title={t('contact')} />
            <BreadCrumb title={t('contact')} />
            <Container class1="home-wrapper-2 py-5 max-sm:!py-1">
                <div className="w-full bg-regal-light dark:bg-regal-dark-500 py-[10px] px-3 rounded-t-md mb-3 hidden max-sm:block">
                    <div className="flex items-center justify-between">
                        <Link to="/">
                            <BiArrowBack className="me-2 text-[24px] text-white" />
                        </Link>
                        <h4 className="text-xl font-medium text-white">{t('contact')}</h4>
                        <MdContactPage className="me-2 text-[24px] text-white" />
                    </div>
                </div>
                <div className="w-full">
                    <div className="w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d930.8874854112767!2d105.8047464!3d21.0506866!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219cf4a6c7de3%3A0x5b927b7c3bf98a54!2zNDA3LCA0IE7DumkgVGjDoG5oLCBRLiBI4bqjaSBDaMOidSwgxJDDoCBO4bq1bmc!5e0!3m2!1svi!2s!4v1673711788946!5m2!1svi!2s"
                            width="600"
                            height="450"
                            className="rounded-md w-full"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="w-full mt-5">
                        <div className="flex justify-between py-7 px-5 bg-white gap-2 max-sm:flex-wrap">
                            <div className="w-[48%] max-sm:w-full">
                                <h3 className="text-[26px] font-medium  mb-4">{t('contact')}</h3>
                                <form action="" onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
                                    <div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Name"
                                            name="name"
                                            onChange={formik.handleChange('name')}
                                            onBlur={formik.handleBlur('name')}
                                            value={formik.values.name}
                                        />
                                        <div className="error">{formik.touched.name && formik.errors.name}</div>
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                            name="email"
                                            onChange={formik.handleChange('email')}
                                            onBlur={formik.handleBlur('email')}
                                            value={formik.values.email}
                                        />
                                        <div className="error">{formik.touched.email && formik.errors.email}</div>
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="Mobile Number"
                                            name="mobile"
                                            onChange={formik.handleChange('mobile')}
                                            onBlur={formik.handleBlur('mobile')}
                                            value={formik.values.mobile}
                                        />
                                        <div className="error">{formik.touched.mobile && formik.errors.mobile}</div>
                                    </div>
                                    <div>
                                        <textarea
                                            id=""
                                            className="w-100 form-control"
                                            cols="30"
                                            rows="4"
                                            placeholder="Comments"
                                            name="comment"
                                            onChange={formik.handleChange('comment')}
                                            onBlur={formik.handleBlur('comment')}
                                            value={formik.values.comment}
                                        ></textarea>
                                        <div className="error">{formik.touched.comment && formik.errors.comment}</div>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            className="flex items-center justify-center py-2 px-10 bg-[#ff424e] hover:bg-[#f75e68] text-lg gap-2 text-white border-[1px] border-white rounded-[4px] max-sm:w-full"
                                        >
                                            <span>Submit</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="w-[48%] max-sm:w-full max-sm:mt-6">
                                <h3 className="text-[26px] font-medium mb-4">{t('get_in_touch_with_us')}</h3>
                                <div>
                                    <ul className="ps-0">
                                        <li className="mb-3 flex items-center gap-3">
                                            <AiOutlineHome className="text-xl" />
                                            <address className="mb-0">Hno:407, Nui Thanh , Hai Chau, Da Nang</address>
                                        </li>
                                        <li className="mb-3 flex items-center gap-3 hover:text-[#bf4800]">
                                            <BiPhoneCall className="text-xl" />
                                            <a href="tel: +84 787945995" className="hover:text-[#bf4800]">
                                                +84 787945995
                                            </a>
                                        </li>
                                        <li className="mb-3 flex items-center gap-3 hover:text-[#bf4800]">
                                            <AiOutlineMail className="text-xl" />
                                            <a href="mailto: vanlinhle130@gmail.com" className="hover:text-[#bf4800]">
                                                vanlinhle130@gmail.com
                                            </a>
                                        </li>
                                        <li className="mb-3 flex items-center gap-3">
                                            <BiInfoCircle className="text-xl" />
                                            <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Contact;
