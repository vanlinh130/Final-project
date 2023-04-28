import React from 'react';

const CustomInput = (props) => {
    const { label, type, name, placeholder, classes, value, onChange, onBlur, onClick, iconEye, onClickHandleEye } =
        props;
    return (
        <div className="input-form relative">
            <div className="mb-1">
                <span>{label}</span>
            </div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={`form-control ${classes}`}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onClick={onClick}
            />
            <div
                className="absolute right-[14px] !top-[16px] cursor-pointer text-[18px] hover:opacity-90"
                onClick={onClickHandleEye}
            >
                {iconEye}
            </div>
        </div>
    );
};

export default CustomInput;
