import Text from "./Text/Text"
import ModalWindow from "./ModalWindow/ModalWindow"
import CheckBox from "./CheckBox/CheckBox"
import Tabs from "./Tabs/Tabs"
import Slider from "./Slider/Slider"
import BurgerMenu from "./BurgerMenu/BurgerMenu"
import Sidebar from "./SideBar/SideBar"
import ToDo from "./ToDo/ToDo"
import Timer from "./Timer/Timer"
import WeatherApp from "./WeatherApp/WeatherApp"
import Nav from "./Nav/Nav"
import Footer from "./Footer/Footer"

function App() {

  return (
    <>
      <Nav />
      <div className="mainTitle">
        <p>Text</p>
      </div>
      <Text />
      <div className="mainTitle">
        <p>Modal window</p>
      </div>
      <ModalWindow />
      <div className="mainTitle">
        <p>Check box</p>
      </div>
      <CheckBox />
      <div className="mainTitle">
        <p>Tabs</p>
      </div>
      <Tabs />
      <div className="mainTitle">
        <p>Slider</p>
      </div>
      <Slider />
      <div className="mainTitle">
        <p>Burger menu</p>
      </div>
      <BurgerMenu />
      <div className="mainTitle">
        <p>Sidebar</p>
      </div>
      <Sidebar />
      <div className="mainTitle">
        <p>ToDo app</p>
      </div>
      <ToDo />
      <div className="mainTitle">
        <p>Timer</p>
      </div>
      <Timer />
      <div className="mainTitle">
        <p>Weather app</p>
      </div>
      <WeatherApp />
      <Footer/>
    </>
  )
}

export default App
