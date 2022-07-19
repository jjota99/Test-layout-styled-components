import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: #fff;
    padding: 3rem;
    position: relative;
    border-radius: 0.5rem;
  }

  .react-modal-close {
    position: absolute;
    right: 15px;
    top: 15px;
    border: 0;
    background: transparent;
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;