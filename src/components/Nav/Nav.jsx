import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
                <h1 className="nav-title">Frontend Lab <span>by HGoma</span></h1>

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
                <NavLink to="/#text">Text</NavLink>
                <NavLink to="/#modalWindow">ModalWindow</NavLink>
                <NavLink to="/#checkbox">Checkbox</NavLink>
                <NavLink to="/#tabs">Tabs</NavLink>
                <NavLink to="/#slider">Slider</NavLink>
                <NavLink to="/#burgerMenu">BurgerMenu</NavLink>
                <NavLink to="/#sidebar">Sidebar</NavLink>
                <NavLink to="/2#todoApp">TodoApp</NavLink>
                <NavLink to="/2#timer">Timer</NavLink>
                <NavLink to="/2#weatherApp">WeatherApp</NavLink>
                <NavLink to="/2#basket">Basket</NavLink>
                <NavLink to="/2#ticTacToe">TicTacToe</NavLink>
                <NavLink to="/2#calculator">Calculator</NavLink>
                <NavLink to="/2#chat">Chat</NavLink>
            </div>
        </nav>
    );
};

export default Nav;