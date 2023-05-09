import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import customerReducer from '../features/customers/customersSlice';
import productReducer from '../features/product/productSlice';
import brandReducer from '../features/brand/brandSlide';
import pCategoryReducer from '../features/pcategory/pcategorySlide';
import blogReducer from '../features/blogs/blogSlide';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        customer: customerReducer,
        product: productReducer,
        brand: brandReducer,
        pCategory: pCategoryReducer,
        blogs: blogReducer,
    },
});
