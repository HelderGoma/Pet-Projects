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
                        value="ягоды"
                        checked={selected.includes("ягоды")}
                        onChange={handleChange}
                    />
                    Ягоды
                </label>

                <label>
                    <input
                        type="checkbox"
                        value="фрукты"
                        checked={selected.includes("фрукты")}
                        onChange={handleChange}
                    />
                    Фрукты
                </label>

                <label>
                    <input
                        type="checkbox"
                        value="овощи"
                        checked={selected.includes("овощи")}
                        onChange={handleChange}
                    />
                    Овощи
                </label>

                <p className="text">
                    Выбрано: {selected.length > 0 ? selected.join(", ") : "ничего"}
                </p>
            </div>
        </div>
    );
};

export default CheckBox;