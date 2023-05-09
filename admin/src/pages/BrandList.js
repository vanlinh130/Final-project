import React, { useEffect } from 'react';
import { Table } from 'antd';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../features/brand/brandSlide';
import { Link } from 'react-router-dom';

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
        title: 'Action',
        dataIndex: 'action',
    },
];

const BrandList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBrands());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const brandState = useSelector((state) => state.brand.brands);

    const data1 = [];
    for (let i = 0; i < brandState.length; i++) {
        data1.push({
            key: i + 1,
            title: brandState[i].title,
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
            <h3 className="mb-4 title">Brands</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    );
};

export default BrandList;
