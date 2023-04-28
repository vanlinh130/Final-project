import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from './../components/Container';
import { getABlog } from '../features/blogs/blogSlice';

const SingleBlog = () => {
    const blogState = useSelector((state) => state?.blog?.singleBlog);
    const location = useLocation();
    const getBlogId = location.pathname.split('/')[2];
    const dispatch = useDispatch();

    useEffect(() => {
        getBlog();
    }, []);

    const getBlog = () => {
        dispatch(getABlog(getBlogId));
    };

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <div>
            <Meta title={blogState?.title} />
            <BreadCrumb title={blogState?.title} />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="w-full">
                    <Link to="/blogs" className="flex items-center gap-4 text-[18px] mb-4">
                        <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
                    </Link>
                    <h3 className="text-[24px] font-semibold">{blogState?.title}</h3>
                    <img
                        src={
                            blogState?.images[0]?.url
                                ? blogState?.images[0]?.url
                                : 'https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_960_720.jpg'
                        }
                        className="img-fluid w-100 my-4"
                        alt="images"
                    />
                    <p className="text-[14px] " dangerouslySetInnerHTML={{ __html: blogState?.description }}></p>
                </div>
            </Container>
        </div>
    );
};

export default SingleBlog;
