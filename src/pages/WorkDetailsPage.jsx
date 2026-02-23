import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import PageTransition from "../ui/PageTransition";
import { Link } from "react-router-dom";
import ArrowIcon from "../components/Logo/ArrowIcon";
import StarIcon from "../components/Logo/StarIcon";
import { useTheme } from "../store/ThemeProvider"
import Caroussel from "../components/Caroussel/Caroussel";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' }
    })
}

const Label = ({ children }) => (
    <span className="text-xs uppercase tracking-[0.2em] text-custom-gray">{children}</span>
)
const Title = ({ children }) => (
    <span className="text-sm font-bold uppercase tracking-wide">{children}</span>
)
const Sub = ({ children }) => (
    <p className="text-custom-gray text-sm">{children}</p>
)

export default function WorkDetailsPage() {

    const { id } = useParams();
    const project = projects.find(p => p.id === Number(id));
    const { isDark } = useTheme();

    if (!project) return null;

    return (
        <PageTransition>
            <section className="px-5 pt-7 flex flex-col gap-[50px]">

                {/* HEADER */}
                <motion.div
                    className="flex flex-col gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                >
                    <div className="font4 text-custom-gray uppercase  flex justify-between">
                        <div>
                            <Link to="/work" className="dark:hover:text-light hover:text-dark transition-colors">Work</Link>
                            <span className=""> / {project.title}</span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-3">
                        <h2 className="font6 font-bold uppercase text-center">({project.title})</h2>
                        <div className="flex gap-2.5">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                    </div>

                    <p className="font3 text-custom-gray">{project.description}</p>
                </motion.div>

                {/* VIDEO HERO */}
                {project.video && (
                    <motion.div
                        className="relative overflow-hidden w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <video
                            autoPlay muted loop playsInline
                            className="w-full object-cover"
                            style={{ aspectRatio: "16/9" }}
                        >
                            <source src={project.video} type="video/mp4" />
                        </video>

                        <div className="absolute bottom-0 left-0 right-0 px-5 py-3 flex justify-between items-center bg-black/30 backdrop-blur-sm">
                            <span className="text-white font9 uppercase tracking-widest">Live Preview</span>
                            <div className="flex gap-6">
                                <a href={project.liveDemo} target="_blank"
                                    className="text-white font9 uppercase tracking-widest flex gap-2 items-center hover:opacity-60 transition-opacity">
                                    App <ArrowIcon />
                                </a>
                                <a href={project.sourceCode} target="_blank"
                                    className="text-white font9 uppercase tracking-widest flex gap-2 items-center hover:opacity-60 transition-opacity">
                                    Code <ArrowIcon />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* CAROUSEL + INFOS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUp}
                    >
                        <Caroussel slides={project.screenshots} isDark={isDark} />
                    </motion.div>

                    <div className="flex flex-col gap-10">

                        {/* Features */}
                        <motion.div
                            className="flex flex-col gap-4"
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeUp}
                            custom={0}
                        >
                            <Label>Features ★</Label>
                            <ul className="flex flex-col gap-4">
                                {project.features.map((feature, i) => (
                                    <motion.li
                                        key={feature.key}
                                        custom={i}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeUp}
                                        className="group"
                                    >
                                        <Title>{feature.label}</Title>
                                        <Sub>{feature.sub}</Sub>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Tech Stack + What I Learned */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <motion.div
                                className="flex flex-col gap-3"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={1}
                            >
                                <Label>Tech Stack ★</Label>
                                <ul className="flex flex-col gap-3">
                                    {project.techStack.map((t, index) => (
                                        <li key={index}>
                                            <Title>{t.category}</Title>
                                            <ul className="flex flex-col gap-1 mt-1">
                                                {t.items.map((item, i) => (
                                                    <li key={i} className="text-custom-gray text-sm">{item}</li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                className="flex flex-col gap-3"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={2}
                            >
                                <Label>What I Learned ★</Label>
                                <ul className="flex flex-col gap-2">
                                    {project.whatILearned.map((item, index) => (
                                        <li key={index} className="text-custom-gray text-sm">{item}</li>
                                    ))}
                                </ul>
                            </motion.div>

                        </div>
                    </div>
                </div>

            </section>
        </PageTransition>
    )
}
