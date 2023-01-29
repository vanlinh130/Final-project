import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';

import prodcompare from '../images/prodcompare.svg';
import view from '../images/view.svg';
import addCart from '../images/add-cart.svg';
import wish from '../images/wish.svg';
import watch from '../images/watch.jpg';
import watch1 from '../images/watch-1.jpg';

const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();

    return (
        <>
            <div className={`${location.pathname === '/product' ? `gr-${grid}` : 'col-3 mb-3'}`}>
                <Link
                    to={`${
                        location.pathname === '/'
                            ? '/product/:id'
                            : location.pathname === '/product/:id'
                            ? '/product/1'
                            : ':id'
                    }`}
                    className="product-card position-relative"
                >
                    <div className="wishlist-icon  position-absolute">
                        <button className="border-0 bg-transparent">
                            <img src={wish} alt="wishlist" />
                        </button>
                    </div>
                    <div className="product-image">
                        <img src={watch} className="img-fluid" alt="product images" />
                        <img src={watch1} className="img-fluid" alt="product images" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">Kids headphones bulk 10 pack multi colored for students</h5>
                        <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                        <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque dirtyi quos dolores et quas moletis excepturi sint occaecati
                            cupiditate non-provent, similique sunt..
                        </p>
                        <p className="price">$100.00</p>
                    </div>

                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <button className="border-0 bg-transparent">
                                <img src={prodcompare} alt="compare" />
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={view} alt="view" />
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={addCart} alt="add card" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>

            <div className={`${location.pathname === '/product' ? `gr-${grid}` : 'col-3'}`}>
                <Link
                    to={`${
                        location.pathname === '/'
                            ? '/product/:id'
                            : location.pathname === '/product/:id'
                            ? '/product/1'
                            : ':id'
                    }`}
                    className="product-card position-relative"
                >
                    <div className="wishlist-icon  position-absolute">
                        <button className="border-0 bg-transparent">
                            <img src={wish} alt="wishlist" />
                        </button>
                    </div>
                    <div className="product-image">
                        <img src={watch} className="img-fluid" alt="product images" />
                        <img src={watch1} className="img-fluid" alt="product images" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">Kids headphones bulk 10 pack multi colored for students</h5>
                        <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                        <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque dirtyi quos dolores et quas moletis excepturi sint occaecati
                            cupiditate non-provent, similique sunt..
                        </p>
                        <p className="price">$100.00</p>
                    </div>

                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <button className="border-0 bg-transparent">
                                <img src={prodcompare} alt="compare" />
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={view} alt="view" />
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={addCart} alt="add card" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default ProductCard;
