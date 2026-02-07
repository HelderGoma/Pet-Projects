import "./BurgerMenu.css"
import { useState } from "react"

const BurgerMenu = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="section">
            <div className="container">
                <button className="buttonBurger" onClick={() => setOpen(!open)}>
                    ☰
                </button>
                {open && (
                    <nav className="menu">
                        <a href="#">HTML</a>
                        <a href="#">CSS</a>
                        <a href="#">JavaScript</a>
                        <a href="#">React</a>
                    </nav>
                )}
            </div>
        </div>
    )
}

export default BurgerMenu