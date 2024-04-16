import React, {createContext, useMemo, useState} from "react";
import {THEMES} from "@/app/providers/them-provider/lib/themes";


interface ThemeContextProps {
    theme: THEMES,
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: THEMES.LIGHT,
    toggleTheme: () => {
    }
})

interface ThemeProviderProps {
    children: React.ReactNode
}

export function ThemeProvider({children}: ThemeProviderProps) {
    const [theme, setTheme] = useState(THEMES.LIGHT);

    const toggleTheme = () => {
        setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
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
