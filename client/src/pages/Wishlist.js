import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const Wishlist = () => {
    return (
        <>
            <Meta title="WishList" />
            <BreadCrumb title="WishList" />
            <div className="wishlist-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                                <div className="product-card-image">
                                    <img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
                                </div>
                                <div className="py-3 px-3">
                                    <h5 className="title">
                                        Honor T1 7.0.1 GB RAM 8 GB ROM 7 Inch with Wi-Fi+3g Tablet
                                    </h5>
                                    <h6 className="price mb-3 mt-3">$ 100</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                                <div className="product-card-image">
                                    <img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
                                </div>
                                <div className="py-3 px-3">
                                    <h5 className="title">
                                        Honor T1 7.0.1 GB RAM 8 GB ROM 7 Inch with Wi-Fi+3g Tablet
                                    </h5>
                                    <h6 className="price mb-3 mt-3">$ 100</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                                <div className="product-card-image">
                                    <img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
                                </div>
                                <div className="py-3 px-3">
                                    <h5 className="title">
                                        Honor T1 7.0.1 GB RAM 8 GB ROM 7 Inch with Wi-Fi+3g Tablet
                                    </h5>
                                    <h6 className="price mb-3 mt-3">$ 100</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                                <div className="product-card-image">
                                    <img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
                                </div>
                                <div className="py-3 px-3">
                                    <h5 className="title">
                                        Honor T1 7.0.1 GB RAM 8 GB ROM 7 Inch with Wi-Fi+3g Tablet
                                    </h5>
                                    <h6 className="price mb-3 mt-3">$ 100</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Wishlist;
