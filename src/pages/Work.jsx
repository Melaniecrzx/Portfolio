import StarIcon from "../components/Logo/StarIcon"
import kabanPicture from "../assets/Kanban-board-demo.png"
import portfolioPicture from "../assets/Portfolio-demo.png"
import financePicture from "../assets/Finance-app.jpg"
import ArrowIcon from "../components/Logo/ArrowIcon"
import PageTransition from "../ui/PageTransition"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"


export default function Work() {

    const { t } = useTranslation();

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }
        })
    }

    const projets = [
        {
            id: 1,
            name: 'Kanban board',
            inPrgress: false,
            link: 'test',
            picture: kabanPicture,
            stack: ['React', 'Tailwind', 'Firebase']
        },
        {
            id: 2,
            name: 'Portfolio',
            inPrgress: false,
            link: 'test',
            picture: portfolioPicture,
            stack: ['React', 'Tailwind'],
        },
        {
            id: 3,
            name: 'Personal Finance App',
            inPrgress: true,
            picture: financePicture,
            stack: ['React', 'Tailwind', 'MongoDB', 'Node.JS']
        }
    ]

    return (
        <PageTransition>

            <section className=" overflow-hidden px-5 mt-[20px]  md:mt-[76px] flex flex-col gap-[48px]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    className="flex flex-col gap-3">
                    <div
                        
                        className="flex flex-col md:flex-row text-center items-center gap-3">
                        <h2 className="font6 font-bold uppercase">({t("work.title")})</h2>
                        <div className="flex gap-2.5">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                    </div>
                    <p className="font4 text-custom-gray uppercase">- 0{projets.length} {t("work.projects")}</p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    custom={0}
                    className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5">
                    {projets.map(projet => (
                        <motion.div key={projet.id}
                            whileHover="hover"
                            className="flex flex-col gap-5 group">
                            <div className="flex justify-between items-center">
                                <span>(0{projet.id})</span>
                                {projet.link ? (
                                    <a href={projet.link} target="_blank" rel="noopener noreferrer" className="rotate-45 hover:opacity-60 transition-opacity">
                                        <ArrowIcon />
                                    </a>
                                ) : (
                                    <span className="text-custom-gray text-sm uppercase">{t("work.inProgress")}</span>
                                )}
                            </div>
                            <Link to={`/work/${projet.id}`}>
                                <div
                                    className="relative cursor-crosshair overflow-hidden group"
                                >
                                    <div className="w-full" style={{ aspectRatio: "16/9" }}>
                                        <img src={projet.picture} className="w-full h-full object-cover" />
                                    </div>

                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 border-2 border-dark dark:border-light transition-opacity pointer-events-none" />
                                    <motion.span
                                        variants={{
                                            hover: { x: "0%", opacity: 1 }
                                        }}
                                        initial={{ x: "-100%", opacity: 0 }}
                                        exit={{ x: "100%", opacity: 0 }}
                                        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                                        className="absolute p-2 top-[45%] border-t-2 border-b-2 border-dark bg-light dark:border-light dark:bg-dark w-full text-center left-0 font-bold uppercase"
                                    >
                                        ({projet.name})
                                    </motion.span>
                                </div>
                            </Link>

                            <ul className="flex flex-wrap gap-2">
                                {projet.stack.map((item, index) => (
                                    <li key={index}>
                                        <motion.div
                                            whileHover={{ x: 8 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                            className="border font4 rounded-[4px] border-custom-gray px-2 text-custom-gray uppercase group-hover:text-dark group-hover:border-dark dark:group-hover:text-light dark:group-hover:border-light transition-colors cursor-default"
                                        >
                                            {item}
                                        </motion.div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </PageTransition>

    )
}