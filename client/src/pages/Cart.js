import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiFillDelete, AiOutlineMessage } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { RxCaretSort } from 'react-icons/rx';
import { FaCartArrowDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from './../components/Container';
import { deleteCartProduct, getUserCart, updateCartProduct } from '../features/user/useSlide';

const Cart = () => {
    const getTokenFromLocalStorage = localStorage.getItem('customer')
        ? JSON.parse(localStorage.getItem('customer'))
        : null;

    const config2 = {
        headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ''}`,
            Accept: 'application/json',
        },
    };

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [productUpdateDetail, setProductUpdateDetail] = useState(null);
    const userCartState = useSelector((state) => state.auth.cartProducts);
    console.log(userCartState);
    const [totalAmount, setTotalAmount] = useState(null);
    console.log(totalAmount);

    useEffect(() => {
        dispatch(getUserCart(config2));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (productUpdateDetail !== null) {
            dispatch(
                updateCartProduct({
                    cartItemId: productUpdateDetail?.cartItemId,
                    quantity: productUpdateDetail?.quantity,
                }),
            );
            setTimeout(() => {
                dispatch(getUserCart(config2));
            }, 200);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productUpdateDetail]);

    const deleteACartProduct = (id) => {
        dispatch(deleteCartProduct({ id: id, config2: config2 }));
        setTimeout(() => {
            dispatch(getUserCart(config2));
        }, 200);
    };

    useEffect(() => {
        let sum = 0;
        for (let index = 0; index < userCartState?.length; index++) {
            sum = sum + Number(userCartState[index].quantity) * userCartState[index].price;
            setTotalAmount(sum);
        }
    }, [userCartState]);

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <>
            <Meta title={t('your_shopping_cart')} />
            <BreadCrumb title={t('your_shopping_cart')} />
            <Container class1="home-wrapper-2 py-5 max-sm:!py-1">
                <div className="w-full">
                    <div className="w-full shadow-sm ">
                        <div className="w-full py-3 px-3 flex bg-regal-light rounded-t max-sm:hidden">
                            <div className="w-[40%] flex items-center gap-2">
                                <h4 className="text-lg font-medium text-white">{t('product_cart')}</h4>
                                <RxCaretSort className="text-[20px] cursor-pointer text-white" />
                            </div>
                            <div className="w-[20%] flex items-center gap-2">
                                <h4 className="text-lg font-medium text-white">{t('price_cart')}</h4>
                                <RxCaretSort className="text-[20px] cursor-pointer text-white" />
                            </div>
                            <div className="w-[20%] flex items-center gap-2">
                                <h4 className="text-lg font-medium text-white">{t('quantity_cart')}</h4>
                                <RxCaretSort className="text-[20px] cursor-pointer text-white" />
                            </div>
                            <div className="w-[20%] flex items-center gap-2">
                                <h4 className="text-lg font-medium text-white">{t('total_cart')}</h4>
                                <RxCaretSort className="text-[20px] cursor-pointer text-white" />
                            </div>
                        </div>
                        <div className="w-full bg-regal-light py-[10px] px-3 rounded-t-md hidden max-sm:block">
                            <div className="flex items-center justify-between">
                                <Link to="/product">
                                    <BiArrowBack className="me-2 text-[24px] text-white" />
                                </Link>
                                <h4 className="text-xl font-medium text-white">
                                    {t('order_of')} ({userCartState?.length})
                                </h4>
                                <div className="relative">
                                    <AiOutlineMessage className="me-2 text-[24px] text-white" />
                                    <div className="flex items-center justify-center h-5 w-5 top-[-8px] right-0 p-1 rounded-full bg-red-500 absolute">
                                        <span className=" text-white text-sm font-normal max-sm:text-xs">
                                            {userCartState?.length ? userCartState?.length - 2 : 0}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {userCartState &&
                            userCartState?.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="w-full flex border-b-[1px] border-b-[#ccc] py-3 px-3 bg-white max-sm:flex-col"
                                    >
                                        <div className="w-[40%] gap-3 flex items-center max-sm:w-full">
                                            <div className="w-[25%] border-[1px] border-[#ccc] rounded-lg p-2">
                                                <img
                                                    src={
                                                        item?.productId?.images[0]?.url
                                                            ? item?.productId?.images[0]?.url
                                                            : 'https://salt.tikicdn.com/cache/750x750/ts/product/a9/a5/58/cdbe994e29336c343a37a63a043c158b.jpg.webp'
                                                    }
                                                    className="img-fluid rounded-lg"
                                                    alt="product"
                                                />
                                            </div>
                                            <div className="w-[75%]">
                                                <p className="text-lg font-medium py-2">{item?.productId?.title}</p>
                                                <p className="flex items-center gap-3">
                                                    Color:
                                                    <ul className="colors ps-0 ">
                                                        <li style={{ backgroundColor: item?.color?.title }}></li>
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-[60%] flex max-sm:w-full max-sm:!py-1 max-sm:justify-between">
                                            <div className="w-[33%] flex items-center gap-2 max-sm:w-[50%]">
                                                <h5 className="text-lg text-lime-500 font-medium">$ {item?.price}</h5>
                                                <p className="line-through text-sm text-[#767676]">
                                                    $ {item?.price + 100}
                                                </p>
                                            </div>
                                            <div className="w-[33%] gap-3 flex items-center max-sm:w-[50%] max-sm:justify-end">
                                                <div>
                                                    <input
                                                        className="form-control"
                                                        type="number"
                                                        placeholder="0"
                                                        min={1}
                                                        max={10}
                                                        name={'quantity' + item?._id}
                                                        id={'cart' + item?._id}
                                                        value={item?.quantity}
                                                        onChange={(e) => {
                                                            setProductUpdateDetail({
                                                                cartItemId: item?._id,
                                                                quantity: e.target.value,
                                                            });
                                                        }}
                                                    />
                                                </div>

                                                <div className="mt-2">
                                                    <label htmlFor="my-modal-3">
                                                        <div className="px-2 py-[10px] border-[1px] border-red-500 cursor-pointer hover:bg-red-100 rounded">
                                                            <AiFillDelete className="text-red-600" />
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
                                                            <div className="flex flex-col items-center justify-center">
                                                                <h3 className="text-lg font-bold">
                                                                    {t('are_you_sure')}
                                                                </h3>
                                                                <div className="flex py-3 gap-3">
                                                                    <label htmlFor="my-modal-3">
                                                                        <div
                                                                            className="px-4 py-2 border-[1px] bg-red-500 text-white cursor-pointer font-medium hover:bg-red-400 rounded"
                                                                            onClick={() => {
                                                                                deleteACartProduct(item?._id);
                                                                            }}
                                                                        >
                                                                            <span>Yes</span>
                                                                        </div>
                                                                    </label>
                                                                    <label htmlFor="my-modal-3">
                                                                        <div className="px-4 py-2 border-[1px] cursor-pointer font-medium bg-[#3b4149] hover:bg-[#636870]  text-white rounded">
                                                                            <span>No</span>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-[33%] flex items-center max-sm:hidden">
                                                <h5 className="text-lg text-lime-500 font-medium">
                                                    $ {item?.price * item?.quantity}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    <div className="w-full py-2 mt-5 max-sm:!mt-2">
                        <div className="d-flex justify-content-between align-items-baseline">
                            <Link to="/product" className="max-sm:hidden">
                                <button
                                    className="bg-regal-light px-4 py-2 flex items-center text-center rounded-2xl hover:bg-[#3b4149]"
                                    type="submit"
                                >
                                    <BiArrowBack className="me-2 text-white" />
                                    <span className="text-white">{t('continue_to_shopping')}</span>
                                </button>
                            </Link>
                            {(totalAmount !== null || totalAmount !== 0) && (
                                <div className="d-flex flex-column align-items-end">
                                    <h4 className="text-lg my-2 font-semibold max-sm:text-[24px]">
                                        {t('subTotal')}: $ {totalAmount}
                                    </h4>
                                    <p className="my-2">{t('taxes_and_shipping')}</p>
                                    <Link to="/checkout">
                                        <button
                                            className="bg-red-500 px-4 py-[10px] flex items-center text-center rounded-2xl hover:bg-red-400 max-sm:!px-14"
                                            type="submit"
                                        >
                                            <FaCartArrowDown className="me-2 text-white" />
                                            <span className="text-white">{t('checkout')}</span>
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Cart;
