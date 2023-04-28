import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useNavigate } from 'react-router-dom';

const SpecialProduct = (props) => {
    const { title, brand, totalrating, price, sold, quantity, id, image, createdAt } = props;
    const navigate = useNavigate();
    return (
        <div className="w-[49%] mb-3 max-lg:w-full">
            <div className="py-5 px-2 bg-white rounded-lg max-sm:!py-4  max-sm:!px-6">
                <div className="flex max-sm:flex-wrap">
                    <div className="w-[60%] max-sm:w-full">
                        <img
                            src={
                                image
                                    ? image
                                    : 'https://salt.tikicdn.com/cache/750x750/ts/product/a9/a5/58/cdbe994e29336c343a37a63a043c158b.jpg.webp'
                            }
                            className="img-fluid cursor-pointer"
                            alt="watch"
                            onClick={() => navigate('/product/:' + id)}
                        />
                    </div>
                    <div className="w-[40%] py-3 max-sm:w-full max-sm:!pt-7">
                        <h6 className="font-semibold pb-1 max-sm:text-2xl">{brand}</h6>
                        <p className="py-2">{title}</p>
                        <ReactStars count={5} size={20} value={totalrating} edit={false} activeColor="#ffd700" />
                        <p className="text-[#ff424e] text-xl py-1 flex items-center gap-2  max-sm:text-2xl">
                            <span className="">$ {price}</span>
                            <div className="border-l-[1px] border-l-[#ff424e] h-4 w-[1px] "></div>
                            <span className="text-base">
                                <strike> $ {price + 100}</strike>
                            </span>
                        </p>
                        <p className="py-2 text-sm">{createdAt}</p>
                        <div className="prod-count my-3">
                            <p className="text-xs py-2">Quantity : {quantity}</p>
                            <div className="progress h-2">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: quantity / quantity + sold * 100 + '%' }}
                                    aria-valuenow={quantity / quantity + sold * 100}
                                    aria-valuemin={quantity}
                                    aria-valuemax={sold.quantity}
                                ></div>
                            </div>
                        </div>
                        <div className="flex items-center pb-3 pt-2 gap-2 w-full ">
                            <div className="border-[1px] border-blue-500 py-1 px-3 rounded-md cursor-pointer hover:opacity-80 text-center max-sm:w-[48%]">
                                <span className="text-sm text-blue-500">Trả góp</span>
                            </div>
                            <div className="border-[1px] border-blue-500 py-1 px-3 rounded-md cursor-pointer hover:opacity-80 text-center max-sm:w-[48%]">
                                <span className="text-sm text-blue-500">Nhiều màu</span>
                            </div>
                        </div>

                        <Link to={'/product/' + id} className="max-sm:w-full">
                            <button
                                type="button"
                                className="flex items-center justify-center py-2 px-10 bg-[#ff424e] hover:bg-[#f75e68] text-lg gap-2 text-white border-[1px] border-white rounded-[4px] max-sm:w-full"
                            >
                                <span>View</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialProduct;
