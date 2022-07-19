import React, {useState} from 'react';
import {GlobalStyle} from './styles/global'
import { Template } from "./components/template";
import { WarningModal } from "./components/warningModal";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [typeText, setTypeText] = useState(0);

    function handleOpenModal() {
        setIsOpen(true);
    };

    function handleCloseModal() {
        setIsOpen(false);
    };

    function handleSetTypeFirstText() {
        setTypeText(0);
    };

    function handleSetTypeSecondText() {
        setTypeText(1);
    };

  return (
    <div className="App">

        <Template
            onRequestOpen={handleOpenModal}
            setTypeFirstText={handleSetTypeFirstText}
            setTypeSecondText={handleSetTypeSecondText}
        />
        <WarningModal
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            typeText={typeText}/>
        <GlobalStyle/>
    </div>
  );
}

export default App;
