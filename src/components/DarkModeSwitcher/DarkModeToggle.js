import React, { createContext, useEffect, useState } from "react";
import '../../assets/styles/theme.scss'

const ThemeContext = createContext();

const DarkModeSwitch = () => {
    const [theme, setTheme] = useState("light");
    const [state, changeTheme] = useState({ theme: "" })
    const value = { state, changeTheme };
    const ROOT = window.document.documentElement;



    function themeFunction() {
        setTheme((prev) => {
            return prev === "light" ? "dark" : "light";
        });
    }

    useEffect(() => {
        if (!ROOT.classList.contains(theme)) {
            ROOT.classList.remove(theme === "light" ? "dark" : "light");
            ROOT.classList.add(theme);
        }
    })


    return (
        <ThemeContext.Provider value={value}>
            <button className="theme-button" onClick={() => themeFunction()}>
                <div>
                    <img
                        height="30px"
                        src={
                            theme !== "light"
                                ? " https://imgs.search.brave.com/6Yp_MGAt_tfrJKcPMrv_I3EAsBS6uijJDlkY4ajD0q4/rs:fit:512:512:1/g:ce/aHR0cHM6Ly93d3cu/aWNvbnNkYi5jb20v/aWNvbnMvZG93bmxv/YWQvd2hpdGUvbW9v/bi00LTUxMi5wbmc"
                                : "https://imgs.search.brave.com/AafmaHEuuZFuH9NA9rJ5aAU-losrwfkROlhJr5psYUE/rs:fit:980:980:1/g:ce/aHR0cHM6Ly9jZG4u/b25saW5ld2ViZm9u/dHMuY29tL3N2Zy9p/bWdfMzQ5NzgucG5n"
                        }
                        className="theme-icon"
                        alt="theme"
                    />
                </div>
            </button>
        </ThemeContext.Provider>
    );

}

export default DarkModeSwitch; 