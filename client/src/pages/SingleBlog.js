import React, { useEffect } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import blog1 from '../images/blog-1.jpg';
import Container from './../components/Container';
import { useDispatch, useSelector } from 'react-redux';
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

    return (
        <div>
            <Meta title={blogState?.title} />
            <BreadCrumb title={blogState?.title} />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                            <Link to="/blogs" className="d-flex align-items-center gap-10">
                                <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
                            </Link>
                            <h3 className="title">{blogState?.title}</h3>
                            <img
                                src={blogState?.images[0]?.url ? blogState?.images[0]?.url : blog1}
                                className="img-fluid w-100 my-4"
                                alt="images"
                            />
                            <p dangerouslySetInnerHTML={{ __html: blogState?.description }}></p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SingleBlog;
