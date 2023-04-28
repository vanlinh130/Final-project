import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import newsletter from '../images/newsletter.png';
import { useTranslation } from 'react-i18next';

const Footer = ({ footerBtn = true }) => {
    const { t } = useTranslation();

    const customers = [
        {
            id: 1,
            title: t('help_center'),
            link: '',
        },
        {
            id: 2,
            title: t('market_easy_blog'),
            link: '',
        },
        {
            id: 3,
            title: t('market_easy_mall'),
            link: '',
        },
        {
            id: 4,
            title: t('shopping_guide'),
            link: '',
        },
        {
            id: 5,
            title: t('sales_guide'),
            link: '',
        },
        {
            id: 6,
            title: t('pay'),
            link: '',
        },
        {
            id: 7,
            title: t('market_easy_coins'),
            link: '',
        },
        {
            id: 8,
            title: t('transport'),
            link: '',
        },

        {
            id: 9,
            title: t('returns_refunds'),
            link: '',
        },
        {
            id: 10,
            title: t('warranty_policy'),
            link: '',
        },
    ];

    const infoShops = [
        {
            id: 1,
            title: t('about_market_ease_vietnam'),
            link: '',
        },
        {
            id: 2,
            title: t('recruitment'),
            link: '',
        },
        {
            id: 3,
            title: t('market_ease_terms'),
            link: '',
        },
        {
            id: 4,
            title: t('privacy_policy'),
            link: '',
        },
        {
            id: 5,
            title: t('genuine'),
            link: '',
        },

        {
            id: 6,
            title: t('seller_channel'),
            link: '',
        },
        {
            id: 7,
            title: t('flash_sales'),
            link: '',
        },
        {
            id: 8,
            title: t('market_ease_affiliate_program'),
            link: '',
        },
        {
            id: 9,
            title: t('contact_media'),
            link: '',
        },
    ];

    const pay = [
        {
            image: 'https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/0217f1d345587aa0a300e69e2195c492',
        },
    ];

    const unit = [
        {
            image: 'https://down-vn.img.susercontent.com/file/5e7282bd0f7ee0872fdb0bd1d40fbe9e',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/d10b0ec09f0322f9201a4f3daf378ed2',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/77bf96a871418fbc21cc63dd39fb5f15',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/59270fb2f3fbb7cbc92fca3877edde3f',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/957f4eec32b963115f952835c779cd2c',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/0d349e22ca8d4337d11c9b134cf9fe63',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/3900aefbf52b1c180ba66e5ec91190e5',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/6e3be504f08f88a15a28a9a447d94d3d',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/b8348201b4611fc3315b82765d35fc63',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/0b3014da32de48c03340a4e4154328f6',
        },
    ];

    return (
        <div className="bg-regal-light dark:bg-regal-dark-500">
            <div className="container-xxl ">
                {footerBtn && (
                    <footer className="w-full flex items-center py-4 border-b-[1px] border-b-white max-sm:flex-wrap">
                        <div className="w-[45%] max-sm:hidden">
                            <div className="flex items-center gap-3">
                                <img src={newsletter} alt="newsletter" />
                                <h2 className="text-white">{t('sign_up')}</h2>
                            </div>
                        </div>
                        <div className="w-[55%] max-sm:w-full">
                            <div className="w-full relative">
                                <input
                                    className="w-full py-2 px-2 rounded-md"
                                    type="text"
                                    placeholder={t('subscribe')}
                                />
                                <span className="py-1 px-4 text-white bg-regal-light dark:bg-regal-dark-500 absolute right-1 top-1 rounded-r-md">
                                    {t('subscribe')}
                                </span>
                            </div>
                        </div>
                    </footer>
                )}

                <footer className="w-full flex py-4 justify-between border-b-[1px] border-b-white max-lg:flex-wrap">
                    <div className="w-[23%] flex flex-col text-white max-sm:w-[48%]">
                        <h3 className="py-2 font-normal">{t('customer_care')}</h3>
                        {customers.map((item, i) => {
                            return (
                                <Link to={item.link} key={i} className="hover:text-white py-1">
                                    <span className="text-[14px] hover:ml-[2px]">{item.title}</span>
                                </Link>
                            );
                        })}
                    </div>
                    <div className="w-[23%] flex flex-col text-white max-sm:w-[48%]">
                        <h3 className="py-2 font-normal">{t('about_market_ease')}</h3>
                        {infoShops.map((item, i) => {
                            return (
                                <Link to={item.link} key={i} className="hover:text-white py-1">
                                    <span className="text-[14px] hover:ml-[2px]">{item.title}</span>
                                </Link>
                            );
                        })}
                    </div>
                    <div className="w-[23%] flex flex-col text-white max-sm:w-[48%] max-sm:mt-3">
                        <h3 className="py-2 font-normal">{t('pays')}</h3>
                        <div className="flex flex-wrap gap-2">
                            {pay.map((item, i) => {
                                return <img key={i} src={item.image} alt="pay" className="p-1 bg-white rounded-sm" />;
                            })}
                        </div>
                        <div className="max-sm:hidden">
                            <h3 className="pb-2 pt-4 font-normal">{t('transportation_unit')}</h3>
                            <div className="flex flex-wrap gap-2">
                                {unit.map((item, i) => {
                                    return (
                                        <img key={i} src={item.image} alt="pay" className="p-1 bg-white rounded-sm" />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="w-[23%] flex flex-col text-white max-sm:w-[48%] max-sm:mt-3">
                        <h3 className="py-2 font-normal">{t('follow_us_on_women')}</h3>
                        <Link to="" className="hover:text-white py-1">
                            <div className="flex items-center gap-3 hover:ml-[2px]">
                                <BsFacebook />
                                <span className="text-[14px]">Facebook</span>
                            </div>
                        </Link>
                        <Link to="" className="hover:text-white py-1">
                            <div className="flex items-center gap-3 hover:ml-[2px]">
                                <BsInstagram />
                                <span className="text-[14px]">Instagram </span>
                            </div>
                        </Link>
                        <Link to="" className="hover:text-white py-1">
                            <div className="flex items-center gap-3 hover:ml-[2px]">
                                <BsLinkedin />
                                <span className="text-[14px]">Linkedin</span>
                            </div>
                        </Link>
                        <Link to="" className="hover:text-white py-1">
                            <div className="flex items-center gap-3 hover:ml-[2px]">
                                <BsGithub />
                                <span className="text-[14px]">Github </span>
                            </div>
                        </Link>
                    </div>
                    <div className="w-[23%] flex flex-col text-white max-sm:w-[48%] max-sm:mt-3">
                        <h3 className="py-2 font-normal">{t('download_market_ease_app_now')}</h3>
                        <div className="flex w-full">
                            <div className="w-[50%]">
                                <img
                                    src="https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472"
                                    alt=""
                                    className="w-[78%] "
                                />
                            </div>
                            <div className="w-[50%] flex flex-col gap-2">
                                <img
                                    src="https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163"
                                    alt=""
                                    className="p-1 bg-white w-[70%]"
                                />
                                <img
                                    src="https://down-vn.img.susercontent.com/file/ae7dced05f7243d0f3171f786e123def"
                                    alt=""
                                    className="p-1 bg-white w-[70%]"
                                />
                                <img
                                    src="https://down-vn.img.susercontent.com/file/35352374f39bdd03b25e7b83542b2cb0"
                                    alt=""
                                    className="p-1 bg-white w-[70%]"
                                />
                            </div>
                        </div>
                    </div>
                </footer>

                <footer className="w-full text-white">
                    <div className="py-4 flex items-center justify-between max-sm:flex-wrap ">
                        <div className="w-32% max-sm:text-center">
                            <p className="text-[14px] flex">
                                &copy; {new Date().getFullYear()} {new Date().getDate()}; Market-Ease.
                                <p className="ml-1">{t('all_rights_reserved')}</p>
                            </p>
                        </div>
                        <div className="w-66% max-sm:text-center">
                            <span className="text-[14px] px-2">{t('country_region')} Singapore</span>
                            <span className="text-[14px] px-2 border-l-[1px] border-l-white">Indonesia</span>
                            <span className="text-[14px] px-2 border-l-[1px] border-l-white">Đài Loan</span>
                            <span className="text-[14px] px-2 border-l-[1px] border-l-white">Thái Lan</span>
                            <span className="text-[14px] px-2 border-l-[1px] border-l-white">Malaysia</span>
                            <span className="text-[14px] px-2 border-l-[1px] border-l-white">Việt Nam</span>
                            <span className="text-[14px] px-2 border-l-[1px] border-l-white">Philippines</span>
                            <span className="text-[14px] px-2 border-l-[1px] border-l-white">Brazil</span>
                            <span className="text-[14px] px-2 border-l-[1px] border-l-white">México</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center py-4 max-sm:hidden ">
                        <span className="text-[14px] px-4">{t('privacy_policy_es')}</span>
                        <span className="text-[14px] px-4 border-l-[1px] border-l-white">
                            {t('operation_regulations_es')}
                        </span>
                        <span className="text-[14px] px-4 border-l-[1px] border-l-white">
                            {t('shipping_policy_es')}
                        </span>
                        <span className="text-[14px] px-4 border-l-[1px] border-l-white">
                            {t('refund_and_policy_es')}
                        </span>
                    </div>

                    <div className="flex flex-col items-center justify-center py-4 max-sm:text-center max-sm:mb-7">
                        <p className="text-[14px] flex">{t('address_footer')}</p>
                        <p className="text-[14px] mt-1">{t('content_footer')}</p>
                        <p className="text-[14px] mt-1">{t('enterprise_code_footer')}</p>
                        <p className="text-[14px] mt-1">{t('copyright')}</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
