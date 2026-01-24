
import React, { createContext, useState, useContext, useEffect } from 'react';

// Import local translation files
// In a larger app, you might load these async, but for this size, importing is fine.
// Import separated translation files
import enNav from '../locales/en/navigation.json';
import enWiz from '../locales/en/wizard.json';
import enRes from '../locales/en/resources.json';
import enTakedown from '../locales/en/takedown.json';
import enCounseling from '../locales/en/counseling.json';
import enGlobal from '../locales/en/global.json';
import enLaw from '../locales/en/law.json';
import enPrivacy from '../locales/en/privacy.json';

import tlNav from '../locales/tl/navigation.json';
import tlWiz from '../locales/tl/wizard.json';
import tlRes from '../locales/tl/resources.json';
import tlTakedown from '../locales/tl/takedown.json';
import tlCounseling from '../locales/tl/counseling.json';
import tlGlobal from '../locales/tl/global.json';
import tlLaw from '../locales/tl/law.json';
import tlPrivacy from '../locales/tl/privacy.json';

import cebNav from '../locales/ceb/navigation.json';
import cebWiz from '../locales/ceb/wizard.json';
import cebRes from '../locales/ceb/resources.json';
import cebTakedown from '../locales/ceb/takedown.json';
import cebCounseling from '../locales/ceb/counseling.json';
import cebGlobal from '../locales/ceb/global.json';
import cebLaw from '../locales/ceb/law.json';
import cebPrivacy from '../locales/ceb/privacy.json';

import iloNav from '../locales/ilo/navigation.json';
import iloWiz from '../locales/ilo/wizard.json';
import iloRes from '../locales/ilo/resources.json';
import iloTakedown from '../locales/ilo/takedown.json';
import iloCounseling from '../locales/ilo/counseling.json';
import iloGlobal from '../locales/ilo/global.json';
import iloLaw from '../locales/ilo/law.json';
import iloPrivacy from '../locales/ilo/privacy.json';

import hilNav from '../locales/hil/navigation.json';
import hilWiz from '../locales/hil/wizard.json';
import hilRes from '../locales/hil/resources.json';
import hilTakedown from '../locales/hil/takedown.json';
import hilCounseling from '../locales/hil/counseling.json';
import hilGlobal from '../locales/hil/global.json';
import hilLaw from '../locales/hil/law.json';
import hilPrivacy from '../locales/hil/privacy.json';

import taglishNav from '../locales/taglish/navigation.json';
import taglishWiz from '../locales/taglish/wizard.json';
import taglishRes from '../locales/taglish/resources.json';
import taglishTakedown from '../locales/taglish/takedown.json';
import taglishCounseling from '../locales/taglish/counseling.json';
import taglishGlobal from '../locales/taglish/global.json';
import taglishLaw from '../locales/taglish/law.json';
import taglishPrivacy from '../locales/taglish/privacy.json';

const LanguageContext = createContext();

// Deep merge helper could be used, but for this structure we can manually merge
const mergeLocales = (nav, wiz, res, takedown, counseling, global, law, privacy) => {
    return {
        ...nav,
        guide: {
            ...wiz.guide,
            nodes: {
                ...wiz.guide.nodes,
                ...res.guide.nodes
            }
        },
        ...takedown,
        ...counseling,
        ...global,
        ...law,
        ...privacy
    };
};

const translations = {
    en: mergeLocales(enNav, enWiz, enRes, enTakedown, enCounseling, enGlobal, enLaw, enPrivacy),
    tl: mergeLocales(tlNav, tlWiz, tlRes, tlTakedown, tlCounseling, tlGlobal, tlLaw, tlPrivacy),
    ceb: mergeLocales(cebNav, cebWiz, cebRes, cebTakedown, cebCounseling, cebGlobal, cebLaw, cebPrivacy),
    ilo: mergeLocales(iloNav, iloWiz, iloRes, iloTakedown, iloCounseling, iloGlobal, iloLaw, iloPrivacy),
    hil: mergeLocales(hilNav, hilWiz, hilRes, hilTakedown, hilCounseling, hilGlobal, hilLaw, hilPrivacy),
    taglish: mergeLocales(taglishNav, taglishWiz, taglishRes, taglishTakedown, taglishCounseling, taglishGlobal, taglishLaw, taglishPrivacy)
};

export const LANGUAGES = [
    { code: 'en', label: 'English' },
    { code: 'tl', label: 'Tagalog' },
    { code: 'taglish', label: 'Taglish' },
    { code: 'ceb', label: 'Binisaya' },
    { code: 'ilo', label: 'Ilokano' },
    { code: 'hil', label: 'Hiligaynon' }
];

export const LanguageProvider = ({ children }) => {
    // Try to get from localStorage, default to 'en'
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('app_language') || 'en';
    });

    useEffect(() => {
        localStorage.setItem('app_language', language);
        // Optionally set document lang attribute
        document.documentElement.lang = language;
    }, [language]);

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];

        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                // Fallback to English if missing
                let fallback = translations['en'];
                for (const fk of keys) {
                    if (fallback && fallback[fk]) {
                        fallback = fallback[fk];
                    } else {
                        return key; // Return key if not found in fallback either
                    }
                }
                return fallback; // Return English fallback
            }
        }
        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
