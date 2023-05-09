import React, { useEffect } from 'react';
import { Table } from 'antd';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories } from '../features/pcategory/pcategorySlide';

const columns = [
    {
        title: 'SNo',
        dataIndex: 'key',
    },
    {
        title: 'Title',
        dataIndex: 'title',
        sorter: (a, b) => a.title.length - b.title.length,
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];

const CategoryList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const pCatState = useSelector((state) => state.pCategory.pCategories);

    const data1 = [];
    for (let i = 0; i < pCatState.length; i++) {
        data1.push({
            key: i + 1,
            title: pCatState[i].title,
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
            <h3 className="mb-4 title">Product Categories</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    );
};

export default CategoryList;
