import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from '../utils/Data';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../features/blogs/blogSlice';
import moment from 'moment/moment';

const Home = () => {
    const blogState = useSelector((state) => state?.blog?.blog);

    const dispatch = useDispatch();
    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs = () => {
        dispatch(getAllBlogs());
    };

    return (
        <>
            <Container class1="home-wrapper-1 py-5">
                <div className="row">
                    <div className="col-6">
                        <div className="main-banner position-relative ">
                            <img src="images/main-banner-1.jpg" className="img-fluid rounded-3" alt="main banner" />
                            <div className="main-banner-content position-absolute">
                                <h4>SUPERCHARGED FOR PROS</h4>
                                <h5>iPad S13+ Pro.</h5>
                                <p>From $999.00 or $41.62/mo.</p>
                                <Link className="button">BUY NOW</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
                            <div className="small-banner position-relative ">
                                <img src="images/catbanner-01.jpg" className="img-fluid rounded-3" alt="small banner" />
                                <div className="small-banner-content position-absolute">
                                    <h4>Best Sake</h4>
                                    <h5>Laptops Max</h5>
                                    <p>
                                        From $1699.00 or <br /> $64.62/mo.
                                    </p>
                                </div>
                            </div>
                            <div className="small-banner position-relative ">
                                <img src="images/catbanner-02.jpg" className="img-fluid rounded-3" alt="small banner" />
                                <div className="small-banner-content position-absolute">
                                    <h4>15% OFF</h4>
                                    <h5>Smartwatch</h5>
                                    <p>
                                        Shop the latest band <br /> styles and color
                                    </p>
                                </div>
                            </div>
                            <div className="small-banner position-relative ">
                                <img src="images/catbanner-03.jpg" className="img-fluid rounded-3" alt="small banner" />
                                <div className="small-banner-content position-absolute">
                                    <h4>New ARRIVAL</h4>
                                    <h5>Buy IPad Air</h5>
                                    <p>
                                        From $599 or <br /> $49.91/mo. for 12 mo.
                                    </p>
                                </div>
                            </div>
                            <div className="small-banner position-relative ">
                                <img src="images/catbanner-04.jpg" className="img-fluid rounded-3" alt="small banner" />
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
                                        <img src={service.image} alt="services" />
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
                <div className="row">
                    <div className="col-12">
                        <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                            {/* row 1 */}
                            <div className="d-flex align-items-center">
                                <div>
                                    <h6>Cameras</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                            <div className="d-flex align-items-center">
                                <div>
                                    <h6>Cameras</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                            <div className="d-flex align-items-center">
                                <div>
                                    <h6>Smart TV</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/tv.jpg" alt="tv" />
                            </div>
                            <div className="d-flex align-items-center">
                                <div>
                                    <h6>Head Phone</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/headphone.jpg" alt="headphone" />
                            </div>

                            {/* row 2 */}
                            <div className="d-flex align-items-center">
                                <div>
                                    <h6>Cameras</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                            <div className="d-flex align-items-center">
                                <div>
                                    <h6>Cameras</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                            <div className="d-flex align-items-center">
                                <div>
                                    <h6>Smart TV</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/tv.jpg" alt="tv" />
                            </div>
                            <div className="d-flex align-items-center">
                                <div>
                                    <h6>Head Phone</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/headphone.jpg" alt="headphone" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="Featured-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Featured Collection</h3>
                    </div>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Container>

            <Container class1="famous-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/famous-1.jpg" className="img-fluid " alt="famous" />
                            <div className="famous-content position-absolute">
                                <h5>Big Screen</h5>
                                <h6>Smart Watch Series 7</h6>
                                <p>From $399 or $16.62/mo. for 24 mo.*</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/famous-2.jpeg" className="img-fluid " alt="famous" />
                            <div className="famous-content position-absolute">
                                <h5 className="text-dark">Studio Display</h5>
                                <h6 className="text-dark">600 nits of brightness</h6>
                                <p className="text-dark">27-inch 5k Retina display</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/famous-1.jpg" className="img-fluid " alt="famous" />
                            <div className="famous-content position-absolute">
                                <h5>Smartphones</h5>
                                <h6>Smartphone 13 Pro</h6>
                                <p>Now in Green From $999.00 or $ 41.62/mo. for 24mo Footnote*</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/famous-2.jpeg" className="img-fluid " alt="famous" />
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
                    <SpecialProduct />
                    <SpecialProduct />
                    <SpecialProduct />
                    <SpecialProduct />
                </div>
            </Container>

            <Container class1="popular-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Our Popular Products</h3>
                    </div>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Container>

            <Container class1="marque-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="marquee-inner-wrapper card-wrapper">
                            <Marquee className="d-flex">
                                <div className="mx-4 w-25">
                                    <img src="images/brand-01.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-02.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-03.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-04.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-05.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-06.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-07.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-08.png" alt="brand" />
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
                                if (index < 3) {
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
