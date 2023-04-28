import React from 'react';
import Container from '../../../components/Container';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HomeServices = () => {
    const { t } = useTranslation();

    const services = [
        {
            title: t('wet_must_freeship'),
            image: 'https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi',
        },
        {
            title: t('discount_code'),
            image: 'https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi',
        },
        {
            title: t('wednesday_freeship'),
            image: 'https://cf.shopee.vn/file/a8d76bca057ba0b117dcf8e1ef068d16_xhdpi',
        },
        {
            title: t('catch_trend'),
            image: 'https://cf.shopee.vn/file/vn-50009109-1975fb1af4ae3c22878d04f6f440b6f9_xhdpi',
        },
        {
            title: t('voucher_up'),
            image: 'https://cf.shopee.vn/file/vn-50009109-f6c34d719c3e4d33857371458e7a7059_xhdpi',
        },
        {
            title: t('good_price_brands'),
            image: 'https://cf.shopee.vn/file/8d6d5ee795e7675fed39d31ba04c3b92_xhdpi',
        },
        {
            title: t('international_goods'),
            image: 'https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi',
        },
        {
            title: t('recharge_phones'),
            image: 'https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi',
        },
        {
            title: t('share_the_coin_warehouse'),
            image: 'https://cf.shopee.vn/file/e90d0cb881d603a7f7cb4e0c9ff6a287_xhdpi',
        },
    ];

    return (
        <Container class1="pb-5 pt-4">
            <div className="w-full gap-3 flex max-lg:flex-wrap  max-sm:!gap-3">
                {services.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="w-[10%] flex justify-center mt-1 hover:!mt-0 max-lg:w-[23%] max-lg:my-3 max-sm:w-[48%]"
                        >
                            <Link>
                                <div className="flex flex-col ">
                                    <div className="w-full flex items-center justify-center">
                                        <img src={item.image} alt="service" className="h-[45px] w-[45px]" />
                                    </div>
                                    <div className="w-full text-center my-2">
                                        <span className="text-[15px] text-black hover:text-[#bf4800] ">
                                            {item.title}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};

export default HomeServices;
