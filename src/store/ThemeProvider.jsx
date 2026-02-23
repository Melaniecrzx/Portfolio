import { useContext, useEffect, useState, createContext } from "react";

const ThemeContext = createContext();
export default function ThemeProvider({ children }) {
    
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('theme');
        if(saved) return saved === 'dark'
        return true;
    });
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    }

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext);
}