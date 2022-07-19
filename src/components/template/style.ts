import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 148px 72px 148px 64px;

  .Text-larger {
    font-weight: normal;
    padding-right: 10%;
    
    span {
      font-size: 112px;   
    }
    
    .highlight-span {
      color: #2EB280;
      position: relative;
    }

    .highlight-span::after {
      content: "";
      position: absolute;
      left: 0;
      height: 100%;
      width: 100%;
      background: #FFF;
      border-left: 2px solid #2EB280;
      animation: typing 2s steps(18) infinite;

      @keyframes typing {
        100%{
          left: 100%;
          margin: 0 -35px 0 35px;
        }
    }
    }

    .highlight-span-two {
      color: #2EB280;
      position: relative;
    }
  }

  .Description {
    margin-top: 60px;
    margin-bottom: 60px;
    span {
      font-size: 24px;
      line-height: 150%;
    }
  }
  
  .Buttons {
    max-width: 45%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    button {
      border-radius: 80px;
      border: none;
      color: #2EB280;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 650;
      font-size: 14px;
      padding: 16px 24px 17px;
      cursor: pointer;
      
      &:hover {
        text-decoration: underline;
        color: #ef8264;
      }

      &.highlight-button {
        margin-right: 20px;
        background: #2EB280;
        color: #fff;
        
        &:hover {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          text-decoration: none;
          background-color: #ef8264;
        }
      }
    }
  }
`;