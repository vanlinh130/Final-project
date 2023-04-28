import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/locales/i18n';
import '../src/components/ToggleTheme';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blogs from './pages/Blogs';
import Wishlist from './pages/Wishlist';
import SingleBlog from './pages/SingleBlog';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { PrivateRoutes } from './routing/PrivateRoutes';
import { OpenRoutes } from './routing/OpenRoutes';
import LoginTest from './pages/auth/login';
import SignupTest from './pages/auth/signup';
import ForgotPassword from './pages/auth/forgotpassword';
import ResetPassword from './pages/auth/resetpassword';
import Orders from './pages/Orders';
import Profile from './pages/Profile';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="product" element={<OurStore />} />
                        <Route path="product/:id" element={<SingleProduct />} />
                        <Route path="blogs" element={<Blogs />} />
                        <Route path="blog/:id" element={<SingleBlog />} />

                        <Route
                            path="wishlist"
                            element={
                                <PrivateRoutes>
                                    <Wishlist />
                                </PrivateRoutes>
                            }
                        />
                        <Route
                            path="cart"
                            element={
                                <PrivateRoutes>
                                    <Cart />
                                </PrivateRoutes>
                            }
                        />
                        <Route
                            path="my-orders"
                            element={
                                <PrivateRoutes>
                                    <Orders />
                                </PrivateRoutes>
                            }
                        />
                        <Route
                            path="my-profile"
                            element={
                                <PrivateRoutes>
                                    <Profile />
                                </PrivateRoutes>
                            }
                        />
                        <Route
                            path="checkout"
                            element={
                                <PrivateRoutes>
                                    <Checkout />
                                </PrivateRoutes>
                            }
                        />
                    </Route>

                    <Route
                        path="login"
                        element={
                            <OpenRoutes>
                                <LoginTest />
                            </OpenRoutes>
                        }
                    />
                    <Route
                        path="signup"
                        element={
                            <OpenRoutes>
                                <SignupTest />
                            </OpenRoutes>
                        }
                    />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                    <Route path="reset-password/:token" element={<ResetPassword />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
