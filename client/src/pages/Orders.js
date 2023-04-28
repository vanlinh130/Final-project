import React, { useEffect } from 'react';
import { RxCaretSort } from 'react-icons/rx';
import Container from '../components/Container';
import BreadCrumb from '../components/BreadCrumb';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../features/user/useSlide';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineMessage } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

const Orders = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const orderState = useSelector((state) => state?.auth?.getorderedProduct?.orders);

    console.log(orderState);

    useEffect(() => {
        dispatch(getOrders());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <>
            <Meta title={t('my_orders')} />
            <BreadCrumb title={t('my_orders')} />
            <Container class1="store-wrapper home-wrapper-2 py-5 max-sm:!py-1">
                <div className="w-full">
                    <div className="w-full flex p-3 rounded shadow-sm bg-regal-light dark:bg-regal-dark-500 max-sm:hidden">
                        <div className="w-[25%]">
                            <h5 className="font-semibold text-white">{t('order_id')}</h5>
                        </div>
                        <div className="w-[25%]">
                            <h5 className="font-semibold text-white">{t('total_amount')}</h5>
                        </div>
                        <div className="w-[25%]">
                            <h5 className="font-semibold text-white">{t('total_amount_after_discount')}</h5>
                        </div>
                        <div className="w-[25%]">
                            <h5 className="font-semibold text-white">{t('status')}</h5>
                        </div>
                    </div>
                    <div className="w-full bg-regal-light dark:bg-regal-dark-500 py-[10px] px-3 rounded-t-md hidden max-sm:block">
                        <div className="flex items-center justify-between">
                            <Link to="/">
                                <BiArrowBack className="me-2 text-[24px] text-white" />
                            </Link>
                            <h4 className="text-xl font-medium text-white">
                                {t('my_orders')} ({orderState?.length})
                            </h4>
                            <div className="relative">
                                <AiOutlineMessage className="me-2 text-[24px] text-white" />
                                <div className="flex items-center justify-center h-5 w-5 top-[-8px] right-0 p-1 rounded-full bg-red-500 absolute">
                                    <span className=" text-white text-sm font-normal max-sm:text-xs">
                                        {orderState?.length ? orderState?.length - 2 : 0}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-3">
                        {orderState &&
                            orderState?.map((item, index) => {
                                return (
                                    <div className="shadow-sm ">
                                        <div
                                            className="w-full flex p-3 mt-3 rounded-t bg-[#3b4149] dark:bg-regal-dark-400"
                                            key={index}
                                        >
                                            <div className="w-[25%] max-sm:hidden">
                                                <p className="text-white">{item?._id}</p>
                                            </div>
                                            <div className="hidden w-[25%] max-sm:w-[35%] max-sm:block">
                                                <p className="text-white">ID</p>
                                            </div>
                                            <div className="w-[25%] max-sm:w-[25%]">
                                                <p className="text-white">{item?.totalPrice}</p>
                                            </div>
                                            <div className="w-[25%] max-sm:w-[25%]">
                                                <p className="text-white">{item?.totalPriceAfterDiscount}</p>
                                            </div>
                                            <div className="w-[25%] max-sm:w-[15%]">
                                                <p className="text-white">{item?.orderStaus}</p>
                                            </div>
                                        </div>
                                        <div className="w-full flex p-3 bg-white ">
                                            <div className="w-[25%] flex gap-2 items-center max-sm:w-[35%]">
                                                <h6 className="font-medium">
                                                    <span>{t('product_name')}</span>
                                                </h6>
                                                <RxCaretSort className="text-[20px] cursor-pointer max-sm:hidden" />
                                            </div>
                                            <div className="w-[25%] flex gap-2 items-center max-sm:w-[25%]">
                                                <h6 className="font-medium">{t('quantity')}</h6>
                                                <RxCaretSort className="text-[20px] cursor-pointer max-sm:hidden" />
                                            </div>
                                            <div className="w-[25%] flex gap-2 items-center max-sm:w-[25%]">
                                                <h6 className="font-medium">{t('price')}</h6>
                                                <RxCaretSort className="text-[20px] cursor-pointer max-sm:hidden" />
                                            </div>
                                            <div className="w-[25%] flex gap-2 items-center max-sm:w-[15%]">
                                                <h6 className="font-medium">{t('color')}</h6>
                                            </div>
                                        </div>
                                        {item?.orderItems?.map((i, index) => {
                                            return (
                                                <div key={index} className="w-full flex p-3 bg-white rounded-b">
                                                    <div className="w-[25%] max-sm:w-[35%]">
                                                        <p className="">{i?.product?.title}</p>
                                                    </div>
                                                    <div className="w-[25%] max-sm:w-[25%]">
                                                        <p className="">{i?.quantity}</p>
                                                    </div>
                                                    <div className="w-[25%] max-sm:w-[25%]">
                                                        <p className="">{i?.price}</p>
                                                    </div>
                                                    <div className="w-[25%] max-sm:w-[15%]">
                                                        <ul className="colors ps-0">
                                                            <li
                                                                style={{
                                                                    backgroundColor: i?.color,
                                                                }}
                                                            ></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Orders;
