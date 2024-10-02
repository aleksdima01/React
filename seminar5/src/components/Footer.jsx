import { useTheme } from "../contexts/ThemeContext";

export const Footer = () => {
    const { theme } = useTheme();
    return (
        <div className={theme}>{new Date().getFullYear()}</div>
    );
}
