import { useTheme } from "../contexts/ThemeContext";

function Footer() {
    const { theme } = useTheme();
    return (
        <footer className={theme}>{new Date().getFullYear()}</footer>
    );
}

export default Footer;
