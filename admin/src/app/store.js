import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import customerReducer from '../features/customers/customersSlice';
import productReducer from '../features/product/productSlice';
import brandReducer from '../features/brand/brandSlide';
import pCategoryReducer from '../features/pcategory/pcategorySlide';
import bCategoryReducer from '../features/bcategory/bcategorySlide';
import blogReducer from '../features/blogs/blogSlide';
import colorReducer from '../features/color/colorSlide';
import enquiryReducer from '../features/enquiry/enquirySlide';
import uploadReducer from '../features/upload/uploadSlide';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        customer: customerReducer,
        product: productReducer,
        brand: brandReducer,
        pCategory: pCategoryReducer,
        bCategory: bCategoryReducer,
        blogs: blogReducer,
        color: colorReducer,
        enquiry: enquiryReducer,
        upload: uploadReducer,
    },
});
