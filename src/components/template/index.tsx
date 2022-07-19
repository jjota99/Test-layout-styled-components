import React from 'react';
import { Container } from './style';

interface TemplateProps {
    setTypeFirstText: () => void;
    setTypeSecondText: () => void;
    onRequestOpen: () => void;
}

export const Template = ({setTypeFirstText, setTypeSecondText, onRequestOpen}: TemplateProps) => {
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
                        setTypeFirstText();
                    }}

                >
                    VER A ANÁLISE DO SEU MUNICÍPIO
                </button>
                <button onClick={() => {
                    onRequestOpen();
                    setTypeSecondText();
                }}>CONHEÇA A CONSULTORIA GRATUITA</button>
            </div>
        </Container>
    )
}