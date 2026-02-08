import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import Main from "./Pages/Main";
import Second from "./Pages/Second";
import { Routes, Route, NavLink } from "react-router-dom";
import ScrollToHash from "../src/components/ScrollToHash/ScrollToHash";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";


function App() {

  return (
    <>
      <ScrollToTop />
      <ScrollToHash />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/2" element={<Second />} />
      </Routes>
      <div className="link">
        <NavLink to="/" className="main-link">
          {({ isActive }) => (
            <button className={isActive ? "active-btn" : "default-button"}>
            </button>
          )}
        </NavLink>
        <NavLink to="/2" className="second-link">
          {({ isActive }) => (
            <button className={isActive ? "active-btn" : "default-button"}>
            </button>
          )}
        </NavLink>
      </div>
      <ScrollToTopButton />
      <Footer />
    </>
  )
}

export default App
