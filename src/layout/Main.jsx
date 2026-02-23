import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Cross from "../ui/Cross";
import Footer from "../components/Footer/Footer";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "../ui/ScrollToTop";
import { useTheme } from "../store/ThemeProvider";
import Cursor from "../components/Cursor/Cursor"


export default function Main() {
    const location = useLocation();
    const { isDark } = useTheme();

    return (
        <>
            <Cursor/>
            <ScrollToTop />

            {/* Rideau global — couvre tout y compris le Header */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    className={`fixed inset-0 z-[100] origin-bottom pointer-events-none ${isDark ? 'bg-dark' : 'bg-light'}`}
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                />
            </AnimatePresence>

            <div className="grid grid-cols-[5%_90%_5%] min-h-screen">
                {/* Colonne gauche */}
                <div className="relative z-10">
                    <div className="absolute right-0 top-0 h-full w-px bg-gray-line"></div>
                </div>

                <div className="relative">
                    {/* Header fixe */}
                    <div className="fixed top-0 left-[5%] right-[5%] z-40 bg-light dark:bg-dark">
                        <Header />
                        <Cross left="0" top="100%" />
                        <Cross right="0" top="100%" />
                        <div className="absolute z-20 left-0 right-0 bottom-0 h-px bg-gray-line"></div>
                    </div>

                    {/* Lignes de grille */}
                    <div className="fixed top-[80px] left-[5%] right-[5%] h-screen pointer-events-none z-10">
                        <div className="absolute right-[25%] top-0 h-full w-px bg-gray-line"></div>
                        <div className="absolute right-[50%] top-0 h-full w-px bg-gray-line"></div>
                        <div className="absolute left-[25%] top-0 h-full w-px bg-gray-line"></div>
                    </div>

                    {/* Contenu */}
                    <div className="pt-[80px] relative z-20">
                        <Outlet key={location.pathname} />
                    </div>

                    <div className="pt-[25px] md:pt-[120px] pb-10 px-5 relative z-20">
                        <Footer />
                    </div>
                </div>

                {/* Colonne droite */}
                <div className="relative">
                    <div className="absolute left-0 top-0 h-full w-px bg-gray-line"></div>
                </div>
            </div>
        </>
    )
}
