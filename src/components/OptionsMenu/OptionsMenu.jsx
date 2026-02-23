import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"
import ArrowIcon from "../Logo/ArrowIcon"
import { useTheme } from "../../store/ThemeProvider";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import CloseIcon from "../Logo/CloseIcon";
import { useEffect, useRef } from "react";

export default function OptionsMenu({ isOptionsMenuOpen, setIsOptionsMenuOpen }) {
    const { t } = useTranslation();
    const { isDark, toggleTheme } = useTheme();

    const navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsOptionsMenuOpen(false);
            }
        };
        if (isOptionsMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isOptionsMenuOpen]);

    const navlinks = [
        { id: 1, label: t("nav.home"), path: '/' },
        { id: 2, label: t("nav.about"), path: '/about' },
        { id: 3, label: t("nav.work"), path: '/work' },
        { id: 4, label: t("nav.contact"), path: '/contact' },
    ]

    return (
        <motion.nav
            className="fixed top-0 left-0 z-50 w-3/4 max-w-xs h-full 
                       flex flex-col justify-between
                       bg-light dark:bg-dark 
                       shadow-2xl p-8 md:hidden"
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            ref={navRef}
        >
            <div className="flex flex-col gap-10">
                <span className="font2 font-black text-xl">M C</span>

                <ul className="flex flex-col gap-2">
                    {navlinks.map((linkPage) => (
                        <li key={linkPage.id}>
                            <NavLink
                                to={linkPage.path}
                                onClick={() => setIsOptionsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `font3 text-lg py-3 px-4 rounded-lg flex items-center gap-2 transition-all
                                    ${isActive
                                        ? 'bg-dark text-light dark:bg-light dark:text-dark font-semibold'
                                        : 'hover:bg-dark/10 dark:hover:bg-light/10'
                                    }`
                                }
                            >
                                {linkPage.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col gap-3">
                <LanguageSwitcher />
                <button
                    onClick={toggleTheme}
                    className="w-full dark:border-light border-dark border rounded-lg px-4 py-2 
                               font3 uppercase flex font-medium gap-3 items-center justify-center
                               hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark 
                               transition-all"
                >
                    {isDark ? t("nav.dark") : t("nav.light")}
                    <ArrowIcon />
                </button>
            </div>

            {/* Close button */}
            <button
                onClick={() => setIsOptionsMenuOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg
                           hover:bg-dark/10 dark:hover:bg-light/10 transition-all"
            >
                <CloseIcon />
            </button>
        </motion.nav>
    )
}