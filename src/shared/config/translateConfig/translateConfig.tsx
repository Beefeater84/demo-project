import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
    // i18next-http-backend
    // loads translations from your server
    // https://github.com/i18next/i18next-http-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: __IS_DEV__,
        fallbackLng: 'ru',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        load: 'languageOnly',
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        // resources: {
        //     en: {
        //         // translation,
        //     },
        // },
    });

export default i18n;

// public/locales/ru/translation.json
// http://localhost:3000/locales/ru/translation.json