import styled from "styled-components";


export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  background-color: #1e3932;

`
export const Div = styled.div`
width: 30vw;
`


export const Botao = styled.button`
    width: 293px;
    height: 64px;
    top: 650px;
    left: 116px;
    border-radius: 30px;
    background: #037143;
    color: #ffffff;
    font-family: "Inter", sans-serif;
    font-weight: 700px;
    font-size: 24px;
    border-style: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #00874c;
    }
    &:active {
      background-color: #004d30;
    }
`
export const Subtiulo = styled.h3`
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: #ffffff;
    margin-bottom: 0;
`
export const DivisaoImage = styled.div`
    width: 40%; 
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover; 
  }
`
export const Titulo = styled.h2`

    margin-top: 0;
      font-family: "Poppins", sans-serif;
      font-weight: 300;
      font-size: 44px;
      color: #ffffff;

`
export const Texto = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400px;
  font-size: 24px;
  color: #ffffff;
`