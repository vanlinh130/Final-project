import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from './../components/ProductCard';

const SingleProduct = () => {
    const [orderedProduct, setOrderedProduct] = useState(true);

    return (
        <>
            <Meta title="Dynamic Blog Name" />
            <BreadCrumb title="Dynamic Blog Name" />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>

            <section className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="bg-white p-3">
                                <h4>Description</h4>
                                <p>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                    praesentium voluptatum deleniti atque dirtyi quos dolores et quas moletis excepturi
                                    sint occaecati cupiditate non-provent, similique sunt..
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="reviews-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className="mb-2">Customer Review</h4>
                                        <div className="d-flex align-items-center gap-10">
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className="mb-0">Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {orderedProduct && (
                                        <div>
                                            <a className="text-dark text-decoration-underline" href="/">
                                                Write a Reviews
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Popular Products</h3>
                        </div>
                    </div>
                    <div className="row">
                        <ProductCard />
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingleProduct;
