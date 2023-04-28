import React from 'react';
import message from '../images/messenger.png';

const Checkbox = () => {
    const checkboxs = [
        {
            id: 1,
            Link: 'https://www.facebook.com/profile.php?id=100033522635647',
            image: message,
        },
        {
            id: 2,
            Link: 'https://id.zalo.me/account?continue=https%3A%2F%2Fchat.zalo.me%2F',
            image: 'https://seami.vn/wp-content/uploads/2021/12/zalo-2.png',
        },
    ];
    return (
        <div className="fixed bottom-[10px] left-[50px] z-50 max-sm:hidden">
            <div className="flex flex-col">
                {checkboxs.map((item, index) => {
                    return (
                        <a href={item.Link} key={index} className="checkbox-item">
                            <img src={item.image} alt="images" className="w-full h-full" />
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default Checkbox;
