/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AiOutlineHeart, AiTwotoneHeart, AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { FaCartArrowDown, FaHandPointRight } from 'react-icons/fa';
import { BsCartPlus, BsLink45Deg } from 'react-icons/bs';
import { RxAvatar } from 'react-icons/rx';
import { BiArrowBack, BiDetail } from 'react-icons/bi';
import ReactStars from 'react-rating-stars-component';

import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from './../components/ProductCard';
import Color from './../components/Color';
import Container from './../components/Container';
import { addRating, addToWishlist, getAProduct, getAllProducts } from '../features/products/productSlice';
import { addProdToCart, getUserCart } from '../features/user/useSlide';

const SingleProduct = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [color, setColor] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [alreadyAdded, setAlreadyAdded] = useState(false);
    const [heart, serHeart] = useState(true);

    const getProductId = location.pathname.split('/')[2];
    const productState = useSelector((state) => state?.product?.singleproduct);
    const productsState = useSelector((state) => state?.product?.product);
    const cartState = useSelector((state) => state?.auth?.cartProducts);
    const userState = useSelector((state) => state.auth.user);

    useEffect(() => {
        dispatch(getAProduct(getProductId));
        dispatch(getUserCart());
        dispatch(getAllProducts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        for (let index = 0; index < cartState?.length; index++) {
            if (getProductId === cartState[index]?.productId?._id) {
                setAlreadyAdded(true);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const uploadCart = () => {
        if (color === null) {
            toast.error('Please Choose Color');
            return false;
        } else {
            dispatch(addProdToCart({ productId: productState?._id, quantity, color, price: productState?.price }));
            navigate('/cart');
        }
    };

    const copyToClipboard = (text) => {
        console.log('text', text);
        var textField = document.createElement('textarea');
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
    };

    const [popularProduct, setPopularProduct] = useState([]);
    useEffect(() => {
        let data = [];
        for (let index = 0; index < productsState.length; index++) {
            const element = productsState[index];
            if (element.tags === 'popular') {
                data.push(element);
            }

            setPopularProduct(data);
        }
    }, [productState]);

    // Heart
    function addToWish(id) {
        dispatch(addToWishlist(id));
        serHeart(!heart);
    }

    // Comment
    const [star, setStar] = useState(null);
    const [comment, setComment] = useState(null);
    const addRatingToProduct = () => {
        if (star === null) {
            toast.error('Please add star rating');
            return false;
        } else if (comment === null) {
            toast.error('Please Write Review About the Product');
            return false;
        } else {
            dispatch(addRating({ star: star, comment: comment, prodId: getProductId }));
            setTimeout(() => {
                dispatch(getAProduct(getProductId));
            }, 200);
        }

        return false;
    };

    return (
        <>
            <Meta title="Product Name" />
            <BreadCrumb title={productState?.title} />
            <Container class1="py-5 home-wrapper-2 max-sm:!py-1">
                <div className="w-full bg-regal-light py-[10px] px-3 rounded-t-md mb-3 hidden max-sm:block">
                    <div className="flex items-center justify-between">
                        <Link to="/product">
                            <BiArrowBack className="text-[24px] text-white" />
                        </Link>
                        <h4 className="text-xl font-medium text-white">{productState?.title}</h4>
                        <BiDetail className="text-[24px] text-white" />
                    </div>
                </div>
                <div className="w-full flex justify-between max-sm:flex-col">
                    <div className="w-1/2 pr-3 max-sm:w-full max-sm:!pr-0">
                        <div className=" bg-white rounded-xl py-3 px-5 max-sm:!px-2">
                            <div className="p-5 border-[1px] border-[#ccc] max-sm:!p-4">
                                <img
                                    src={
                                        productState?.images[0]?.url
                                            ? productState?.images[0]?.url
                                            : 'https://salt.tikicdn.com/cache/750x750/ts/product/a9/a5/58/cdbe994e29336c343a37a63a043c158b.jpg.webp'
                                    }
                                    alt=""
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                        <div className="bg-white py-3 px-5 max-sm:!px-2">
                            {productState?.images.map((item, index) => {
                                return (
                                    <div key={index} className="p-4 w-[48%] border-[1px] border-[#ccc] max-sm:!p-4">
                                        <img src={item?.url} className="img-fluid" alt="images-singleProduct" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="w-1/2 pl-3 max-sm:w-full max-sm:!pl-0 max-sm:mt-4">
                        <div className="py-3 px-5 rounded-lg bg-white max-lg:!px-4">
                            <div className="border-b-[1px] border-b-[#ccc] py-2">
                                <h3 className="font-semibold text-lg max-sm:text-3xl">{productState?.title}</h3>
                            </div>

                            <div className="py-3 flex justify-between max-sm:flex-col">
                                <div className="flex items-center gap-3 max-lg:!gap-2 max-sm:!gap-1 ">
                                    <div className="flex items-center gap-2">
                                        <span className="underline decoration-1 text-yellow-400">
                                            {productState?.totalrating.toString()}
                                            <span>.0</span>
                                        </span>
                                        <ReactStars
                                            count={5}
                                            size={20}
                                            value={productState?.totalrating.toString()}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <div className="border-l-[1px] border-l-[#ccc] h-5 w-[1px]"></div>
                                    <div className="flex items-center gap-2">
                                        <span className="underline decoration-1">
                                            {productState?.totalrating.toString()}
                                        </span>
                                        <span className="text-[#767676]">Đánh giá</span>
                                    </div>
                                    <div className="border-l-[1px] border-l-[#ccc] h-5 w-[1px]"></div>
                                    <div className="flex items-center gap-2">
                                        <span>53</span>
                                        <span className="text-[#767676]">Đã bán</span>
                                        <IoIosHelpCircleOutline className="cursor-pointer text-[#767676]" />
                                    </div>
                                </div>
                                <div className="max-lg:hidden">
                                    <span className="cursor-pointer text-[#767676]">Tố Cáo</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 py-2">
                                <p className="line-through text-xl p-1 text-[#767676]">$ {productState?.price + 100}</p>
                                <p className="text-[#ff424e] text-3xl p-1">$ {productState?.price}</p>
                                <div className="px-1 bg-[#ff424e] rounded-sm h-[20px] flex items-center">
                                    <span className="text-white text-xs">50% GIẢM</span>
                                </div>
                            </div>

                            <div className="flex gap-5 py-2 ">
                                <p>Vận Chuyển</p>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <img
                                            className="w-[25px] h-[20px]"
                                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/74f3e9ac01da8565c3baead996ed6e2a.png"
                                            alt=""
                                        />
                                        <span>Miễn phí vận chuyển</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MdOutlineLocalShipping className="w-[25px] h-[20px]" />
                                        <span>Phí Vận Chuyển $0</span>
                                    </div>
                                </div>
                            </div>

                            <div className="py-3">
                                <div className="flex items-center my-1 gap-2">
                                    <h3 className="font-medium">Category :</h3>
                                    <p className="product-data">{productState?.category}</p>
                                </div>
                                <div className="flex items-center my-1 gap-2">
                                    <h3 className="font-medium">Brand :</h3>
                                    <p className="product-data">{productState?.brand}</p>
                                </div>
                                <div className="flex items-center my-1 gap-2">
                                    <h3 className="font-medium">Tags :</h3>
                                    <p className="product-data">{productState?.tags}</p>
                                </div>

                                {alreadyAdded === false && (
                                    <>
                                        <div className="flex gap-5 my-4 items-center">
                                            <h3 className="font-medium">Color :</h3>
                                            <div className="cursor-pointer ">
                                                <Color setColor={setColor} colorData={productState?.color} />
                                            </div>
                                        </div>
                                    </>
                                )}
                                <div className="flex">
                                    {alreadyAdded === false && (
                                        <div className="w-full flex gap-5 max-lg:!gap-3 max-sm:flex-col">
                                            <div className="flex items-center gap-3">
                                                <h3 className="font-medium">Quantity :</h3>
                                                <input
                                                    type="number"
                                                    name=""
                                                    min={1}
                                                    max={10}
                                                    className="form-control"
                                                    style={{ width: '80px' }}
                                                    id=""
                                                    onChange={(e) => setQuantity(e.target.value)}
                                                    value={quantity}
                                                />
                                            </div>
                                            <div className="text-[#767676] flex items-center max-sm:w-full">
                                                <span>{productState?.quantity} Sản phẩm có sẵn</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="py-4">
                                    <div
                                        className=""
                                        onClick={() => {
                                            alreadyAdded ? navigate('/cart') : uploadCart();
                                        }}
                                    >
                                        {alreadyAdded ? (
                                            <button
                                                type="button"
                                                className="flex items-center justify-center py-2 px-4 bg-regal-btn hover:bg-regal-btn-hover text-lg gap-2 text-[#ff424e] border-[1px] border-[#ff424e] rounded-[4px] max-sm:w-full"
                                            >
                                                <FaCartArrowDown />
                                                <span>Go to Cart</span>
                                            </button>
                                        ) : (
                                            <div className="flex gap-3 max-sm:flex-col">
                                                <button
                                                    type="button"
                                                    className="flex items-center justify-center py-2 px-4 bg-regal-btn hover:bg-regal-btn-hover text-lg gap-2 text-[#ff424e] border-[1px] border-[#ff424e] rounded-[4px] max-sm:w-full"
                                                >
                                                    <BsCartPlus />
                                                    <span>Add To Cart</span>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="flex items-center justify-center py-2 px-4 bg-[#ff424e] hover:bg-[#f75e68] text-lg gap-2 text-white border-[1px] border-white rounded-[4px] max-sm:w-full"
                                                >
                                                    <span>Buy Now</span>
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div
                                    className="flex items-center gap-2 hover:text-[#ff424e] cursor-pointer w-[30%] max-lg:w-full"
                                    onClick={() => addToWish(productState?._id)}
                                >
                                    {heart ? (
                                        <AiOutlineHeart className="text-lg" />
                                    ) : (
                                        <AiTwotoneHeart className="text-lg text-[#ff424e]" />
                                    )}
                                    <span>Add to Wishlist</span>
                                </div>

                                <div className="flex items-center gap-2 pt-2 pb-4 pb">
                                    <BsLink45Deg />
                                    <Link
                                        onClick={() => {
                                            copyToClipboard(window.location.href);
                                        }}
                                    >
                                        Copy Product Link
                                    </Link>
                                </div>
                                <div className="flex gap-3 border-t-[1px] border-t-[#ccc] pt-3 max-lg:flex-col">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/83e10a1f95cb083579c089448ef8dd3b.png"
                                            alt="images"
                                            className="h-5 w-5"
                                        />
                                        <span>Market-Ease Đảo Bảo</span>
                                    </div>
                                    <span className="text-[#767676]">3 Ngày Trả Hàng/ Hoàn Tiền</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="py-5 home-wrapper-2 max-sm:!py-3">
                <div className="w-full bg-white p-4 rounded-md">
                    <div className="w-full">
                        <h4 className="text-[24px] mb-4 text-[#1c1c1b]">Chi Tiết Sản Phẩm</h4>
                        <div className="flex">
                            <div className="w-[10%] flex flex-col max-sm:w-[30%]">
                                <span className="py-1">Kho hàng</span>
                                <span className="py-1">Gửi từ</span>
                                <span className="py-1">Liên Hệ</span>
                            </div>
                            <div className="w-[50%] flex flex-col max-sm:w-[70%]">
                                <span className="font-normal py-1">{productState?.quantity}</span>
                                <span className="font-normal py-1">407, Nui Thanh , Hai Chau, Da Nang</span>
                                <span className="font-normal py-1">+84 787945995</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <h4 className="text-[24px] my-4 text-[#1c1c1b]">Mô Tả Sản Phẩm</h4>
                        <div className="flex flex-col">
                            <h5 className="font-medium py-2">1/ Thông tin cơ bản </h5>
                            <p>- Cam kết các sản phẩm bán ra tại shop đều là hàng chính hãng</p>
                            <p>- Cam kết hoàn tiền 100% hoặc đổi sản phẩm nếu sản phẩm có bất kì lỗi gì</p>
                            <p>- Luôn luôn đặt lợi ích của khách hàng lên trên hết</p>
                            <p>- Máy mới 100%</p>
                            <p>- Full box</p>
                            <p>- Bảo hành 12 tháng 1 đổi 1 trong 1 tháng hoàn tiền trong 7 ngày</p>
                        </div>
                        <div className="flex flex-col py-2">
                            <h5 className="font-medium py-2">2/ Thông tin sản phẩm</h5>
                            <p dangerouslySetInnerHTML={{ __html: productState?.description }}></p>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="py-5 home-wrapper-2">
                <div className="w-full">
                    <div className="w-full bg-white p-4 rounded-md">
                        <h3 className="text-[24px] mb-4 text-[#1c1c1b]">Đánh Giá - Nhận Xét Từ Khách Hàng</h3>
                        <div className="flex flex-col">
                            <div className="flex w-full border-b-[1px] border-b-[#ccc] pb-4">
                                <div className="flex flex-col w-1/2 max-sm:w-full">
                                    <h4 className="mb-2">Customer Review</h4>
                                    <div className="flex items-center leading-5 gap-3">
                                        <h2 className="font-semibold text-xl">4.8</h2>
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={5}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <span className="text-xs">33 nhận xét</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <ReactStars
                                                count={5}
                                                size={18}
                                                value={5}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <div className="w-[60%] bg-slate-200 h-1 rounded">
                                                <div className="w-[80%] bg-slate-400 h-1"></div>
                                            </div>
                                            <span className="text-xs">26</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <ReactStars
                                                count={5}
                                                size={18}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <div className="w-[60%] bg-slate-200 h-1 rounded">
                                                <div className="w-[30%] bg-slate-400 h-1"></div>
                                            </div>
                                            <span className="text-xs">5</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <ReactStars
                                                count={5}
                                                size={18}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <div className="w-[60%] bg-slate-200 h-1 rounded">
                                                <div className="w-0 bg-slate-400 h-1"></div>
                                            </div>
                                            <span className="text-xs">0</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <ReactStars
                                                count={5}
                                                size={18}
                                                value={2}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <div className="w-[60%] bg-slate-200 h-1 rounded">
                                                <div className="w-[10%] bg-slate-400 h-1"></div>
                                            </div>
                                            <span className="text-xs">2</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <ReactStars
                                                count={5}
                                                size={18}
                                                value={1}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <div className="w-[60%] bg-slate-200 h-1 rounded">
                                                <div className="w-0 bg-slate-400 h-1"></div>
                                            </div>
                                            <span className="text-xs">0</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2 max-sm:hidden">
                                    <h4 className="mb-2">All Images</h4>
                                    {productState?.images.map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="p-2 w-[28%] border-[1px] border-[#ccc] rounded-lg"
                                            >
                                                <img src={item?.url} className="img-fluid" alt="images-singleProduct" />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="py-5 max-sm:!py-[25px]">
                                <h4 className="mb-2">Write a Review</h4>
                                <div className="flex items-center gap-2">
                                    <FaHandPointRight />
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={0}
                                        edit={true}
                                        activeColor="#ffd700"
                                        onChange={(e) => setStar(e)}
                                    />
                                </div>
                                <textarea
                                    name=""
                                    id=""
                                    className="w-full form-control mt-2"
                                    cols="30"
                                    rows="4"
                                    placeholder="Comments"
                                    onChange={(e) => setComment(e.target.value)}
                                ></textarea>
                                <div className="flex justify-end mt-3">
                                    <button
                                        type="button"
                                        onClick={addRatingToProduct}
                                        className="flex items-center justify-center py-2 px-4 bg-[#ff424e] hover:bg-[#f75e68] text-lg gap-2 text-white border-[1px] border-white rounded-xl max-sm:w-full"
                                    >
                                        <span>Submit Review</span>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4">
                                {productState &&
                                    productState.ratings?.map((item, index) => {
                                        return (
                                            <div className="border-b-[1px] border-b-[#ccc] py-3" key={index}>
                                                <div className="flex gap-3 items-center">
                                                    <RxAvatar className="h-[35px] w-[35px] text-gray-500" />
                                                    <div className="flex flex-col items-center gap-2 max-sm:flex-row">
                                                        <h6 className="font-medium capitalize">
                                                            {userState?.firstname}
                                                        </h6>
                                                        <ReactStars
                                                            count={5}
                                                            size={24}
                                                            value={item?.star}
                                                            edit={false}
                                                            activeColor="#ffd700"
                                                        />
                                                    </div>
                                                </div>
                                                <p className="mt-3 ml-14">{item?.comment}</p>
                                                <div className="mt-3 ml-14 flex items-center gap-2">
                                                    <div className="p-1 rounded-full hover:bg-slate-100 cursor-pointer">
                                                        <AiOutlineLike className="text-[18px]" />
                                                    </div>
                                                    <div className="p-1 rounded-full hover:bg-slate-100 cursor-pointer">
                                                        <AiOutlineDislike className="text-[18px]" />
                                                    </div>
                                                    <span className="py-1 px-3 rounded-full hover:bg-slate-100 cursor-pointer">
                                                        Phản Hồi
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="py-5 home-wrapper-2 max-sm:!py-2">
                <div className="w-full">
                    <h3 className="text-[24px] mb-4 text-[#1c1c1b]">Our Popular Products</h3>
                </div>
                <div className="w-full flex max-sm:flex-col gap-2">
                    <ProductCard data={popularProduct} />
                </div>
            </Container>
        </>
    );
};

export default SingleProduct;
