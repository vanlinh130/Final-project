import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = (props) => {
    const { id, title, description, image, date } = props;
    return (
        <div className="bg-white rounded-lg hover:shadow ">
            <div className="card-image">
                <img
                    src={image ? image : 'https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_960_720.jpg'}
                    className=" img-fluid w-full h-full rounded-t-lg"
                    alt="blog"
                />
            </div>
            <div className="p-4">
                <p className="text-[13px] leading-6 uppercase font-normal text-[#777777] max-sm:text-[18px]">{date}</p>
                <h5 className="text-[18px] text-black font-semibold max-sm:text-[24px] py-3">{title}</h5>
                <p
                    className="text-[13px] leading-6 text-[#777777] max-sm:text-[18px]"
                    dangerouslySetInnerHTML={{ __html: description?.substr(0, 70) + '...' }}
                ></p>
                <Link to={'/blog/' + id} className="w-full py-2">
                    <button
                        type="button"
                        className="flex items-center justify-center py-2 px-3 bg-[#ff424e] hover:bg-[#f75e68] text-lg gap-2 text-white border-[1px] border-white rounded-[4px] max-sm:w-full"
                    >
                        <span>Read More</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
