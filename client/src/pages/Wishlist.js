/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from './../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProductWishlist } from '../features/user/useSlide';
import { addToWishlist } from '../features/products/productSlice';
import { TiDeleteOutline } from 'react-icons/ti';
import noData from '../images/no-data.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import moment from 'moment/moment';

const Wishlist = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        getWishlistFromDb();
    }, []);

    const getWishlistFromDb = () => {
        dispatch(getUserProductWishlist());
    };
    const wishlistState = useSelector((state) => state?.auth?.getUserWishlist?.wishlist);
    console.log(wishlistState);

    const removeFromWishlist = (id) => {
        dispatch(addToWishlist(id));
        setTimeout(() => {
            dispatch(getUserProductWishlist());
        }, 300);
    };

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <>
            <Meta title={t('favourite')} />
            <BreadCrumb title={t('favourite')} />
            <Container class1="home-wrapper-2 py-4">
                <div className="w-full flex flex-wrap gap-3">
                    {wishlistState && wishlistState.length === 0 && (
                        <div className="w-full flex items-center justify-center">
                            <img src={noData} alt="no data" className="w-[40%]" />
                        </div>
                    )}
                    {wishlistState &&
                        wishlistState?.map((item, index) => {
                            return (
                                <div key={index} className="w-[19%] max-lg:w-[31%] max-sm:w-full">
                                    <div className="p-2 w-full rounded-lg bg-white relative max-sm:!p-6">
                                        <div
                                            className="absolute top-0 right-0 z-10 cursor-pointer"
                                            onClick={() => removeFromWishlist(item?._id)}
                                        >
                                            <div className="h-full w-full py-1 px-[6px] bg-red-500 hover:bg-red-400 rounded-tr-lg max-sm:!py-2 max-sm:px-10">
                                                <TiDeleteOutline className="text-white max-sm:text-2xl" />
                                            </div>
                                        </div>

                                        <Link to={'/product/' + item?._id} className="flex">
                                            <div className="w-full  cursor-pointer">
                                                <img
                                                    src={
                                                        item?.images[0]?.url
                                                            ? item?.images[0]?.url
                                                            : 'https://salt.tikicdn.com/cache/750x750/ts/product/a9/a5/58/cdbe994e29336c343a37a63a043c158b.jpg.webp'
                                                    }
                                                    className="w-full h-full mx-auto"
                                                    alt="product images"
                                                    width={160}
                                                />
                                            </div>
                                        </Link>
                                        <div className="w-full pt-3 border-b-[1px] border-b-[#ccc]">
                                            <h6 className="font-semibold pb-1 max-sm:text-xl">{item?.brand}</h6>
                                            <p className="py-2">{item?.title}</p>
                                            <div className="flex items-center gap-2">
                                                <p className="text-[#ff424e] text-xl p-1 max-sm:text-2xl">
                                                    $ {item?.price}
                                                </p>
                                                <p className="text-[#767676] text-base p-1 line-through ">
                                                    $ {item?.price}
                                                </p>
                                                <div className="border-l-[1px] border-l-[#ccc] h-5 w-[1px]"></div>
                                                <p className="text-xs">Quantity : {item?.quantity}</p>
                                            </div>

                                            <p className="py-2 text-xs">
                                                Tặng tới 4 ASA (568 ₫) <br /> ≈ 0.3% hoàn tiền
                                            </p>
                                        </div>
                                        <p className="py-2 text-sm">
                                            {moment(item?.createdAt).format('MMMM Do YYYY, h:mm a')}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </Container>
        </>
    );
};

export default Wishlist;
