import { useTranslation } from "react-i18next"

export default function LanguageSwitcher() {

    const { i18n } = useTranslation();

    const changeLanguage = async (lng) => {
        await i18n.changeLanguage(lng);
    };

    return (
        <div className="font4 uppercase text-custom-gray">
            <button onClick={() => changeLanguage('en')}
                className={i18n.language === 'en' ? 'text-dark dark:text-light font-bold' : ''}>EN</button>
            <span> / </span>
            <button onClick={() => changeLanguage('fr')}
            className={i18n.language === 'fr' ? 'text-dark dark:text-light font-bold' : ''} >FR</button>
        </div>
    )
}