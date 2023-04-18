/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Marquee from 'react-fast-marquee';
import moment from 'moment/moment';
import ReactStars from 'react-rating-stars-component';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import BlogCard from '../components/BlogCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from '../utils/Data';
import { getAllBlogs } from '../features/blogs/blogSlice';
import { getAllProducts } from './../features/products/productSlice';
import view from '../images/view.svg';
import wish from '../images/wish.svg';
import { addToWishlist } from '../features/products/productSlice';
import ListProduct from './ListProduct';

import banner_1 from '../images/main-banner-1.jpg';
import banner_2 from '../images/main-banner.jpg';
import catBanner_1 from '../images/catbanner-01.jpg';
import catBanner_2 from '../images/catbanner-02.jpg';
import catBanner_3 from '../images/catbanner-03.jpg';
import catBanner_4 from '../images/catbanner-04.jpg';
import famous_1 from '../images/famous-1.jpg';
import famous_2 from '../images/famous-2.jpeg';
import band_1 from '../images/brand-01.png';
import band_2 from '../images/brand-02.png';
import band_3 from '../images/brand-03.png';
import band_4 from '../images/brand-04.png';
import band_5 from '../images/brand-05.png';
import band_6 from '../images/brand-06.png';
import band_7 from '../images/brand-07.png';
import band_8 from '../images/brand-08.png';

