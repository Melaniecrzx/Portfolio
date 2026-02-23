import { NavLink } from "react-router-dom"
import ArrowIcon from "../Logo/ArrowIcon"
import { useTheme } from "../../store/ThemeProvider"
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import MenuIcon from "../Logo/MenuIcon";
import { useState } from "react";
import OptionsMenu from "../OptionsMenu/OptionsMenu";
import { AnimatePresence } from "framer-motion";

export default function Header() {

    const { t } = useTranslation();

    const { isDark, toggleTheme } = useTheme();

    const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState(false);


    const navlinks = [
        { id: 1, label: t("nav.home"), path: '/' },
        { id: 2, label: t("nav.about"), path: '/about' },
        { id: 3, label: t("nav.work"), path: '/work' },
        { id: 4, label: t("nav.contact"), path: '/contact' },
    ]

    return (

        <>

            <nav className="top-0 left-5 right-5 z-50 flex justify-between py-4 px-8 items-center">
                <span className="font2 font-black">M C</span>
                <ul className="hidden md:flex gap-8">
                    {navlinks.map((linkPage) => (
                        <li className='font3 hover:border-b-2 dark:hover:border-light hover:border-dark transition-all ease-in-out' key={linkPage.id}>
                            <NavLink to={`${linkPage.path}`}>
                                {linkPage.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="hidden md:flex gap-4 items-center">
                    <LanguageSwitcher />
                    <button
                        onClick={() => {
                            toggleTheme();
                        }}

                        className="dark:border-light border-dark border rounded-lg px-4 py-2 font3 uppercase flex font-medium gap-3 items-center hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all">
                        {isDark ? t("nav.dark") : t("nav.light")}
                        <ArrowIcon />
                    </button>
                </div>
                <button
                    onClick={() => setIsOptionsMenuOpen(true)}
                    className="block md:hidden">
                    <MenuIcon />
                </button>

            </nav>
            <AnimatePresence>
                {isOptionsMenuOpen && (
                    <OptionsMenu isOptionsMenuOpen={isOptionsMenuOpen} setIsOptionsMenuOpen={setIsOptionsMenuOpen} />
                )}
            </AnimatePresence>
        </>

    )
}