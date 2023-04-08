/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiInfoCircle, BiPhoneCall } from 'react-icons/bi';
import Container from './../components/Container';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { createQuery } from '../features/contact/contactSlide';

const contactSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().nullable().email('Email should be valid').required('Email is required'),
    mobile: yup.string().default('').nullable().required('Mobile Number is Required'),
    comment: yup.string().default('').nullable().required('Comment is Required'),
});

const Contact = () => {
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

    return (
        <>
            <Meta title="Contact Us" />
            <BreadCrumb title="Contact Us" />
            <Container class1="contact-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12 ">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d930.8874854112767!2d105.8047464!3d21.0506866!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219cf4a6c7de3%3A0x5b927b7c3bf98a54!2zNDA3LCA0IE7DumkgVGjDoG5oLCBRLiBI4bqjaSBDaMOidSwgxJDDoCBO4bq1bmc!5e0!3m2!1svi!2s!4v1673711788946!5m2!1svi!2s"
                            width="600"
                            height="450"
                            className="border-0 w-100"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="col-12 mt-5">
                        <div className="contact-inner-wrapper d-flex justify-content-between">
                            <div>
                                <h3 className="contact-title mb-4">Contact</h3>
                                <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
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
                                        <button className="button">Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <h3 className="contact-title mb-4">Get in touch with us</h3>
                                <div>
                                    <ul className="ps-0">
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <AiOutlineHome className="fs-5" />
                                            <address className="mb-0">Hno:407, Nui Thanh , Hai Chau, Da Nang</address>
                                        </li>
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <BiPhoneCall className="fs-5" />
                                            <a href="tel: +84 787945995">+84 787945995</a>
                                        </li>
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <AiOutlineMail className="fs-5" />
                                            <a href="mailto: vanlinhle130@gmail.com">vanlinhle130@gmail.com</a>
                                        </li>
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <BiInfoCircle className="fs-5" />
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
