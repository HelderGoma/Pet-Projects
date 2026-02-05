import { useState } from "react"
import "./ModalWindow.css"

const ModalWindow = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div className="section" id="modalWindow">
            <div className="container">
                <button className="buttonModal" onClick={openModal}>Вызвать модальное окно</button>
                {isOpen && (
        <div 
          className="modal-overlay" 
          onClick={closeModal} 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()} 
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "500px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <p>Модальное окно</p>
            <button className="close-button" onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}
            </div>
        </div>
    )
}

export default ModalWindow