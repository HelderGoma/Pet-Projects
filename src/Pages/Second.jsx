import ToDo from "../components/ToDo/ToDo"
import Timer from "../components/Timer/Timer"
import WeatherApp from "../components/WeatherApp/WeatherApp"
import Basket from "../components/Basket/Basket"
import TicTacToe from "../components/TicTacToe /TicTacToe"
import Calculator from "../components/Calculator/Calculator"
import Chat from "../components/Chat/Chat"
import { useState } from "react";
import Catalog from "../components/Basket/Catalog";
import { bg1, bg2 } from "../../public/images/images";


const Second = () => {
    const [basket, setBasket] = useState([]);
    return (
        <>
            <img className="bg-small" src={bg1} alt="" />
            <img className="bg-medium" src={bg2} alt="" />
            <img className="bg-large" src={bg2} alt="" />
            <img className="bg-right-small" src={bg1} alt="" />
            <img className="bg-right-medium" src={bg2} alt="" />
            <img className="bg-right-large" src={bg2} alt="" />
            <div className="mainTitle" id="todoApp">
                <p>ToDo app</p>
            </div>
            <ToDo />
            <div className="mainTitle" id="timer">
                <p>Timer</p>
            </div>
            <Timer />
            <div className="mainTitle" id="weatherApp">
                <p>Weather app</p>
            </div>
            <WeatherApp />
            <div className="mainTitle" id="basket">
                <p>Basket</p>
            </div>
            <div className="basket-container">
                <Catalog basket={basket} setBasket={setBasket} />
                <Basket basket={basket} setBasket={setBasket} />
            </div>
            <div className="mainTitle" id="ticTacToe">
                <p>Tic-Tac-Toe</p>
            </div>
            <TicTacToe />
            <div className="mainTitle" id="calculator">
                <p>Calculator</p>
            </div>
            <Calculator />
            <div className="mainTitle" id="chat">
                <p>Chat</p>
            </div>
            <Chat />
        </>
    )
}

export default Second