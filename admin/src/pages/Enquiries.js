import React, { useEffect } from 'react';
import { Table } from 'antd';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getEnquiries } from '../features/enquiry/enquirySlide';
import { Link } from 'react-router-dom';

const columns = [
    {
        title: 'SNo',
        dataIndex: 'key',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Mobile',
        dataIndex: 'mobile',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];

const Enquiries = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEnquiries());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const enqState = useSelector((state) => state.enquiry.enquiries);

    const data1 = [];
    for (let i = 0; i < enqState.length; i++) {
        data1.push({
            key: i + 1,
            name: enqState[i].name,
            email: enqState[i].email,
            mobile: enqState[i].mobile,
            status: (
                <>
                    <select name="" className="form-control form-select" id="">
                        <option value="">Set Status</option>
                    </select>
                </>
            ),
            action: (
                <>
                    <Link to="/" className="fs-3 text-danger ms-3">
                        <AiFillDelete />
                    </Link>
                </>
            ),
        });
    }

    return (
        <div>
            <h3 className="mb-4 title">Enquiries</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    );
};

export default Enquiries;
