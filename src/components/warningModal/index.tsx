import React, {useContext} from 'react';
import Modal from "react-modal";
import { Container } from './style'
import warningImg from '../../assets/iconModal.svg'
import closeImg from '../../assets/close.svg'

interface WarningModalProps {
    typeText: number;
    isOpen: boolean;
    onRequestClose: () => void,
}

export const WarningModal = ({typeText, isOpen, onRequestClose}: WarningModalProps) => {
    const firstText = 'A análise do seu município está indisponível.'
    const secondText = 'Informações sobre consultoria gratuita indisponíveis no momento.'

    return (
        <Modal isOpen={isOpen}
               onRequestClose={onRequestClose}
               overlayClassName="react-modal-overlay"
               className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="fechar modal"/>
            </button>
            <Container>
                <img src={warningImg}/>
                <span>{typeText < 1 ? firstText : secondText}</span>
            </Container>
        </Modal>
    )
}