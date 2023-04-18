import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = (props) => {
    const { id, title, description, image, date } = props;
    return (
        <div className="blog-card">
            <div className="card-image">
                <img
                    src={image ? image : 'https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_960_720.jpg'}
                    className=" img-fluid w-100"
                    alt="blog"
                />
            </div>
            <div className="blog-content">
                <p className="date">{date}</p>
                <h5 className="title">{title}</h5>
                <p className="desc" dangerouslySetInnerHTML={{ __html: description?.substr(0, 70) + '...' }}></p>
                <Link to={'/blog/' + id} className="button">
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
