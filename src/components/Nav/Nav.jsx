import { useState } from "react";
import "./Nav.css";

const Nav = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="nav">
            <div className="nav-top">
                <div className="nav-title">
                    <h1>Easy Pet-projects</h1>
                </div>

                <button
                    className={`burger ${open ? "active" : ""}`}
                    onClick={() => setOpen(!open)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            <div className={`nav-link ${open ? "open" : ""}`}>
                <a href="/#text">Text</a>
                <a href="/#modalWindow">ModalWindow</a>
                <a href="/#checkbox">CheckBox</a>
                <a href="/#tabs">Tabs</a>
                <a href="/#slider">Slider</a>
                <a href="/#burgerMenu">BurgerMenu</a>
                <a href="/#sidebar">Sidebar</a>
                <a href="/2#todoApp">ToDoApp</a>
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