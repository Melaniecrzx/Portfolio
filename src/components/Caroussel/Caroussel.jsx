import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Caroussel({ slides, isDark }) {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 3000, stopOnInteraction: true })]
    )
    const [active, setActive] = useState(0)

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setActive(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.on("select", onSelect)
    }, [emblaApi, onSelect])

    const border = isDark ? "border-white/10" : "border-black/10"
    const muted = isDark ? "text-white/40" : "text-black/40"
    const bg = isDark ? "bg-dark" : "bg-light"

    if (!slides?.length) return null

    return (
        <section className="flex flex-col gap-4">

            {/* Viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y touch-pinch-zoom">
                    {slides.map(slide => {
                        const imgSrc = isDark ? slide.light : slide.dark
                        return (
                            <div key={slide.id} className="flex-none min-w-0 w-full">
                                <div
                                    className={`w-full flex items-center justify-center ${bg}`}
                                    style={{ aspectRatio: slide.type === "portrait" ? "4/3" : "16/9" }}
                                >
                                    <img
                                        src={imgSrc}
                                        alt={slide.feature}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Footer — label animé + navigation */}
            <div className={`flex items-center justify-between border-t ${border} pt-3`}>

                <AnimatePresence mode="wait">
                    <motion.span
                        key={active}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                        className={`text-xs uppercase tracking-[0.15em] ${muted}`}
                    >
                        {slides[active]?.feature}
                    </motion.span>
                </AnimatePresence>

                <div className="flex items-center gap-4">

                    {/* Dots */}
                    <div className="flex gap-2">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => emblaApi?.scrollTo(i)}
                                className={`h-[2px] transition-all duration-300 ${i === active
                                        ? `w-6 ${isDark ? "bg-white" : "bg-black"}`
                                        : `w-3 ${isDark ? "bg-white/20" : "bg-black/20"}`
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Flèches */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => emblaApi?.scrollPrev()}
                            className={`w-7 h-7 border ${border} flex items-center justify-center text-xs hover:opacity-60 transition-opacity`}
                        >
                            ←
                        </button>
                        <button
                            onClick={() => emblaApi?.scrollNext()}
                            className={`w-7 h-7 border ${border} flex items-center justify-center text-xs hover:opacity-60 transition-opacity`}
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