const Home = () => {
    const blogState = useSelector((state) => state?.blog?.blog);
    const productState = useSelector((state) => state.product.product);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    const addToWish = (id) => {
        dispatch(addToWishlist(id));
    };

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const listProduct = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <Container class1="home-wrapper-1 py-5">
                <div className="row">
                    <div className="col-6 ">
                        <Slider {...settings}>
                            <div className="main-banner position-relative ">
                                <img src={banner_1} className="img-items img-fluid rounded-3" alt="main banner" />
                                <div className="main-banner-content position-absolute">
                                    <h4>SUPERCHARGED FOR PROS</h4>
                                    <h5>iPad S13+ Pro.</h5>
                                    <p>From $999.00 or $41.62/mo.</p>
                                    <Link className="button">BUY NOW</Link>
                                </div>
                            </div>
                            <div className="main-banner position-relative ">
                                <img src={banner_2} className="img-items img-fluid rounded-3" alt="main banner" />
                                <div className="main-banner-content position-absolute">
                                    <h4>BEST SAKE</h4>
                                    <h5>Laptops Max</h5>
                                    <p>From $1699.00 or $64.62/mo.</p>
                                    <Link className="button">BUY NOW</Link>
                                </div>
                            </div>
                        </Slider>
                    </div>

                    <div className="col-6">
                        <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
                            <div className="small-banner position-relative ">
                                <img src={catBanner_1} className="img-fluid rounded-3" alt="small banner" />
                                <div className="small-banner-content position-absolute">
                                    <h4>Best Sake</h4>
                                    <h5>Laptops Max</h5>
                                    <p>
                                        From $1699.00 or <br /> $64.62/mo.
                                    </p>
                                </div>
                            </div>
                            <div className="small-banner position-relative ">
                                <img src={catBanner_2} className="img-fluid rounded-3" alt="small banner" />
                                <div className="small-banner-content position-absolute">
                                    <h4>15% OFF</h4>
                                    <h5>Smartwatch</h5>
                                    <p>
                                        Shop the latest band <br /> styles and color
                                    </p>
                                </div>
                            </div>
                            <div className="small-banner position-relative ">
                                <img src={catBanner_3} className="img-fluid rounded-3" alt="small banner" />
                                <div className="small-banner-content position-absolute">
                                    <h4>New ARRIVAL</h4>
                                    <h5>Buy IPad Air</h5>
                                    <p>
                                        From $599 or <br /> $49.91/mo. for 12 mo.
                                    </p>
                                </div>
                            </div>
                            <div className="small-banner position-relative ">
                                <img src={catBanner_4} className="img-fluid rounded-3" alt="small banner" />
                                <div className="small-banner-content position-absolute">
                                    <h4>FREE ENGRAVING</h4>
                                    <h5>AirPods Max</h5>
                                    <p>
                                        High-fidelity playback & <br /> ultra-low distortion
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="services d-flex align-items-center justify-content-between">
                            {services?.map((service, index) => {
                                return (
                                    <div className="d-flex align-items-center gap-15" key={index}>
                                        <div>
                                            <img src={service.image} alt="services" />
                                        </div>
                                        <div>
                                            <h6>{service.title}</h6>
                                            <p className="mb-0">{service.tagline}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="home-wrapper-2 py-5">
                <Slider {...listProduct}>
                    <ListProduct ListProductsOne={true} />
                    <ListProduct ListProductsTow={true} />
                </Slider>
            </Container>

            <Container class1="Featured-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Featured Collection</h3>
                    </div>
                    {productState &&
                        productState?.map((item, index) => {
                            if (item.tags === 'featured') {
                                return (
                                    <div key={index} className="col-3">
                                        <div className="product-card position-relative">
                                            <div className="wishlist-icon  position-absolute">
                                                <button
                                                    className="border-0 bg-transparent"
                                                    onClick={(e) => {
                                                        addToWish(item?._id);
                                                    }}
                                                >
                                                    <img src={wish} alt="wishlist" />
                                                </button>
                                            </div>
                                            <div className="product-image">
                                                <img
                                                    src={
                                                        item?.images[0]?.url
                                                            ? item?.images[0]?.url
                                                            : 'https://salt.tikicdn.com/cache/750x750/ts/product/a9/a5/58/cdbe994e29336c343a37a63a043c158b.jpg.webp'
                                                    }
                                                    className="img-items img-fluid mx-auto"
                                                    alt="product images"
                                                    width={160}
                                                />
                                            </div>
                                            <div className="product-details">
                                                <h6 className="brand">{item?.brand}</h6>
                                                <h5 className="product-title">{item?.title}</h5>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={item?.totalrating.toString()}
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />

                                                <p className="price">$ {item?.price}</p>
                                            </div>

                                            <div className="action-bar position-absolute">
                                                <div className="d-flex flex-column gap-15">
                                                    <button className="border-0 bg-transparent">
                                                        <img
                                                            onClick={() => navigate('/product/:' + item?._id)}
                                                            src={view}
                                                            alt="view"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                </div>
            </Container>

            <Container class1="famous-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src={famous_1} sName="img-fluid " alt="famous" />
                            <div className="famous-content position-absolute">
                                <h5>Big Screen</h5>
                                <h6>Smart Watch Series 7</h6>
                                <p>From $399 or $16.62/mo. for 24 mo.*</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src={famous_2} className="img-fluid " alt="famous" />
                            <div className="famous-content position-absolute">
                                <h5 className="text-dark">Studio Display</h5>
                                <h6 className="text-dark">600 nits of brightness</h6>
                                <p className="text-dark">27-inch 5k Retina display</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src={famous_1} className="img-fluid " alt="famous" />
                            <div className="famous-content position-absolute">
                                <h5>Smartphones</h5>
                                <h6>Smartphone 13 Pro</h6>
                                <p>Now in Green From $999.00 or $ 41.62/mo. for 24mo Footnote*</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src={famous_2} className="img-fluid " alt="famous" />
                            <div className="famous-content position-absolute">
                                <h5 className="text-dark">Home Speakers</h5>
                                <h6 className="text-dark">Room=filling sound</h6>
                                <p className="text-dark">From $699 or $116.58/mo. for 24 mo.*</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="special-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Special Products</h3>
                    </div>
                </div>
                <div className="row">
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
                                    />
                                );
                            }
                        })}
                </div>
            </Container>

            <Container class1="popular-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Our Popular Products</h3>
                    </div>
                    {productState &&
                        productState?.map((item, index) => {
                            // if (item.tags === 'popular ') {}
                            return (
                                <div key={index} className="col-3 mt-4">
                                    <div className="product-card position-relative">
                                        <div className="wishlist-icon  position-absolute">
                                            <button
                                                className="border-0 bg-transparent"
                                                onClick={(e) => {
                                                    addToWish(item?._id);
                                                }}
                                            >
                                                <img src={wish} alt="wishlist" />
                                            </button>
                                        </div>
                                        <div className="product-image">
                                            <img
                                                src={
                                                    item?.images[0]?.url
                                                        ? item?.images[0]?.url
                                                        : 'https://salt.tikicdn.com/cache/750x750/ts/product/a9/a5/58/cdbe994e29336c343a37a63a043c158b.jpg.webp'
                                                }
                                                className="img-items img-fluid mx-auto"
                                                alt="product images"
                                                width={160}
                                            />
                                        </div>
                                        <div className="product-details">
                                            <h6 className="brand">{item?.brand}</h6>
                                            <h5 className="product-title">{item?.title}</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={item?.totalrating.toString()}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />

                                            <p className="price">$ {item?.price}</p>
                                        </div>

                                        <div className="action-bar position-absolute">
                                            <div className="d-flex flex-column gap-15">
                                                <button className="border-0 bg-transparent">
                                                    <img
                                                        onClick={() => navigate('/product/:' + item?._id)}
                                                        src={view}
                                                        alt="view"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </Container>

            <Container class1="marque-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="marquee-inner-wrapper card-wrapper">
                            <Marquee className="d-flex">
                                <div className="mx-4 w-25">
                                    <img src={band_1} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={band_2} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={band_3} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={band_4} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={band_5} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={band_6} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={band_6} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={band_7} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={band_8} alt="brand" />
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="blog-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Our Latest Blogs</h3>
                    </div>
                    <div className="row">
                        {blogState &&
                            blogState?.map((item, index) => {
                                if (index < 4) {
                                    return (
                                        <div key={index} className="col-3 mb-3">
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
        </>
    );
};

export default Home;
