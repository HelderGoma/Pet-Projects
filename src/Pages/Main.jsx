import Text from "../components/Text/Text"
import ModalWindow from "../components/ModalWindow/ModalWindow"
import CheckBox from "../components/CheckBox/CheckBox"
import Tabs from "../components/Tabs/Tabs"
import Slider from "../components/Slider/Slider"
import BurgerMenu from "../components/BurgerMenu/BurgerMenu"
import Sidebar from "../components/SideBar/SideBar"



const Main = () => {
    return (
        <>
            <div className="mainTitle" id="text">
                <p>Text</p>
            </div>
            <Text />
            <div className="mainTitle" id="modalWindow">
                <p>Modal window</p>
            </div>
            <ModalWindow />
            <div className="mainTitle" id="checkbox">
                <p>Check box</p>
            </div>
            <CheckBox />
            <div className="mainTitle" id="tabs">
                <p>Tabs</p>
            </div>
            <Tabs />
            <div className="mainTitle" id="slider">
                <p>Slider</p>
            </div>
            <Slider />
            <div className="mainTitle" id="burgerMenu">
                <p>Burger menu</p>
            </div>
            <BurgerMenu />
            <div className="mainTitle" id="sidebar">
                <p>Sidebar</p>
            </div>
            <Sidebar />
        </>
    )
}

export default Main