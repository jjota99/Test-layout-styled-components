import React, {useState} from 'react';
import {GlobalStyle} from './styles/global'
import { Template } from "./components/template";
import { WarningModal } from "./components/warningModal";
import {ToastContainer} from "react-toastify";

function App() {
    const [isOpen, setIsOpen] = useState(false);


    function handleOpenModal() {
        setIsOpen(true);
    };

    function handleCloseModal() {
        setIsOpen(false);
    };


  return (
    <div className="App">
        <Template
            onRequestOpen={handleOpenModal}
        />
        <WarningModal
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
        />
        <GlobalStyle/>
        <ToastContainer />
    </div>
  );
}

export default App;
