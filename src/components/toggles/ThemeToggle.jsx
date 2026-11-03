import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = ({t}) => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMounted(true);
        }, 50);
        return () => clearTimeout(timeout);
    }, []);

    const toggleTheme = () => {
        if (!mounted) return;
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    const currentTheme = mounted ? theme : null; // null untuk initial load safe

    return (
        <div className="w-full p-1 bg-background rounded-2xl border border-stroke">
            <label className="relative flex h-10 items-center cursor-pointer">
                <input
                    data-umami-event={`Switch to ${currentTheme === "dark" ? "Light" : "Dark"} Mode`}
                    type="checkbox"
                    className="sr-only peer"
                    checked={currentTheme === "dark"}
                    onChange={toggleTheme}
                />
                <div className="slider bg-background peer-checked:bg-background grid grid-cols-2 rounded-2xl justify-between items-center w-full h-full relative">
                    <span
                        className={`absolute h-full border border-stroke rounded-xl bg-container transition-all duration-300 ease-in-out ${
                            currentTheme === "dark" ? "translate-x-full w-1/2" : "translate-x-0 w-1/2"
                        } ${mounted ? "opacity-100" : "opacity-0"}`}
                        style={{ zIndex: 1 }}
                    />
                    <p
                        className={`z-10 p-3 justify-center leading-4 flex items-center gap-2 text-slate-500 transition-all duration-300 ${
                            currentTheme === "light" ? "!text-slate-800" : ""
                        } ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}
                    >
                        <i className="fad fa-sun-bright"></i>{t("light")}
                    </p>
                    <p
                        className={`z-10 p-3 justify-center leading-4 flex items-center gap-2 text-slate-500 transition-all duration-300 ${
                            currentTheme === "dark" ? "!text-slate-300" : ""
                        } ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}
                    >
                        <i className="fad fa-moon"></i>{t("dark")}
                    </p>
                </div>
            </label>
        </div>
    );
};

export default ThemeToggle;
