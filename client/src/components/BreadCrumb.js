import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const BreadCrumb = (props) => {
    const { t } = useTranslation();
    const { title } = props;

    return (
        <div className="bread-crumb mb-0 py-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <p className="text-center mb-0">
                            <Link to="/" className="text-dark">
                                {t('home')} &nbsp;
                            </Link>
                            / {title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadCrumb;
