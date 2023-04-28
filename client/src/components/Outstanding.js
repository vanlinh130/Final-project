import React from 'react';
import { useTranslation } from 'react-i18next';

const Outstanding = () => {
    const { t } = useTranslation();
    const outstanding = [
        {
            image: 'https://salt.tikicdn.com/cache/100x100/ts/upload/ae/72/a3/d4503c3ece932dc8c57d2d5c97cd6ffc.png.webp',
            title: t('cheap_Price_every_day'),
        },
        {
            image: 'https://salt.tikicdn.com/cache/100x100/ts/upload/40/e8/d2/c1a9921c81741654ab6df7b0910b2bb2.png.webp',
            title: t('buy_big_discounts'),
        },
        {
            image: 'https://salt.tikicdn.com/cache/100x100/ts/upload/5e/29/e3/fae84abe2d72ee3c30292108ae967f15.png.webp',
            title: t('cheap_household_appliances'),
        },
        {
            image: 'https://salt.tikicdn.com/cache/100x100/ts/upload/3c/ce/96/db8c083610e45b78d8f7662f0013faa8.png.webp',
            title: t('discharge_of_stock'),
        },
        {
            image: 'https://salt.tikicdn.com/cache/100x100/ts/upload/20/68/cf/6d4adbdbcd1c35b0a438a655d9a420d0.png.webp',
            title: t('discount_code_out'),
        },
        {
            image: 'https://salt.tikicdn.com/cache/100x100/ts/upload/02/02/df/8732a7d47ac8739b296fc05864f75acd.png.webp',
            title: t('affiliate_offer'),
        },
        {
            image: 'https://salt.tikicdn.com/cache/100x100/ts/tmp/6f/4e/41/93f72f323d5b42207ab851dfa39d44fb.png.webp',
            title: t('buy_first_pay_later'),
        },
        {
            image: 'https://salt.tikicdn.com/cache/100x100/ts/upload/1e/27/a7/e2c0e40b6dc45a3b5b0a8e59e2536f23.png.webp',
            title: t('card_and_wallet_offers'),
        },
        {
            image: 'https://salt.tikicdn.com/cache/100x100/ts/upload/6f/d0/68/76b6c01998c3f45f70b843c390097690.png.webp',
            title: t('insurance_market_360'),
        },
        {
            image: 'https://salt.tikicdn.com/cache/100x100/ts/upload/44/58/fc/804a2dfd610e9075ad5a8f0d13f2b21a.png.webp',
            title: t('market_exchange'),
        },
    ];

    return (
        <div className="bg-white rounded-xl py-2 px-4">
            <h3 className="text-[16px] font-semibold py-2 max-sm:text-[20px]">{t('outstanding')}</h3>
            <ul>
                {outstanding.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className="py-2 px-2 flex items-center gap-2 bg-slate-100 hover:bg-slate-200 my-[10px] rounded-md cursor-pointer"
                        >
                            <img src={item.image} alt="images" className="h-[30px] w-[30]" />
                            <span className="text-sm">{item.title}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Outstanding;
