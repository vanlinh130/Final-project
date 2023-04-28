import { useTranslation } from 'react-i18next';
import Container from '../../../components/Container';
import { brandPrice } from '../../../utils/Data';

const HomeBrandPrice = () => {
    const { t } = useTranslation();

    return (
        <Container class1="py-5 bg-[#f5f5f7]">
            <div className="rounded-2xl bg-white p-4">
                <div className="mb-1">
                    <h3 className="text-xl font-semibold max-sm:text-2xl">{t('brand_goods_good_price')}</h3>
                </div>
                <div className="w-full pt-4 flex justify-between max-lg:flex-wrap">
                    {brandPrice.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="w-[33%] flex gap-2 cursor-pointer max-lg:w-[49%] max-lg:mb-3 max-sm:w-full"
                            >
                                <div className="w-1/2">
                                    <img src={item.image_left} alt="trademark" className="h-full w-full rounded-md" />
                                </div>
                                <div className="w-1/2 flex-col ">
                                    <div className="w-full pb-1">
                                        <img
                                            src={item.image_right_top}
                                            alt="trademark"
                                            className="h-full w-full rounded-md"
                                        />
                                    </div>
                                    <div className="w-full pt-1">
                                        <img
                                            src={item.image_right_bottom}
                                            alt="trademark"
                                            className="h-full w-full rounded-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Container>
    );
};

export default HomeBrandPrice;
