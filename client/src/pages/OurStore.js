import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from './../components/ProductCard';
import Container from './../components/Container';
import { getAllProducts } from '../features/products/productSlice';

const OurStore = () => {
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
    return (
        <>
            <Meta title="Our Store" />
            <BreadCrumb title="Our Store" />
            <Container class1="store-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Shop by Categories</h3>
                            <ul className="ps-0">
                                {categories &&
                                    [...new Set(categories)].map((item, index) => {
                                        return (
                                            <li key={index} onClick={() => setCategory(item)}>
                                                {item}
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Filter By</h3>
                            <div>
                                <h5 className="sub-title">Price</h5>
                                <div className="d-flex align-items-center gap-10">
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
                                <div className="mt-4 mb-3">
                                    <h3 className="sub-title">Product Tags</h3>
                                    <div>
                                        <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                            {tags &&
                                                [...new Set(tags)].map((item, index) => {
                                                    return (
                                                        <span
                                                            key={index}
                                                            onClick={() => setTag(item)}
                                                            className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
                                                        >
                                                            {item}
                                                        </span>
                                                    );
                                                })}
                                        </div>
                                    </div>
                                </div>
                                <div className=" mb-3">
                                    <h3 className="sub-title">Product Brands</h3>
                                    <div>
                                        <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                            {brands &&
                                                [...new Set(brands)].map((item, index) => {
                                                    return (
                                                        <span
                                                            key={index}
                                                            onClick={() => setBrand(item)}
                                                            className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
                                                        >
                                                            {item}
                                                        </span>
                                                    );
                                                })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid mb-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-10">
                                    <p className="mb-0 d-block" style={{ width: '100px' }}>
                                        Sort By:
                                    </p>
                                    <select
                                        name=""
                                        defaultValue={'manual'}
                                        className="form-control form-select"
                                        onChange={(e) => setSort(e.target.value)}
                                    >
                                        <option value="title">Alphabetically, A-Z</option>
                                        <option value="-title">Alphabetically, Z-A</option>
                                        <option value="price">Price, low to high</option>
                                        <option value="-price">Price, high to low</option>
                                        <option value="createdAt">Date, old to new</option>
                                        <option value="-createdAt">Date, new to old</option>
                                    </select>
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <p className="totalproducts mb-0">21 Products</p>
                                    <div className="d-flex gap-10 align-items-center grid">
                                        <img
                                            src="images/gr4.svg"
                                            className="d-block img-fluid"
                                            onClick={() => setGrid(3)}
                                            alt="gird"
                                        />
                                        <img
                                            src="images/gr3.svg"
                                            className="d-block img-fluid"
                                            onClick={() => setGrid(4)}
                                            alt="gird"
                                        />
                                        <img
                                            src="images/gr2.svg"
                                            className="d-block img-fluid"
                                            onClick={() => setGrid(6)}
                                            alt="gird"
                                        />
                                        <img
                                            src="images/gr.svg"
                                            className="d-block img-fluid"
                                            onClick={() => setGrid(12)}
                                            alt="gird"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="products-list mb-5">
                            <div className="d-flex gap-10 flex-wrap">
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
