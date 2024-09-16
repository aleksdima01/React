import { useContext } from "react";
import { createContext, useState } from "react";

const ThemeContext = createContext({});

export const useTheme = () => useContext(useContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? "dark" : "light"));
    }


    return <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>

}