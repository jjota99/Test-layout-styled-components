import React from 'react';
import { Container } from './style';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface TemplateProps {
    onRequestOpen: () => void;
}

export const Template = ({onRequestOpen}: TemplateProps) => {
    const notify = () => toast("Descrição de consultoria indisponível no momento");

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
                    onClick={() => {
                        onRequestOpen();
                    }}
                >
                    VER A ANÁLISE DO SEU MUNICÍPIO
                </button>

                <button onClick={notify}>CONHEÇA A CONSULTORIA GRATUITA</button>
            </div>
        </Container>
    )
}