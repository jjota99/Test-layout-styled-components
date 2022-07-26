import React from 'react';
import { Container } from './style';
import { toast } from 'react-toastify';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";


export const Template = () => {
    const notify = () => toast('Informações de consultoria indisponiveis')
    const navigate = useNavigate();
    const routeNavigate = () => {
        const path = 'analytics';
        navigate(path)
    };

    return (
        <Container>
            <div className="Text-larger">
                <span>Consultoria para o seu município</span>
                <span className="highlight-span"> 100% gratuita</span>
            </div>

            <div className="Description">
                <span>Queremos ajudar você e seu município e temos um time <br/>preparado para isso.</span>
                <span> E o melhor: tudo é feito de forma gratuita,<br/> simples e rápida!</span>
            </div>

            <div className="Buttons">
                <button
                    className="highlight-button"
                    onClick={routeNavigate}
                >
                    VER A ANÁLISE DO SEU MUNICÍPIO
                </button>

                <button onClick={notify}>CONHEÇA A CONSULTORIA GRATUITA</button>
            </div>
            <ToastContainer/>
        </Container>
    )
}