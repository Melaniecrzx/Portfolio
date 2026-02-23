import { useRef, useEffect } from "react"
import { useTheme } from "../../store/ThemeProvider"

export default function Cursor() {
    const cursor = useRef(null)
    const mouse = useRef({ x: 0, y: 0 })
    const pos = useRef({ x: 0, y: 0 })

    const { isDark } = useTheme();


    useEffect(() => {
        const mouseMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY }
        }
        window.addEventListener("mousemove", mouseMove)

        let raf
        const animate = () => {
            pos.current.x += (mouse.current.x - pos.current.x) * 0.1
            pos.current.y += (mouse.current.y - pos.current.y) * 0.1

            if (cursor.current) {
                cursor.current.style.transform =
                    `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`
            }
            raf = requestAnimationFrame(animate)
        }
        animate()

        return () => {
            window.removeEventListener("mousemove", mouseMove)
            cancelAnimationFrame(raf)
        }
    }, [])

    return (
        <div
            ref={cursor}
            className="hidden md:block w-8 h-8 bg-light rounded-full mix-blend-difference fixed z-[999] top-0 left-0 pointer-events-none"
        />
    )
}