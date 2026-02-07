import { useState } from "react";
import "./SideBar.css";

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="sectionSidebar" >
            <button
                className="buttonSidebar"
                onClick={() => setOpen(!open)}
            >
                ☰
            </button>

            <aside className={`sidebar ${open ? "open" : ""}`}>
                <nav>
                    <a href="#">HTML</a>
                    <a href="#">CSS</a>
                    <a href="#">JavaScript</a>
                    <a href="#">TypeScript</a>
                    <a href="#">React</a>
                </nav>
            </aside>
        </div>
    );
};

export default Sidebar;