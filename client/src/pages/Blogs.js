import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment/moment';

import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import BlogCard from './../components/BlogCard';
import Container from '../components/Container';
import { getAllBlogs } from '../features/blogs/blogSlice';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { FaBlogger } from 'react-icons/fa';
import Outstanding from '../components/Outstanding';
import { AiFillHome } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

const Blogs = () => {
    const blogState = useSelector((state) => state?.blog?.blog);
    console.log(blogState);
    const { t } = useTranslation();

    const dispatch = useDispatch();
    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs = () => {
        dispatch(getAllBlogs());
    };

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <>
            <Meta title="Blogs" />
            <BreadCrumb title="Blogs" />
            <Container class1="home-wrapper-2 py-5 max-sm:!py-1">
                <div className="w-full bg-regal-light dark:bg-regal-dark-500 py-[10px] px-3 rounded-t-md mb-3 hidden max-sm:block">
                    <div className="flex items-center justify-between">
                        <Link to="/">
                            <BiArrowBack className="me-2 text-[24px] text-white" />
                        </Link>
                        <h4 className="text-xl font-medium text-white">Blogs</h4>
                        <FaBlogger className="me-2 text-[24px] text-white" />
                    </div>
                </div>
                <div className="w-full flex justify-between max-sm:flex-col max-sm:gap-3">
                    <div className="w-[21%] flex flex-col gap-3 max-lg:w-[35%] max-sm:w-full">
                        <Outstanding />
                        <div className="bg-white rounded-xl py-2 px-4">
                            <Link to="/" className="w-full">
                                <p className="py-[13px] px-2 flex items-center gap-2 bg-slate-100 hover:bg-slate-200 my-[10px] rounded-md cursor-pointer">
                                    <AiFillHome className="text-xl" />
                                    <h3 className="text-[16px] font-semibold">{t('issued_with_market')}</h3>
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className="w-[77%] flex gap-3 max-lg:w-[63%] max-sm:w-full max-sm:mb-4">
                        {blogState &&
                            blogState?.map((item, index) => {
                                return (
                                    <div key={index} className="w-[48%] max-sm:w-full">
                                        <BlogCard
                                            id={item?._id}
                                            title={item?.title}
                                            description={item?.description}
                                            image={item?.images[0]?.url}
                                            date={moment(item?.createdAt).format('MMMM Do YYYY, h:mm a')}
                                        />
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Blogs;
