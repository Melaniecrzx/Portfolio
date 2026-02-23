import StarIcon from "../components/Logo/StarIcon"
import PageTransition from "../ui/PageTransition"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Trans } from "react-i18next"



export default function About() {

    const { t } = useTranslation();


    const parcours = [
        {
            id: 1,
            date: t("about.parcours.cdi.date"),
            title: "Dassault Systèmes",
            role: t("about.parcours.cdi.title"),
        },
        {
            id: 2,
            date: t("about.parcours.stage.date"),
            title: "Dassault Systèmes",
            role: t("about.parcours.cdi.title"),
        },
        {
            id: 3,
            date: t("about.parcours.ecole.date"),
            title: "ESILV",
            role: t("about.parcours.ecole.title"),
        },
    ]

    const skills = [
        {
            id: 1,
            category: "Frontend",
            items: ["React", "JavaScript", "Tailwind CSS"]
        },
        {
            id: 2,
            category: "Backend",
            items: ["Node.js", "Express", "MongoDB"]
        },
        {
            id: 3,
            category: "Outils",
            items: ["Figma", "Git", "Postman", "Vercel", "Firebase"]
        },
    ]

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }
        })
    }

    return (
        <PageTransition>
            <section className="relative z-20 overflow-hidden px-5 mt-[20px]  md:mt-[76px] flex flex-col gap-[64px]">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-9">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-3">
                                <motion.div
                                    className="flex flex-col md:flex-row items-center gap-3"
                                    initial="hidden"
                                    animate="visible"
                                    variants={fadeUp}
                                    custom={0}
                                >
                                    <h2 className="font6 font-bold uppercase">({t("about.title")})</h2>
                                    <div className="flex gap-2.5">
                                        <StarIcon  />
                                        <StarIcon  />
                                        <StarIcon />
                                    </div>
                                </motion.div>
                                <motion.p
                                    className="text-xs text-custom-gray uppercase tracking-[0.2em]"
                                    initial="hidden"
                                    animate="visible"
                                    variants={fadeUp}
                                    custom={1}
                                >
                                    {t("about.developer")}
                                </motion.p>
                            </div>

                            <motion.p
                                className="text-lg leading-relaxed max-w-md"
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp}
                                custom={2}
                            >
                                <Trans
                                    i18nKey="about.description"
                                    components={{ 1: <span className="font-3 font-bold" /> }}
                                />
                            </motion.p>
                        </div>

                        <motion.div
                            className="flex gap-3 items-center"
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            custom={3}
                        >
                            <div className="rounded-full bg-custom-green w-2.5 h-2.5 animate-pulse" />
                            <p className="text-xs uppercase tracking-[0.2em]">{t("about.open")}</p>
                        </motion.div>
                    </div>

                    {/* Photo placeholder — remplace par ta photo */}
                    <motion.div
                        className="flex items-start justify-end"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {/* 
                            Ajoute ta photo ici :
                            <img src={photo} className="w-64 h-80 object-cover object-top grayscale" />
                        */}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <div className="flex flex-col gap-6">
                        <motion.span
                            className="text-xs text-custom-gray uppercase tracking-[0.2em]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            {t("about.parcours.title")}  ★
                        </motion.span>
                        <div className="border-l border-custom-gray pl-[2   2px] flex flex-col gap-[48px]">
                            {parcours.map((p, i) => (
                                <motion.div
                                    key={p.id}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    whileHover={{ x: 8 }}
                                    transition={{ duration: 0.2, ease: [0.76, 0, 0.24, 1] }}
                                    className="flex gap-4 group cursor-default"
                                >
                                    <span className="text-xs text-custom-gray group-hover:text-dark dark:group-hover:text-light transition-colors">
                                        (0{p.id})
                                    </span>
                                    <div className="flex flex-col gap-1">
                                        <p className="font-bold uppercase text-sm tracking-wide">
                                            {p.title}
                                            <span className="font-normal text-custom-gray ml-2 normal-case tracking-normal">
                                                — {p.date}
                                            </span>
                                        </p>
                                        <p className="text-custom-gray text-sm">{p.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <motion.span
                            className="text-xs text-custom-gray uppercase tracking-[0.2em]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            {t("about.skills")}  ★
                        </motion.span>
                        <div className="grid grid-cols-3 md:hidden gap-4">
                            {skills.map((s, si) => (
                                <motion.div
                                    key={s.id}
                                    custom={si}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    className="flex flex-col gap-2"
                                >
                                    <span className="text-xs uppercase tracking-[0.15em] font-bold">{s.category}</span>
                                    <ul className="flex flex-col gap-1.5">
                                        {s.items.map((item, index) => (
                                            <li key={index} className="text-custom-gray text-xs">{item}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                        <div className="hidden md:flex gap-[60px]">
                            {skills.map((s, si) => (
                                <motion.div
                                    key={s.id}
                                    custom={si}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    className="flex flex-col gap-3.5"
                                >
                                    <span className="text-xs uppercase tracking-[0.15em] font-bold">
                                        {s.category}
                                    </span>
                                    <ul className="flex flex-col gap-2.5">
                                        {s.items.map((item, index) => (
                                            <motion.li
                                                key={index}
                                                whileHover={{ x: 6 }}
                                                transition={{ duration: 0.15 }}
                                                className="flex gap-2 items-center group cursor-default text-sm"
                                            >
                                                <div className="w-1 h-1 rounded-full bg-custom-gray opacity-0 group-hover:opacity-100 transition-opacity" />
                                                <span className="text-custom-gray group-hover:text-dark dark:group-hover:text-light transition-colors">
                                                    {item}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Filigrane */}
                <span className="text-[40vw] md:text-[20vw] font-black opacity-5 absolute top-[10%] md:-top-[10%] left-[30%] pointer-events-none select-none">M</span>
                <span className="text-[40vw] md:text-[20vw] font-black opacity-5 absolute top-[20%] md:top-0 left-[50%] pointer-events-none select-none">C</span>

            </section>
        </PageTransition>
    )
}
