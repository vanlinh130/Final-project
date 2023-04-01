import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/user/useSlide';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});
