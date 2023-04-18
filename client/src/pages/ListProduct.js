import React from 'react';

const ListProduct = ({ ListProductsOne = false, ListProductsTow = false }) => {
    const productsOne = [
        {
            id: 1,
            title: 'Ô Tô & Xe Máy & Xe Đạp',
            price: 100,
            image: 'https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn',
        },
        {
            id: 2,
            title: 'Thiết Bị Điện Tử',
            price: 300,
            image: 'https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn',
        },
        {
            id: 3,
            title: 'Điện Thoại & Phụ Kiện',
            price: 200,
            image: 'https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn',
        },
        {
            id: 4,
            title: 'Đồng Hồ',
            price: 50,
            image: 'https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn',
        },

        {
            id: 5,
            title: 'Máy Ảnh & Máy Quay Phim',
            price: 10,
            image: 'https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn',
        },
        {
            id: 6,
            title: 'Túi Ví Nữ',
            price: 60,
            image: 'https://down-vn.img.susercontent.com/file/fa6ada2555e8e51f369718bbc92ccc52_tn',
        },
        {
            id: 7,
            title: 'Bách Hóa Online',
            price: 700,
            image: 'https://down-vn.img.susercontent.com/file/c432168ee788f903f1ea024487f2c889_tn',
        },
        {
            id: 8,
            title: 'Thời Trang Nam',
            price: 500,
            image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
        },
    ];

    const productsTow = [
        {
            id: 1,
            title: 'Đồ Chơi',
            price: 500,
            image: 'https://down-vn.img.susercontent.com/file/ce8f8abc726cafff671d0e5311caa684_tn',
        },
        {
            id: 2,
            title: 'Giày Dép Nữ',
            price: 350,
            image: 'https://down-vn.img.susercontent.com/file/48630b7c76a7b62bc070c9e227097847_tn',
        },
        {
            id: 3,
            title: 'Voucher & Dịch Vụ',
            price: 250,
            image: 'https://down-vn.img.susercontent.com/file/b0f78c3136d2d78d49af71dd1c3f38c1_tn',
        },
        {
            id: 4,
            title: 'Nhà Sách Online',
            price: 50,
            image: 'https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139_tn',
        },

        {
            id: 5,
            title: 'Thể Thao & Du Lịch',
            price: 10,
            image: 'https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn',
        },
        {
            id: 6,
            title: 'Giày Dép Nam',
            price: 60,
            image: 'https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de_tn',
        },
        {
            id: 7,
            title: 'Chăm Sóc Thú Cưng',
            price: 700,
            image: 'https://down-vn.img.susercontent.com/file/cdf21b1bf4bfff257efe29054ecea1ec_tn',
        },
        {
            id: 8,
            title: 'Dụng cụ và thiết bị tiện ích',
            price: 500,
            image: 'https://down-vn.img.susercontent.com/file/e4fbccba5e1189d1141b9d6188af79c0_tn',
        },
    ];
    return (
        <div className="row">
            <div className="col-12">
                {ListProductsOne && (
                    <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                        {productsOne.map((item, index) => {
                            return (
                                <div key={index} className="d-flex align-items-center">
                                    <div>
                                        <h6>{item.title}</h6>
                                        <p className="products-price">$ {item.price}</p>
                                    </div>
                                    <div className="products-image">
                                        <img src={item.image} alt="camera" className="img-items" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
                {ListProductsTow && (
                    <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                        {productsTow.map((item, index) => {
                            return (
                                <div key={index} className="d-flex align-items-center">
                                    <div>
                                        <h6>{item.title}</h6>
                                        <p className="products-price">$ {item.price}</p>
                                    </div>
                                    <div className="products-image">
                                        <img src={item.image} alt="camera" className="img-items" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListProduct;
