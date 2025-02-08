import { createContext, useContext, useState } from "react"

const AppSettingsContext = createContext();

export const AppSettingsProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    return (
        <AppSettingsContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </AppSettingsContext.Provider>
    );
};

export const useAppSettings = () => useContext(AppSettingsContext);
