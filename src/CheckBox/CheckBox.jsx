import { useState } from 'react'
import "./CheckBox.css"

const CheckBox = () => {
    const [selected, setSelected] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        if (selected.includes(value)) {
            setSelected(selected.filter((item) => item !== value));
        } else {
            setSelected([...selected, value]);
        }
    };

    return (
        <div className="section">
            <div className="container">
                <h2 className="title">Что вы любите?</h2>

                <label>
                    <input
                        type="checkbox"
                        value="Ягоды"
                        checked={selected.includes("Ягоды")}
                        onChange={handleChange}
                    />
                    Ягоды
                </label>

                <label>
                    <input
                        type="checkbox"
                        value="Фрукты"
                        checked={selected.includes("Фрукты")}
                        onChange={handleChange}
                    />
                    Фрукты
                </label>

                <label>
                    <input
                        type="checkbox"
                        value="Овощи"
                        checked={selected.includes("Овощи")}
                        onChange={handleChange}
                    />
                    Овощи
                </label>

                <p className="text">
                    Выбрано: {selected.length > 0 ? selected.join(", ") : "Ничего"}
                </p>
            </div>
        </div>
    );
};

export default CheckBox;