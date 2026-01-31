import Text from "./Text/Text"
import ModalWindow from "./ModalWindow/ModalWindow"
import CheckBox from "./CheckBox/CheckBox"
import Tabs from "./Tabs/Tabs"

function App() {

  return (
    <>
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

    </>
  )
}

export default App
