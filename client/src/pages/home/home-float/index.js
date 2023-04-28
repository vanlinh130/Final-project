import React from 'react';
import Container from '../../../components/Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';

const HomeFloat = () => {
    const float = [
        {
            image: 'https://salt.tikicdn.com/cache/280x280/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg.webp',
            desc: 'Tác phẩm kinh điển',
        },
        {
            image: 'https://salt.tikicdn.com/cache/280x280/ts/product/16/8c/64/946fdf3100c1d1562f3e0f334c39d062.jpg.webp',
            desc: 'Máy lạnh - Máy điều hòa',
        },
        {
            image: 'https://salt.tikicdn.com/cache/280x280/ts/product/22/33/d3/601306a5216073499075360883c650fc.jpg.webp',
            desc: 'Truyện trinh thám',
        },
        {
            image: 'https://salt.tikicdn.com/cache/280x280/ts/product/ac/14/4a/cad7c81c1d21f8cdd778f3a56684f254.jpg.webp',
            desc: 'Sách nghệ thuật sống đẹp',
        },
        {
            image: 'https://salt.tikicdn.com/cache/280x280/ts/product/e1/04/31/7763d9035552760f627c34acfec0e12f.jpg.webp',
            desc: 'Sách Học Tiếng Anh',
        },

        {
            image: 'https://salt.tikicdn.com/cache/280x280/ts/product/06/6b/5d/f61341e6bf1d194850402fce1f92edc1.jpg.webp',
            desc: 'Sách kỹ năng làm việc',
        },
        {
            image: 'https://salt.tikicdn.com/cache/280x280/ts/product/38/68/44/b23586292aa7019e802bd2a115d47645.jpg.webp',
            desc: 'Bài học kinh doanh',
        },
        {
            image: 'https://salt.tikicdn.com/cache/280x280/ts/product/0e/aa/44/5b0904c6c7d6c0181022cd415ce3c89d.jpg.webp',
            desc: 'Kiến thức - Bách khoa',
        },
        {
            image: 'https://salt.tikicdn.com/cache/280x280/ts/product/81/bc/7b/e816f29fc6e20711f8dc9da9bde3cfa0.jpg.webp',
            desc: 'Lĩnh vực khác',
        },
        {
            image: 'https://salt.tikicdn.com/cache/280x280/ts/product/5d/f3/e0/178f1934358affe599cb0aba33a8324a.jpg.webp',
            desc: 'Truyện Giả tưởng - Huyền Bí - Phiêu Lưu',
        },
    ];

    const { t } = useTranslation();

    const floats = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Container class1="py-5 bg-[#f5f5f7] max-sm:hidden">
            <div className="bg-white rounded-2xl p-4">
                <div className="mb-1 flex items-center gap-2 max-sm:flex-wrap">
                    <h3 className="text-xl font-semibold max-sm:text-2xl">{t('float_item_list')}</h3>
                </div>
                <div className="w-full pt-4">
                    <Slider {...floats}>
                        {float.map((item, index) => {
                            return (
                                <div key={index} className="w-[12%] cursor-pointer p-2 z-50">
                                    <div className="flex flex-col justify-center items-center border-[1px] border-[#ccc] rounded-md">
                                        <img src={item.image} alt="trademark" className="h-full w-full rounded-md" />
                                        <div className="p-2">
                                            <p className="des text-[14px] font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </Container>
    );
};

export default HomeFloat;
