import React, {createContext, useMemo, useState} from "react";


type Theme = "light" | "dark";

interface ThemeContextProps {
    theme: Theme,
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: "light",
    toggleTheme: () => {
    }
})

interface ThemeProviderProps {
    children: React.ReactNode
}

export default function ThemeProvider({children}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const defaultProps = useMemo(() => ({
        theme,
        toggleTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}
