import React from 'react';

const Checkbox = () => {
    const checkboxs = [
        {
            id: 1,
            Link: 'https://www.facebook.com/profile.php?id=100033522635647',
            image: 'https://bizweb.dktcdn.net/100/468/709/themes/882182/assets/icon_facebook.svg?1681370918143',
        },
        {
            id: 2,
            Link: 'https://id.zalo.me/account?continue=https%3A%2F%2Fchat.zalo.me%2F',
            image: 'https://seami.vn/wp-content/uploads/2021/12/zalo-2.png',
        },
    ];
    return (
        <div className="checkbox">
            <div className="checkbox-list">
                {checkboxs.map((item, index) => {
                    return (
                        <a href={item.Link} key={index} className="checkbox-item">
                            <img src={item.image} alt="images" />
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default Checkbox;
