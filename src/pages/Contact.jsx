import { useForm } from "react-hook-form"
import StarIcon from "../components/Logo/StarIcon";
import ArrowIcon from "../components/Logo/ArrowIcon";
import PageTransition from "../ui/PageTransition";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser"
import { useState } from "react";


export default function Contact() {

    const { t } = useTranslation();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [isSubmitted, setIsSubmitted] = useState(false)


    const fadeUp = {
        hidden: { opacity: 0, y: 24 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' }
        })
    }

    const infos = [
        { id: 1, info: 'melanie.crzx@outlook.fr' },
        { id: 2, info: '+33651614177' },
        { id: 3, info: 'LinkedIn', link: 'https://linkedin.com/in/ton-profil' },
        { id: 4, info: 'GitHub', link: 'https://github.com/Melaniecrzx' }
    ]

    const onSubmit = async (data) => {
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                { name: data.name, email: data.email, message: data.message },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
                reset();
            setIsSubmitted(true);
        } catch (error) {
            alert("Erreur, réessaie.")
        }
    }

    return (
        <PageTransition>

            <section className=" px-5 mt-[20px] md:mt-[76px] relative">

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="flex flex-col md:flex-row text-center items-center gap-3">
                    <h2 className="font6 font-bold uppercase">({t("contact.getInTouch")})</h2>
                    <div className="flex gap-2.5">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </div>
                </motion.div>

                <div className="flex justify-between items-start mt-6">
                    <div className="flex flex-col gap-1">
                        <p className="font4 text-custom-gray uppercase tracking-widest">Mélanie Courzereaux</p>
                        <p className="font3">{t("contact.developer")}</p>
                    </div>
                    <div className="flex flex-col gap-3 text-right">
                        <div className="flex gap-2 items-center justify-end">
                            <div className="rounded-full bg-custom-green w-2 h-2"></div>
                            <p className="font3">{t("contact.open")}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            {infos.map(i => (
                                i.link !== undefined && i.link !== null && i.link !== ''
                                    ? (
                                        <a
                                            key={i.id}
                                            href={i.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center font3 justify-end gap-1.5 group hover:text-dark dark:hover:text-light text-custom-gray transition-colors duration-200"
                                        >
                                            {i.info}
                                            <ArrowIcon />
                                        </a>
                                    )
                                    : <span key={i.id} className="font3">{i.info}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {isSubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center gap-4 py-20"
                    >
                        <p className="font6 font-bold uppercase">{t('contact.messageSend')} ✓</p>
                        <p className="text-custom-gray font3">{t("contact.answer")}</p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="font4 uppercase tracking-widest text-custom-gray hover:text-dark dark:hover:text-light transition-colors mt-4"
                        >
                            {t("contact.otherMessage")}
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUp}
                        onSubmit={handleSubmit(onSubmit)}
                        className="mt-10 flex flex-col gap-10 border-custom-gray"
                    >
                        <div className="overflow-hidden whitespace-nowrap">
                            <div className="animate-marquee inline-block">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <span key={i} className="mx-8 font6 uppercase font-bold inline-flex items-center gap-2">
                                        {t("contact.letsWork")}<StarIcon />
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="flex flex-col">

                                {/* NAME */}
                                <div className="flex flex-col border-r border-gray-line">
                                    <label
                                        htmlFor="name"
                                        className="uppercase text-xs tracking-widest border-b border-gray-line p-3 text-custom-gray"
                                    >
                                        {t("contact.name")}
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="John Smith"
                                        className={`bg-light dark:bg-dark md:bg-transparent font3 placeholder:font3 outline-none text-right p-3 border-b placeholder:text-custom-gray/40 ${errors.name ? 'border-red-500' : 'border-gray-line'}`}
                                        {...register("name", { required: "Name is required" })}
                                    />
                                    {errors.name && (
                                        <span className="text-red-500 text-xs p-2">{errors.name.message}</span>
                                    )}
                                </div>

                                {/* EMAIL */}
                                <div className="flex flex-col border-r border-gray-line">
                                    <label
                                        htmlFor="email"
                                        className="uppercase text-xs tracking-widest border-b border-gray-line p-3 text-custom-gray"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="mel@example.com"
                                        className={` bg-light dark:bg-dark md:bg-transparent font3 placeholder:font3 outline-none text-right p-3 border-b placeholder:text-custom-gray/40 ${errors.email ? 'border-red-500' : 'border-gray-line'}`}
                                        {...register("email", { required: "Email is required" })}
                                    />
                                    {errors.email && (
                                        <span className="text-red-500 text-xs p-2">{errors.email.message}</span>
                                    )}
                                </div>

                            </div>

                            {/* MESSAGE */}
                            <div className="flex flex-col border-r border-gray-line">
                                <label
                                    htmlFor="message"
                                    className="uppercase text-xs tracking-widest border-b border-gray-line p-3 text-custom-gray"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    placeholder={t("contact.yourMessage")}
                                    className={`bg-light dark:bg-dark md:bg-transparent font3 placeholder:font3 outline-none text-right p-3 placeholder:text-custom-gray/40 resize-none ${errors.message ? 'border border-red-500' : ''}`}
                                    {...register("message", { required: "Message is required" })}
                                />
                                {errors.message && (
                                    <span className="text-red-500 text-xs p-2">{errors.message.message}</span>
                                )}
                            </div>
                        </div>

                        {/* SUBMIT */}
                        <div className="flex justify-end pb-10">
                            <button
                                type="submit"
                                className="uppercase font4 tracking-widest rounded-none border border-dark dark:border-light px-6 py-3 flex items-center gap-3 hover:bg-dark  dark:hover:bg-light hover:text-light dark:hover:text-dark transition-all duration-300 group"
                            >
                                {t("contact.envoi")}
                                <span className="rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                                    <ArrowIcon />
                                </span>
                            </button>
                        </div>
                    </motion.form>
                )

                }
                {/* FORM */}


            </section>
        </PageTransition>

    )
}