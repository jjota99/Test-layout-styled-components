import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 20px;
  
  header {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding-left: 10px;
    
    img {
      width: 40px;
      height: 40px;
      margin-right: 20px;
    }

    span {
      font-size: 20px;
    }
  }
`;