
import { useState } from "react";
import "./Text.css";

const Text = () => {
    const [text, setText] = useState("");

    return (

        <div className="section">

            <div className="container">
                <input
                    className="input"
                    type="text"
                    placeholder="Enter your text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <p className="text">Вы ввели: {text}</p>
                <p className="count">Количество символов: {text.length}</p>
            </div>
        </div>
    );
};

export default Text;