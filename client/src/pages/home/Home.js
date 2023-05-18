/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment/moment';
import ReactStars from 'react-rating-stars-component';
import { useTranslation } from 'react-i18next';

import { getAllBlogs } from '../../features/blogs/blogSlice';
import { getAllProducts } from '../../features/products/productSlice';
import Meta from '../../components/Meta';
import Container from '../../components/Container';
import SpecialProduct from './../../components/SpecialProduct';
import BlogCard from '../../components/BlogCard';
import HomeSlider from './home-slider';
import HomeServices from './home-services';
import HomeBrandGenuine from './home-brand-genuine';
import HomeBrandPrice from './home-brand-price';
import HomeFloat from './home-float';

const Home = () => {
    const blogState = useSelector((state) => state?.blog?.blog);
    const productState = useSelector((state) => state.product.product);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        getBlogs();
        getallProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getBlogs = () => {
        dispatch(getAllBlogs());
    };

    const getallProducts = () => {
        dispatch(getAllProducts());
    };

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <>
            <Meta title="Market-Ease" />
            <div className="px-3 max-sm:!px-0">
                <HomeSlider />
                <HomeServices />
                <HomeBrandGenuine />
                <HomeBrandPrice />

                <Container class1="featured py-5 bg-[#f5f5f7] ">
                    <div className="w-full">
                        <div className="w-full py-3">
                            <h3 className="text-xl font-semibold max-sm:text-2xl">{t('featured_collection')}</h3>
                        </div>
                        <div className="w-full flex flex-wrap gap-3">
                            {productState &&
                                productState?.map((item, index) => {
                                    if (item.tags === 'featured') {
                                        return (
                                            <div
                                                key={index}
                                                className="w-[19%] max-lg:w-[31%] max-sm:w-full hover:shadow"
                                            >
                                                <div className="p-2 w-full rounded-lg bg-white relative max-sm:!p-6">
                                                    <div className="absolute h-[17px] w-[87px] top-0 left-0 z-10">
                                                        <img
                                                            src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png"
                                                            alt=""
                                                            className="h-full w-full rounded-tl-lg"
                                                        />
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
                                                        <h6 className="font-semibold pb-1 max-sm:text-xl">
                                                            {item?.brand}
                                                        </h6>
                                                        <p className="py-2">{item?.title}</p>
                                                        <div className="flex items-center gap-2">
                                                            <ReactStars
                                                                count={5}
                                                                size={20}
                                                                value={item?.totalrating.toString()}
                                                                edit={false}
                                                                activeColor="#ffd700"
                                                            />
                                                            <div className="border-l-[1px] border-l-[#ccc] h-5 w-[1px]"></div>
                                                            <p className="text-xs">Quantity : {item?.quantity}</p>
                                                        </div>

                                                        <p className="text-[#ff424e] text-xl p-1 max-sm:text-2xl">
                                                            $ {item?.price}
                                                        </p>
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
                                    }
                                })}
                        </div>
                    </div>
                </Container>

                <Container class1="special py-5 home-wrapper-2">
                    <div className="w-full">
                        <div className="w-full py-3">
                            <h3 className="text-xl font-semibold max-sm:text-2xl">{t('special_products')}</h3>
                        </div>
                    </div>
                    <div className="w-full flex flex-wrap justify-between">
                        {productState &&
                            productState?.map((item, index) => {
                                if (item.tags === 'special') {
                                    return (
                                        <SpecialProduct
                                            key={index}
                                            id={item?._id}
                                            brand={item?.brand}
                                            title={item?.title}
                                            totalrating={item?.totalrating.toString()}
                                            price={item?.price}
                                            sold={item?.sold}
                                            quantity={item?.quantity}
                                            image={item?.images[0]?.url}
                                            createdAt={moment(item?.createdAt).format('MMMM Do YYYY, h:mm a')}
                                        />
                                    );
                                }
                            })}
                    </div>
                </Container>

                <Container class1="popular py-5 home-wrapper-2">
                    <div className="w-full">
                        <div className="w-full py-3">
                            <h3 className="text-xl font-semibold max-sm:text-2xl">{t('our_popular_products')}</h3>
                        </div>
                        <div className="w-full flex flex-wrap gap-3">
                            {productState &&
                                productState?.map((item, index) => {
                                    if (item.tags === 'popular') {
                                        return (
                                            <div key={index} className="w-[19%] max-lg:w-[31%] max-sm:w-full">
                                                <div className="p-2 w-full rounded-lg bg-white relative max-sm:!p-6">
                                                    <div className="absolute h-[17px] w-[87px] top-0 left-0 z-10">
                                                        <img
                                                            src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png"
                                                            alt=""
                                                            className="h-full w-full rounded-tl-lg"
                                                        />
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
                                                        <h6 className="font-semibold pb-1 max-sm:text-xl">
                                                            {item?.brand}
                                                        </h6>
                                                        <p className="py-2">{item?.title}</p>
                                                        <div className="flex items-center gap-2">
                                                            <ReactStars
                                                                count={5}
                                                                size={20}
                                                                value={item?.totalrating.toString()}
                                                                edit={false}
                                                                activeColor="#ffd700"
                                                            />
                                                            <div className="border-l-[1px] border-l-[#ccc] h-5 w-[1px]"></div>
                                                            <p className="text-xs">Quantity : {item?.quantity}</p>
                                                        </div>

                                                        <p className="text-[#ff424e] text-xl p-1 max-sm:text-2xl">
                                                            $ {item?.price}
                                                        </p>
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
                                    }
                                })}
                        </div>
                    </div>
                </Container>

                {/* <HomeFloat /> */}

                <Container class1="blog-wrapper py-5 home-wrapper-2">
                    <div className="w-full">
                        <div className="w-full py-3">
                            <h3 className="text-xl font-semibold max-sm:text-2xl">{t('our_latest_blogs')}</h3>
                        </div>
                        <div className="w-full flex flex-wrap gap-2">
                            {blogState &&
                                blogState?.map((item, index) => {
                                    if (index < 4) {
                                        return (
                                            <div key={index} className="w-[24%] mb-3 max-lg:w-[32%] max-sm:w-full">
                                                <BlogCard
                                                    id={item?._id}
                                                    title={item?.title}
                                                    description={item?.description}
                                                    image={item?.images[0]?.url}
                                                    date={moment(item?.createdAt).format('MMMM Do YYYY, h:mm a')}
                                                />
                                            </div>
                                        );
                                    }
                                })}
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Home;
