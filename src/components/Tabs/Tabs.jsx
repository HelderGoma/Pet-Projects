import "./Tabs.css"
import { useState } from "react"

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    return (
        <div className="section" >

            <div className="tabs-nav">
                <button className="buttonTabsHTML"
                    style={{ background: activeTab === "tab1" ? "white" : "#d6a1f680" }}
                    onClick={() => setActiveTab("tab1")}
                >
                    HTML
                </button>

                <button className="buttonTabsCSS"
                    onClick={() => setActiveTab("tab2")}
                    style={{ background: activeTab === "tab2" ? "white" : "#d6a1f680" }}
                >
                    CSS
                </button>
                <div className="tabs-content">
                    {activeTab === "tab1" && <p>HTML — это стандартный язык разметки, используемый для создания структуры и контента веб-страниц. Он определяет, где разместить заголовки, абзацы, изображения и ссылки, являясь «скелетом» любого сайта. HTML-код, использующий теги, интерпретируется браузерами для отображения контента. </p>}
                    {activeTab === "tab2" && <p>CSS  — это язык, который описывает внешний вид и оформление веб-страниц, созданных на HTML. Если HTML — это каркас сайта, то CSS — это его дизайн: цвета, шрифты, расположение элементов, фоны и анимации, делая сайт красивым и удобным. </p>}

                </div>
            </div>

        </div>
    )
}

export default Tabs