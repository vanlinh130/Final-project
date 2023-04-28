import { useTranslation } from 'react-i18next';
import Container from '../../../components/Container';
import { brandGenuine } from '../../../utils/Data';

const HomeBrandGenuine = () => {
    const { t } = useTranslation();

    return (
        <Container class1="py-5 bg-[#f5f5f7]">
            <div className="home-brand-genuine rounded-2xl p-4">
                <div className="mb-1 flex items-center gap-2 max-sm:flex-wrap">
                    <h3 className="text-xl font-semibold max-sm:text-2xl">{t('genuine_brand')}</h3>
                    <img
                        src="https://salt.tikicdn.com/ts/tka/71/61/5d/dee57a81920f1f4e4dcc3b5878d9bfed.png"
                        alt=""
                        className="h-4 w-[70px]"
                    />
                </div>
                <div className="w-full pt-4 flex justify-between max-lg:flex-wrap">
                    {brandGenuine.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="w-[16%] flex gap-2 cursor-pointer border-[1px] border-[#ccc] rounded-md max-lg:w-[32%] max-lg:mb-3 max-sm:w-[48%] "
                            >
                                <div className="">
                                    <img src={item.image} alt="trademark" className="h-full w-full rounded-md" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Container>
    );
};

export default HomeBrandGenuine;
