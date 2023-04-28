/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineUser, AiOutlinePhone } from 'react-icons/ai';
import { CgMail } from 'react-icons/cg';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import Container from './../components/Container';
import { config } from '../utils/axiosConfig';
import { createAnOrder } from '../features/user/useSlide';
import { useTranslation } from 'react-i18next';

const shippingSchema = yup.object({
    firstName: yup.string().required('First Name is Required'),
    lastName: yup.string().required('Last Name is Required'),
    address: yup.string().required('Address Detail are Required'),
    state: yup.string().required('State is Required'),
    city: yup.string().required('City is Required'),
    other: yup.string().required('City is Required'),
    country: yup.string().required('Country is Required'),
    pincode: yup.number().required('Pincode is Required'),
});

const Checkout = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.auth.cartProducts);
    const [totalAmount, setTotalAmount] = useState(null);
    const [shippingInfo, setShippingInfo] = useState(null);
    const [paymentInfo, setPaymentInfo] = useState({ razorpayPaymentId: '', razorpayOrderId: '' });
    const [cartProductState, setCartProductState] = useState([]);
    const userState = useSelector((state) => state.auth.user);

    useEffect(() => {
        let sum = 0;
        for (let index = 0; index < cartState?.length; index++) {
            sum = sum + Number(cartState[index].quantity) * cartState[index].price;
            setTotalAmount(sum);
        }
    }, [cartState]);

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            address: '',
            state: '',
            city: '',
            country: '',
            pincode: '',
            other: '',
        },
        validationSchema: shippingSchema,
        onSubmit: (values) => {
            setShippingInfo(values);
            setTimeout(() => {
                checkOutHandler();
            }, 200);
        },
    });

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    useEffect(() => {
        let items = [];
        for (let index = 0; index < cartState?.length; index++) {
            items.push({
                product: cartState[index].productId?._id,
                quantity: cartState[index].quantity,
                color: cartState[index].color?._id,
                price: cartState[index].price,
            });
            console.log(items);
        }

        setCartProductState(items);
    }, []);
    console.log(cartProductState);

    const checkOutHandler = async () => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
        if (!res) {
            alert('Razorpay SDK failed to Load');
            return;
        }

        const result = await axios.post(
            'http://localhost:5000/api/user/order/checkout',
            { amount: totalAmount + 5 },
            config,
        );
        if (!result) {
            alert('Something Went Wrong');
            return;
        }

        const { amount, id: order_id, currency } = result.data.order;
        console.log(amount);
        const options = {
            key: 'rzp_test_ndeuf3koWE9dH4', // Enter the Key ID generated from the Dashboard
            amount: amount,
            currency: currency,
            name: 'Van Linh',
            description: 'Test Transaction',
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                };

                const result = await axios.post(
                    'http://localhost:5000/api/user/order/paymentVerification',
                    data,
                    config,
                );

                setPaymentInfo({
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                });

                dispatch(
                    createAnOrder({
                        totalPrice: totalAmount,
                        totalPriceAfterDiscount: totalAmount,
                        orderItems: cartProductState,
                        paymentInfo,
                        shippingInfo,
                    }),
                );
            },
            prefill: {
                name: 'Van linh',
                email: 'vanlinh@example.com',
                contact: '9999999999',
            },
            notes: {
                address: "Developer's corner",
            },
            theme: {
                color: '#61dafb',
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <>
            <Container class1="checkout-wrapper py-5 home-wrapper-2">
                <div className="w-full bg-white rounded-xl p-4 flex justify-between max-lg:!p-2 max-sm:flex-wrap">
                    <div className="w-[49%] max-sm:w-full">
                        <div className="w">
                            <h3 className="text-xl font-medium mb-3">MARKET EASE</h3>
                            <ul className="flex items-center gap-2 my-2">
                                <li className="">
                                    <Link to="/cart" className="font-medium">
                                        {t('cart')}
                                    </Link>
                                </li>
                                <li className=""> / {t('information')}</li>
                                <li className=""> / {t('shipping')}</li>
                                <li className=""> / {t('payment')}</li>
                            </ul>
                            <h4 className="font-medium py-2 border-t-[1px]  border-t-[#ccc]">
                                {t('contact_information')}
                            </h4>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2 py-2">
                                    <AiOutlineUser className="text-lg" />
                                    <span className="font-normal text-lg capitalize">{userState?.firstname}</span>
                                </div>
                                <div className="flex items-center gap-2 py-2">
                                    <CgMail className="text-lg" />
                                    <span className="font-normal text-lg capitalize">{userState?.email}</span>
                                </div>
                                <div className="flex items-center gap-2 py-2">
                                    <AiOutlinePhone className="text-lg" />
                                    <span className="font-normal text-lg capitalize">{userState?.mobile}</span>
                                </div>
                            </div>
                            <h4 className="font-medium py-3">{t('shipping_address')}</h4>
                            <form
                                action=""
                                onSubmit={formik.handleSubmit}
                                className="d-flex gap-2 flex-wrap justify-content-between"
                            >
                                <div className="w-100">
                                    <div className="flex-grow-1">
                                        <select
                                            name="country"
                                            value={formik.values.country}
                                            onChange={formik.handleChange('country')}
                                            onBlur={formik.handleBlur('country')}
                                            className="form-control form-select bg-white"
                                        >
                                            <option value="" selected disabled>
                                                {t('select_country')}
                                            </option>
                                            <option value="VietName" className="option-select">
                                                VietName
                                            </option>
                                            <option value="Singapore" className="option-select">
                                                Singapore
                                            </option>
                                            <option value="My" className="option-select">
                                                My
                                            </option>
                                            <option value="China" className="option-select">
                                                China
                                            </option>
                                        </select>
                                        <div className="error ms-2 my-1">
                                            {formik.touched.country && formik.errors.country}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <input
                                        type="text"
                                        placeholder={t('first_name')}
                                        className="form-control"
                                        name="firstName"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange('firstName')}
                                        onBlur={formik.handleBlur('firstName')}
                                    />
                                    <div className="error ms-2 my-1">
                                        {formik.touched.firstName && formik.errors.firstName}
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <input
                                        type="text"
                                        placeholder={t('last_name')}
                                        className="form-control"
                                        name="lastName"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange('lastName')}
                                        onBlur={formik.handleBlur('lastName')}
                                    />
                                    <div className="error ms-2 my-1">
                                        {formik.touched.lastName && formik.errors.lastName}
                                    </div>
                                </div>
                                <div className="w-100">
                                    <input
                                        type="text"
                                        placeholder={t('address')}
                                        className="form-control"
                                        name="address"
                                        value={formik.values.address}
                                        onChange={formik.handleChange('address')}
                                        onBlur={formik.handleBlur('address')}
                                    />
                                    <div className="error ms-2 my-1">
                                        {formik.touched.address && formik.errors.address}
                                    </div>
                                </div>
                                <div className="w-100">
                                    <input
                                        type="text"
                                        placeholder={t('apartment_house_number')}
                                        className="form-control"
                                        name="other"
                                        value={formik.values.other}
                                        onChange={formik.handleChange('other')}
                                        onBlur={formik.handleBlur('other')}
                                    />
                                    <div className="error ms-2 my-1">{formik.touched.other && formik.errors.other}</div>
                                </div>
                                <div className="flex-grow-1">
                                    <input
                                        type="text"
                                        placeholder={t('city')}
                                        className="form-control"
                                        name="city"
                                        value={formik.values.city}
                                        onChange={formik.handleChange('city')}
                                        onBlur={formik.handleBlur('city')}
                                    />
                                    <div className="error ms-2 my-1">{formik.touched.city && formik.errors.city}</div>
                                </div>
                                <div className="flex-grow-1">
                                    <select
                                        name="state"
                                        value={formik.values.state}
                                        onChange={formik.handleChange('state')}
                                        onBlur={formik.handleBlur('state')}
                                        className="form-control form-select bg-white"
                                        id=""
                                    >
                                        <option value="" selected disabled>
                                            {t('select_state')}
                                        </option>
                                        <option value="D" className="option-select">
                                            Delivery
                                        </option>
                                        <option value="PIS" className="option-select">
                                            Products in stock
                                        </option>
                                        <option value="OOS" className="option-select">
                                            Out of stock
                                        </option>
                                    </select>
                                    <div className="error ms-2 my-1">{formik.touched.state && formik.errors.state}</div>
                                </div>
                                <div className="flex-grow-1">
                                    <input
                                        type="text"
                                        placeholder={t('pin_code')}
                                        className="form-control"
                                        name="pincode"
                                        value={formik.values.pincode}
                                        onChange={formik.handleChange('pincode')}
                                        onBlur={formik.handleBlur('pincode')}
                                    />
                                    <div className="error ms-2 my-1">
                                        {formik.touched.pincode && formik.errors.pincode}
                                    </div>
                                </div>
                                <div className="w-full py-4">
                                    <div className="flex justify-between w-full max-lg:flex-wrap">
                                        <Link to="/cart" className="flex items-center max-lg:w-full max-lg:mb-3">
                                            <BiArrowBack className="me-2" />
                                            <span>{t('return_to _cart')}</span>
                                        </Link>
                                        <Link
                                            to="/cart"
                                            className="bg-regal-light text-center px-4 py-2 rounded-lg hover:bg-[#3b4149] max-lg:w-[49%] max-lg:!px-2"
                                        >
                                            <span className="text-white">{t('continue_to_shopping')}</span>
                                        </Link>
                                        <button
                                            className="bg-regal-light px-4 py-2 text-center rounded-lg hover:bg-[#3b4149] max-lg:w-[49%]"
                                            type="submit"
                                        >
                                            <span className="text-white">{t('place_order')}</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-[49%]  max-sm:w-full">
                        <div className="border-b-[1px] border-b-[#ccc] py-4">
                            {cartState &&
                                cartState?.map((item, index) => {
                                    return (
                                        <div key={index} className="flex items-center my-3 shadow-sm">
                                            <div className="w-[75%] flex items-center">
                                                <div className="w-25 relative ">
                                                    <span className=" bg-red-500 rounded-full text-white p-2 absolute top-[-10px] right-[20px] w-[21px] h-[21px] flex items-center justify-center">
                                                        {item?.quantity}
                                                    </span>
                                                    <img
                                                        src={
                                                            item?.productId?.images[0]?.url
                                                                ? item?.productId?.images[0]?.url
                                                                : 'https://salt.tikicdn.com/cache/750x750/ts/product/a9/a5/58/cdbe994e29336c343a37a63a043c158b.jpg.webp'
                                                        }
                                                        alt="product"
                                                        className="img-fluid w-[80px] h-[80px] border-[1px] border-[#ccc] p-1  rounded-lg"
                                                    />
                                                </div>
                                                <div>
                                                    <h5 className="font-medium">{item?.productId?.title}</h5>
                                                    <p className="">s / {item?.color?.title}</p>
                                                </div>
                                            </div>
                                            <div className="w-[25%]">
                                                <h5 className="text-lg text-lime-500 font-medium">
                                                    $ {item?.price * item?.quantity}
                                                </h5>
                                                <p className="line-through text-sm text-[#767676]">
                                                    $ {item?.price * item?.quantity + 100}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                        <div className="border-b-[1px] border-b-[#ccc] py-4">
                            <div className="flex items-center justify-between py-3">
                                <p className="font-medium">{t('subTotal')}</p>
                                <p className="font-medium">$ {totalAmount ? totalAmount : '0'}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="font-medium">{t('shipping')}</p>
                                <p className="mb-0 font-medium">$ 5</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between border-b-[1px] border-b-[#ccc] py-4">
                            <h4 className="font-medium">{t('total')}</h4>
                            <label htmlFor="my-modal-3">
                                <div className="px-4 py-2 border-[1px] bg-red-500 text-white cursor-pointer font-medium hover:bg-red-400 rounded">
                                    <span>$ {totalAmount ? totalAmount + 5 : '0'}</span>
                                </div>
                            </label>
                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label
                                        htmlFor="my-modal-3"
                                        className="btn btn-sm btn-circle absolute right-2 top-2"
                                    >
                                        ✕
                                    </label>
                                    <div className="flex flex-col p-3">
                                        <h3 className="text-lg font-bold text-center">
                                            Thank you for your purchase, this is your Total Amount!
                                        </h3>
                                        <div className="flex py-3 gap-3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Checkout;
