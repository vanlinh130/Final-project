/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import CustomInput from '../components/CustomInput';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Multiselect from 'react-widgets/Multiselect';
import 'react-widgets/styles.css';
import Dropzone from 'react-dropzone';
// import { Select } from 'antd';

import { getBrands } from './../features/brand/brandSlide';
import { getCategories } from '../features/pcategory/pcategorySlide';
import { getColors } from '../features/color/colorSlide';
import { deleteImg, uploadImg } from '../features/upload/uploadSlide';
import { createProducts } from '../features/product/productSlice';

let userSchema = yup.object().shape({
    title: yup.string().required('Title is Required'),
    description: yup.string().required('Description is Required'),
    price: yup.number().required('Price is Required'),
    brand: yup.string().required('Brand is Required'),
    category: yup.string().required('Category is Required'),
    // color: yup.array().required('Color are Required'),
    // quantity: yup.number().required('Quantity is Required'),
});

const AddProduct = () => {
    const dispatch = useDispatch();
    const [color, setColor] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        dispatch(getBrands());
        dispatch(getCategories());
        dispatch(getColors());
    }, []);

    const brandState = useSelector((state) => state.brand.brands);
    const pCatState = useSelector((state) => state.pCategory.pCategories);
    const colorState = useSelector((state) => state.color.colors);
    const imgState = useSelector((state) => state.upload.images);

    const coloropt = [];
    colorState.forEach((i) => {
        coloropt.push({
            _id: i._id,
            color: i.title,
        });
    });

    const img = [];
    imgState.forEach((i) => {
        img.push({
            public_id: i.public_id,
            url: i.url,
        });
    });

    useEffect(() => {
        formik.values.color = color;
        formik.values.images = img;
    }, [color, img]);

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            price: '',
            brand: '',
            category: '',
            color: '',
            quantity: '',
            images: '',
        },
        validationSchema: userSchema,
        onSubmit: (values) => {
            dispatch(createProducts(values));
        },
    });

    const handleColors = (e) => {
        setColor(e);
        console.log(color);
    };

    return (
        <div>
            <h3 className="mb-4 title">Add Product</h3>
            <form action="" onSubmit={formik.handleSubmit} className="d-flex gap-2 flex-column">
                <CustomInput
                    type="text"
                    label="Enter Product Title"
                    name="title"
                    val={formik.values.title}
                    onCh={formik.handleChange('title')}
                    onBl={formik.handleBlur('title')}
                />
                <div className="error">{formik.touched.title && formik.errors.title}</div>
                <div className="">
                    <ReactQuill
                        theme="snow"
                        name="description"
                        onChange={formik.handleChange('description')}
                        value={formik.values.description}
                    />
                    <div className="error">{formik.touched.description && formik.errors.description}</div>
                </div>
                <CustomInput
                    type="number"
                    label="Enter Product Price"
                    name="price"
                    val={formik.values.price}
                    onCh={formik.handleChange('price')}
                    onBl={formik.handleBlur('price')}
                />
                <div className="error">{formik.touched.price && formik.errors.price}</div>
                <select
                    id=""
                    className="form-control py-3 mb-3"
                    name="brand"
                    value={formik.values.brand}
                    onChange={formik.handleChange('brand')}
                    onBlur={formik.handleBlur('brand')}
                >
                    <option value="">Select brand</option>
                    {brandState.map((i, j) => {
                        return (
                            <option key={j} value={i.title}>
                                {i.title}
                            </option>
                        );
                    })}
                </select>
                <div className="error">{formik.touched.brand && formik.errors.brand}</div>

                <select
                    id=""
                    className="form-control py-3 mb-3"
                    name="category"
                    value={formik.values.category}
                    onChange={formik.handleChange('category')}
                    onBlur={formik.handleBlur('category')}
                >
                    <option value="">Select Category</option>
                    {pCatState.map((i, j) => {
                        return (
                            <option key={j} value={i.title}>
                                {i.title}
                            </option>
                        );
                    })}
                </select>
                <div className="error">{formik.touched.category && formik.errors.category}</div>

                {/* <Multiselect name="color" dataKey="id" textField="color" data={colors} onChange={(e) => setColor(e)} /> */}

                {/* <Select
                    mode="multiple"
                    allowClear
                    className="w-100"
                    placeholder="Select colors"
                    defaultValue={color}
                    onChange={(i) => handleColors(i)}
                    options={coloropt}
                /> */}
                <div className="error">{formik.touched.color && formik.errors.color}</div>

                <CustomInput
                    type="number"
                    label="Enter Product Quantity"
                    name="quantity"
                    val={formik.values.quantity}
                    onCh={formik.handleChange('quantity')}
                    onBl={formik.handleBlur('quantity')}
                />
                <div className="error">{formik.touched.quantity && formik.errors.quantity}</div>

                <div className="bg-white border-1 p-5 text-center">
                    <Dropzone onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}>
                        {({ getRootProps, getInputProps }) => (
                            <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p>Drag 'n' drop some files here, or click to select files</p>
                                </div>
                            </section>
                        )}
                    </Dropzone>
                </div>
                <div className="showimages d-flex flex-wrap gap-3">
                    {imgState?.map((i, j) => {
                        return (
                            <div key={j} className="position-relative">
                                <button
                                    type="button"
                                    onClick={() => dispatch(deleteImg(i.public_id))}
                                    className="btn-close position-absolute bg-white"
                                    style={{ top: '10px', right: '10px' }}
                                ></button>
                                <img src={i.url} alt="" width={200} height={200} />
                            </div>
                        );
                    })}
                </div>
                <button className="btn btn-success border-0 rounded-3 my-5" type="submit">
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
