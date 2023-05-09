import React, { useEffect } from 'react';
import { Table } from 'antd';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlogs } from '../features/blogs/blogSlide';

const columns = [
    {
        title: 'SNo',
        dataIndex: 'key',
    },
    {
        title: 'Title',
        dataIndex: 'title',
    },
    {
        title: 'Category',
        dataIndex: 'category',
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];

const Bloglist = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogs());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getBlogState = useSelector((state) => state.blogs.blogs);
    const data1 = [];
    for (let i = 0; i < getBlogState.length; i++) {
        data1.push({
            key: i + 1,
            title: getBlogState[i].title,
            category: getBlogState[i].category,
            action: (
                <>
                    <Link to="/" className="fs-3 text-danger ">
                        <BiEdit />
                    </Link>
                    <Link to="/" className="fs-3 text-danger ms-3">
                        <AiFillDelete />
                    </Link>
                </>
            ),
        });
    }

    return (
        <div>
            <h3 className="mb-4 title">Blog List</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    );
};

export default Bloglist;
