import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiEdit } from 'react-icons/fi';
import { useFormik } from 'formik';
import * as yup from 'yup';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import { updateProfile } from '../features/user/useSlide';

const profileSchema = yup.object({
    firstname: yup.string().required('First Name Is Required'),
    lastname: yup.string().required('Last Name Is Required'),
    email: yup.string().email('Email Should Be Valid').required('Email Address is Required'),
    mobile: yup.string().required('Mobile No Is Required'),
});

const Profile = () => {
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.auth.user);
    const [edit, setEdit] = useState(true);

    console.log(userState);
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstname: userState?.firstname,
            lastname: userState?.lastname,
            email: userState?.email,
            mobile: userState?.mobile,
        },
        validationSchema: profileSchema,
        onSubmit: (values) => {
            dispatch(updateProfile(values));
            setEdit(true);
        },
    });

    return (
        <>
            <BreadCrumb title="My Profile" />
            <Container class1="store-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center">
                            <h3 className="my-3">Update Profile</h3>
                            <FiEdit className="fs-3" onClick={() => setEdit(false)} />
                        </div>
                    </div>
                    <div className="col-12">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="example1" className="form-label">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstname"
                                    className="form-control"
                                    id="example1"
                                    disabled={edit}
                                    onChange={formik.handleChange('firstname')}
                                    onBlur={formik.handleBlur('firstname')}
                                    value={formik.values.firstname}
                                />
                                <div className="error">{formik.touched.firstname && formik.errors.firstname}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="example2" className="form-label">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastname"
                                    className="form-control"
                                    id="example2"
                                    disabled={edit}
                                    onChange={formik.handleChange('lastname')}
                                    onBlur={formik.handleBlur('lastname')}
                                    value={formik.values.lastname}
                                />
                                <div className="error">{formik.touched.lastname && formik.errors.lastname}</div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    disabled={edit}
                                    aria-describedby="emailHelp"
                                    onChange={formik.handleChange('email')}
                                    onBlur={formik.handleBlur('email')}
                                    value={formik.values.email}
                                />
                                <div className="error">{formik.touched.email && formik.errors.email}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail2" className="form-label">
                                    Mobile No
                                </label>
                                <input
                                    type="number"
                                    name="mobile"
                                    className="form-control"
                                    id="exampleInputEmail2"
                                    disabled={edit}
                                    onChange={formik.handleChange('mobile')}
                                    onBlur={formik.handleBlur('mobile')}
                                    value={formik.values.mobile}
                                />
                                <div className="error">{formik.touched.mobile && formik.errors.mobile}</div>
                            </div>
                            {edit === false && (
                                <button type="submit" className="btn btn-primary">
                                    Save
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Profile;
