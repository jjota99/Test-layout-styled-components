import React from 'react';
import Modal from "react-modal";
import { Container } from './style'
import {Graphic} from "../graphic";
import warningImg from '../../assets/iconAnalytics.svg'
import closeImg from '../../assets/close.svg'


interface WarningModalProps {
    isOpen: boolean;
    onRequestClose: () => void,
}

export const WarningModal = ({ isOpen, onRequestClose}: WarningModalProps) => {
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
                <header>
                    <img src={warningImg}/>
                    <span style={{ fontWeight: '500', color: '#3A3A42', fontSize: 18 }}>
                    Analise do quadro de hipertensos e diabéticos por quadrimestre
                </span>
                </header>
                <div>
                    <Graphic />
                </div>
            </Container>
        </Modal>
    )
}