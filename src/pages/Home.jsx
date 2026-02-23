import StarIcon from "../components/Logo/StarIcon"
import ArrowIcon from "../components/Logo/ArrowIcon"
import Cross from "../ui/Cross"
import { useState, useEffect, useCallback } from "react"
import PageTransition from "../ui/PageTransition"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { projects } from "../data/projects";
import { useTheme } from "../store/ThemeProvider"
import { Link } from "react-router-dom"

export default function Home() {

  const { t } = useTranslation();
  const { isDark } = useTheme();

  const competences = [
    {
      id: 1,
      name: 'react',
    },
    {
      id: 2,
      name: 'node',
    },
    {
      id: 3,
      name: 'tailwind',
    },
    {
      id: 4,
      name: 'MongoDb',
    },
    {
      id: 5,
      name: 'Express',
    },
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' }
    })
  }

  const [current, setCurrent] = useState(0);

  const getShot = (id) => {
    const shot = projects[current].screenshots.find(s => s.id === id);
    return isDark ? shot?.light : shot?.dark;
  }


  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % projects.length);
  }, [projects.length]);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <PageTransition>
      <section className="relative z-20">
        <div className="px-5 pb-5 border-b border-gray-line relative">
          <Cross left='0' top='100%' />
          <Cross right='0' top='100%' />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              custom={0}
              className="flex flex-col mt-[20px] md:mt-[76px] gap-0">
              <div className="flex flex-col md:flex-row items-center md:gap-[29px]">
                <h1 className="font1 uppercase font-bold text-[11vw] md:text-[inherit]">
                  Melanie
                </h1>
                <div className="flex gap-2.5">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
              <h1 className="font1 font-bold uppercase text-[11vw] md:text-[inherit]">
                COURZEREAUX
              </h1>
            </motion.div>

            <p className="font4 hidden md:block uppercase text-custom-gray text-right">
              {t("home.based")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-8">
            <div className="flex gap-3 items-center">
              <div className="rounded-full bg-custom-green w-2.5 h-2.5"></div>
              <p className="font3">{t("home.open")}</p>
            </div>
            <div className="flex flex-col text-right">
              <p className="font3 uppercase ">{t("home.developer")}</p>
              <p className="font3 hidden md:block">{t("home.building")}</p>
            </div>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          custom={0}
          className="grid grid-cols-1 md:grid-cols-4">
          <div className="order-1">
            <div className="flex flex-col gap-1 border-b border-gray-line px-5 py-5">
              <span className="font4 text-custom-gray uppercase">{t("home.status")}</span>
              <p className="font3">{t("home.job")} @ DASSAULT SYSTEMES</p>
            </div>
            <motion.div
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex border-b group justify-between items-end border-gray-line px-5 py-5 cursor-pointer">
              <div className="flex flex-col gap-1">
                <span className="font4 text-custom-gray dark:group-hover:text-light group-hover:text-dark uppercase">{t("home.resume")}</span>
                <p className=" font3 uppercase">{t("home.download")}</p>
              </div>
              <ArrowIcon className="w-6 h-6 md:w-8 md:h-8" />
            </motion.div>
            <motion.div
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex justify-between group border-gray-line items-end px-5 py-5 cursor-pointer">
              <Link className="flex flex-col gap-1" to={"/work"}>
                <span className="font4 text-custom-gray uppercase dark:group-hover:text-light group-hover:text-dark">{t("home.projects")}</span>
                <p className="uppercase font3">{t("home.explore")}</p>
              </Link>
              <ArrowIcon className="w-6 h-6 md:w-8 md:h-8" />

            </motion.div>
          </div>
          <div className="order-2 md:col-span-2 p-8 flex flex-col gap-2.5 group">
            <img
              className="block md:hidden w-full max-h-[300px] object-contain"
              src={getShot("responsive")}
            />
            <img className="hidden md:block" src={getShot("board")} />
            <span className=" uppercase text-center">
              ★ ({projects[current].screenshots.find(s => s.id === "board")?.feature}) ★
            </span>
            <div className="flex gap-2 justify-center">
              {projects.map((p, index) => (
                <div key={p.id}
                  onClick={() => setCurrent(index)}
                  className={`rounded-full w-2.5 h-2.5 ${index === current ? 'bg-dark dark:bg-light ' : 'bg-custom-gray'}`}></div>
              ))}
            </div>
            <div className="flex md:hidden flex-wrap gap-2 justify-center mt-2">
              {competences.map(c => (
                <span
                  key={c.id}
                  className="text-custom-gray border rounded-sm border-custom-gray font4 uppercase px-2 py-1"
                >
                  {c.name}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-start-4 order-3">
            <div className="hidden md:flex flex-wrap gap-2 items-start pt-5 px-5 rounded-lg">
              {competences.map(c => (
                <span
                  key={c.id}
                  className="text-custom-gray hover:text-dark dark:hover:text-light hover:border-dark dark:hover:border-light border rounded-sm border-custom-gray font4 uppercase px-2 py-1"
                >
                  {c.name}
                </span>
              ))}
            </div>

          </div>
        </motion.div>
      </section>
    </PageTransition>
  )
}