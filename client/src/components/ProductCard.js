import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment/moment';

const ProductCard = (props) => {
    const { grid, data } = props;
    let location = useLocation();

    return (
        <>
            {data?.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={`${
                            location.pathname === '/product' ? `gr-${grid} max-sm:w-full` : 'w-[32%] max-sm:w-full mb-3'
                        }`}
                    >
                        <div className="p-4 bg-white rounded-lg overflow-hidden w-full shadow-sm relative">
                            <div className="absolute h-[17px] w-[87px] top-0 left-0 z-10">
                                <img
                                    src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png"
                                    alt=""
                                    className="h-full w-full rounded-tl-lg"
                                />
                            </div>

                            <Link to={'/product/' + item?._id} className="flex">
                                <div className="w-full h-[260px] cursor-pointer">
                                    <img
                                        src={
                                            item?.images[0]?.url
                                                ? item?.images[0]?.url
                                                : 'https://salt.tikicdn.com/cache/750x750/ts/product/a9/a5/58/cdbe994e29336c343a37a63a043c158b.jpg.webp'
                                        }
                                        className="w-full h-full img-fluid mx-auto object-contain"
                                        alt="product images"
                                        width={160}
                                    />
                                </div>
                            </Link>
                            <div className="w-full pt-3 border-b-[1px] border-b-[#ccc]">
                                <h6 className="font-semibold pb-1 max-sm:text-2xl">{item?.brand}</h6>
                                <p className="py-2 max-sm:text-base">{item?.title}</p>
                                <div className="flex items-center gap-2">
                                    <ReactStars
                                        count={5}
                                        size={20}
                                        value={item?.totalrating.toString()}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <div className="border-l-[1px] border-l-[#ccc] h-5 w-[1px]"></div>
                                    <p className="text-xs max-sm:text-base">Quantity : {item?.quantity}</p>
                                </div>
                                <p
                                    className={` ${grid === 12 ? 'block' : 'hidden'}`}
                                    dangerouslySetInnerHTML={{ __html: item?.description }}
                                ></p>
                                <p className="text-[#ff424e] text-xl p-1 max-sm:text-3xl">$ {item?.price}</p>
                                <p className="py-2 text-xs max-sm:text-base">
                                    Tặng tới 4 ASA (568 ₫) <br /> ≈ 0.3% hoàn tiền
                                </p>
                            </div>
                            <p className={`py-2 text-sm max-sm:text-base ${grid === 12 ? 'hidden' : 'block'}`}>
                                {moment(item?.createdAt).format('MMMM Do YYYY, h:mm a')}
                            </p>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default ProductCard;
