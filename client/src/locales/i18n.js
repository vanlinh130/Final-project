// import LocalStorage from '../';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTransition from './transitions/en.json';
import viTransition from './transitions/vi.json';

i18n.use(initReactI18next).init({
    resources: {
        vi: {
            translations: viTransition,
        },
        en: {
            translations: enTransition,
        },
    },
    // lng: 'vi',
    lng: localStorage.getItem('vi') || 'en',
    fallbackLng: ['vi', 'en'],
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
        escapeValue: false,
        formatSeparator: ',',
    },
});

export default i18n;
