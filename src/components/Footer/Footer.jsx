import { useEffect, useState } from "react";
import ArrowIcon from "../Logo/ArrowIcon"
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


export default function Footer() {

    const { t } = useTranslation();


    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);


    return (
        <motion.footer
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >

            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-2">
                    <span className="font8 pt-[120px] font-bold uppercase">MEL</span>
                    <p className="font3">{t("footer.made")}</p>
                </div>
                <p className="text-custom-gray font3 hidden md:block">{t("footer.based")}</p>
                <div className="flex flex-col md:flex-row gap-2">
                    <a target="_blank"href='https://github.com/Melaniecrzx' className=" text-custom-gray font3 hover:text-dark dark:hover:text-light flex gap-2 items-center cursor-pointer">Github
                        <ArrowIcon />
                    </a>
                    <a className="text-custom-gray font3 hover:text-dark dark:hover:text-light flex gap-2 items-center cursor-pointer">LinkedIn
                        <ArrowIcon />
                    </a>
                </div>

                <div className=" hidden md:flex flex-col text-right gap-2">
                    <span className="font7">(2026)</span>
                    <span className="font7">{time.toLocaleTimeString('en-US', { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit' })} GMT+1</span>
                </div>
            </div>
        </motion.footer>
    )
}