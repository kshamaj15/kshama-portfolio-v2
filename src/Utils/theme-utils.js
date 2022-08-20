import { THEME } from "../constant";

export const getTheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return THEME.DARK;
    } else {
        return THEME.LIGHT;
    }
}

export const onThemeToggle = (checked) => {
    if (checked === true) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    }
    else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    }
}