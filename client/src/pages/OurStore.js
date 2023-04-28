import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiArrowBack, BiCategoryAlt } from 'react-icons/bi';
import { AiOutlineTags, AiFillHome, AiOutlineAppstore } from 'react-icons/ai';
import { TbBrandBootstrap } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from './../components/ProductCard';
import Container from './../components/Container';
import { getAllProducts } from '../features/products/productSlice';

import gr_1 from '../images/ourStores/gr1.svg';
import gr_2 from '../images/ourStores/gr2.svg';
import gr_3 from '../images/ourStores/gr3.svg';
import gr_4 from '../images/ourStores/gr4.svg';
import Outstanding from '../components/Outstanding';

const OurStore = () => {
    const { t } = useTranslation();
    const [grid, setGrid] = useState(4);
    const productState = useSelector((state) => state?.product?.product);
    const dispatch = useDispatch();
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);

    // fillter states
    const [tag, setTag] = useState(null);
    const [category, setCategory] = useState(null);
    const [brand, setBrand] = useState(null);
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);
    const [sort, setSort] = useState(null);

    useEffect(() => {
        let newBrands = [];
        let category = [];
        let newtags = [];
        let newColors = [];
        for (let index = 0; index < productState.length; index++) {
            const element = productState[index];
            newBrands.push(element.brand);
            category.push(element.category);
            newtags.push(element.tags);
            newColors.push(element.color);
        }
        setBrands(newBrands);
        setCategories(category);
        setTags(newtags);
    }, [productState]);

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort, tag, brand, category, minPrice, maxPrice]);

    const getProducts = () => {
        dispatch(getAllProducts({ sort, tag, brand, category, minPrice, maxPrice }));
    };

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <>
            <Meta title={t('our_store')} />
            <BreadCrumb title={t('our_store')} />
            <Container class1="store-wrapper home-wrapper-2 py-5 max-sm:!py-1">
                <div className="w-full bg-regal-light dark:bg-regal-dark-500 py-[10px] px-3 rounded-t-md mb-3 hidden max-sm:block">
                    <div className="flex items-center justify-between">
                        <Link to="/">
                            <BiArrowBack className="me-2 text-[24px] text-white" />
                        </Link>
                        <h4 className="text-xl font-medium text-white">{t('our_store')}</h4>
                        <AiOutlineAppstore className="me-2 text-[24px] text-white" />
                    </div>
                </div>
                <div className="w-full flex gap-3 max-sm:flex-wrap ">
                    <div className="w-[23%] max-lg:w-[33%] max-sm:w-full">
                        <div className="bg-white rounded-xl py-2 px-4 mb-3">
                            <h3 className="text-[16px] font-semibold py-2 max-sm:text-[20px]">
                                {t('shop_by_categories')}
                            </h3>
                            <ul className="ps-0">
                                {categories &&
                                    [...new Set(categories)].map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                onClick={() => setCategory(item)}
                                                className="py-2 px-2 flex items-center gap-2 bg-slate-100 hover:bg-slate-200 my-[10px] rounded-md cursor-pointer"
                                            >
                                                <BiCategoryAlt />
                                                <li>{item}</li>
                                            </div>
                                        );
                                    })}
                            </ul>
                        </div>
                        <div className="bg-white rounded-xl py-2 px-4 mb-3">
                            <h3 className="text-[16px] font-semibold py-2 max-sm:text-[20px]">{t('filter_by')}</h3>
                            <div>
                                <h5 className="text-[15px] font-semibold pt-4 pb-2  max-sm:text-[18px]">
                                    {t('price')}
                                </h5>
                                <div className="flex gap-2">
                                    <div className="form-floating mb-3">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="Form"
                                            onChange={(e) => setMinPrice(e.target.value)}
                                        />
                                        <label htmlFor="floatingInput">Form</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="floatingInput1"
                                            placeholder="To"
                                            onChange={(e) => setMaxPrice(e.target.value)}
                                        />
                                        <label htmlFor="floatingInput1">To</label>
                                    </div>
                                </div>
                                <div className="mt-1 mb-3">
                                    <h3 className="text-[15px] font-semibold pt-4 pb-2  max-sm:text-[18px]">
                                        {t('product_tags')}
                                    </h3>
                                    <div>
                                        <div className="flex flex-wrap w-full items-center justify-between ">
                                            {tags &&
                                                [...new Set(tags)].map((item, index) => {
                                                    return (
                                                        <div
                                                            key={index}
                                                            onClick={() => setTag(item)}
                                                            className="py-2 px-2 my-[6px] flex items-center w-[48%] gap-2 bg-slate-100 hover:bg-slate-200 capitalize rounded-md cursor-pointer"
                                                        >
                                                            <AiOutlineTags />
                                                            <span>{item}</span>
                                                        </div>
                                                    );
                                                })}
                                        </div>
                                    </div>
                                </div>
                                <div className=" mb-3">
                                    <h3 className="text-[15px] font-semibold pt-4 pb-2  max-sm:text-[18px]">
                                        {t('product_brands')}
                                    </h3>
                                    <div>
                                        <div className="flex flex-wrap w-full items-center justify-between ">
                                            {brands &&
                                                [...new Set(brands)].map((item, index) => {
                                                    return (
                                                        <div
                                                            key={index}
                                                            onClick={() => setBrand(item)}
                                                            className="py-2 px-2 my-[6px] flex items-center w-[48%] gap-2 bg-slate-100 hover:bg-slate-200 capitalize rounded-md cursor-pointer"
                                                        >
                                                            <TbBrandBootstrap />
                                                            <span>{item}</span>
                                                        </div>
                                                    );
                                                })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Outstanding />
                        <div className="bg-white rounded-xl py-2 px-4 mt-3">
                            <Link to="/" className="w-full">
                                <p className="py-[13px] px-2 flex items-center gap-2 bg-slate-100 hover:bg-slate-200 my-[10px] rounded-md cursor-pointer">
                                    <AiFillHome className="text-xl" />
                                    <h3 className="text-[16px] font-semibold">{t('issued_with_market')}</h3>
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className="w-[77%] max-lg:w-[67%] max-sm:w-full">
                        <div className="p-[10px] bg-white rounded-lg mb-3">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex items-center gap-3 w-1/2 max-sm:flex-wrap max-sm:w-[70%]">
                                    <p className="mb-0 w-[30%] max-sm:w-full">{t('sort_by')}:</p>
                                    <div className="w-[50%] max-sm:w-[75%]">
                                        <select
                                            name=""
                                            defaultValue={'manual'}
                                            className="form-control form-select "
                                            onChange={(e) => setSort(e.target.value)}
                                        >
                                            <option value="title">{t('alphabetically')}, A-Z</option>
                                            <option value="-title">{t('alphabetically')}, Z-A</option>
                                            <option value="price">{t('p_low_to_high')}</option>
                                            <option value="-price">{t('price_high_to_low')}</option>
                                            <option value="createdAt">{t('date_old_to_new')}</option>
                                            <option value="-createdAt">{t('date_new_to_old')}</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="hidden max-sm:block max-sm:w-[30%]">
                                    <p className="mb-0 text-green-500 max-sm:text-[18px]">
                                        {productState?.length} {t('products')}
                                    </p>
                                </div>
                                <div className="flex items-center justify-end gap-2 w-1/2 max-sm:hidden">
                                    <p className="mb-0 text-green-500">
                                        {productState?.length} {t('products')}
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={gr_4}
                                            className="d-block img-fluid h-[35px] w-[35px] bg-slate-100 hover:bg-slate-200 p-2 rounded cursor-pointer"
                                            onClick={() => setGrid(3)}
                                            alt="gird"
                                        />
                                        <img
                                            src={gr_3}
                                            className="d-block img-fluid h-[35px] w-[35px] bg-slate-100 hover:bg-slate-200 p-2 rounded cursor-pointer"
                                            onClick={() => setGrid(4)}
                                            alt="gird"
                                        />
                                        <img
                                            src={gr_2}
                                            className="d-block img-fluid h-[35px] w-[35px] bg-slate-100 hover:bg-slate-200 p-2 rounded cursor-pointer"
                                            onClick={() => setGrid(6)}
                                            alt="gird"
                                        />
                                        <img
                                            src={gr_1}
                                            className="d-block img-fluid h-[35px] w-[35px] bg-slate-100 hover:bg-slate-200 p-2 rounded cursor-pointer"
                                            onClick={() => setGrid(12)}
                                            alt="gird"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="flex flex-wrap gap-2">
                                <ProductCard data={productState ? productState : []} grid={grid} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default OurStore;
