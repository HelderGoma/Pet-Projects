import { useState, useEffect } from "react";
import "./Nav.css";

const Nav = () => {
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDark(true);
            document.body.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
        localStorage.setItem("theme", !dark ? "dark" : "light");
    };

    return (
        <nav className="nav">
            <div className="nav-top">
                <h1 className="nav-title">Frontend Lab</h1>

                <div className="nav-actions">
                    <button className={`theme-switch ${dark ? "dark" : ""}`} onClick={toggleTheme}>
                        <div className="switch-circle">
                            {dark ? "🌙" : "☀️"}
                        </div>
                    </button>

                    <button
                        className={`burger ${open ? "active" : ""}`}
                        onClick={() => setOpen(!open)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>

            <div className={`nav-link ${open ? "open" : ""}`}>
                <a href="/#text">Text</a>
                <a href="/#modalWindow">ModalWindow</a>
                <a href="/#checkbox">Checkbox</a>
                <a href="/#tabs">Tabs</a>
                <a href="/#slider">Slider</a>
                <a href="/#burgerMenu">BurgerMenu</a>
                <a href="/#sidebar">Sidebar</a>
                <a href="/2#todoApp">TodoApp</a>
                <a href="/2#timer">Timer</a>
                <a href="/2#weatherApp">WeatherApp</a>
                <a href="/2#basket">Basket</a>
                <a href="/2#ticTacToe">TicTacToe</a>
                <a href="/2#calculator">Calculator</a>
                <a href="/2#chat">Chat</a>
            </div>
        </nav>
    );
};

export default Nav;