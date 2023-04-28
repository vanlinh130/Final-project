import React from 'react';
import Container from '../../../components/Container';
import { slider } from '../../../utils/Data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};

const HomeSlider = () => {
    return (
        <Container class1="">
            <div className="pt-5 pb-3 max-sm:!mt-10">
                <div className="w-full flex gap-3 ">
                    <div className="w-[74%] max-lg:w-full">
                        <Slider {...settings}>
                            {slider.map((item, index) => {
                                return (
                                    <div key={index} className="rounded-2xl">
                                        <img
                                            src={item.image}
                                            className="img-fluid rounded-2xl h-full w-full"
                                            alt="main banner"
                                        />
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>

                    <div className="w-[26%] max-lg:hidden">
                        <div className="rounded-2xl">
                            <img
                                src="https://salt.tikicdn.com/cache/w750/ts/tikimsp/64/1c/be/9396dbce06feca1394d78d0b8eb71034.png.webp"
                                className="rounded-2xl h-full w-full"
                                alt="small banner"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default HomeSlider;
