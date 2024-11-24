import styled from "styled-components";

export const MainStyle = styled.main`

    display: flex;
    align-items: center;
    jusify-content: center;
    width: 100vw;
    min-height: 50vh;
    
    margin-left: 116px;
    box-sizing: border-box;
    overflow: hidden;
    font-family: "Poppins", serif;

    @media (max-width: 540px) {
        flex-direction: column;
        height: auto;
        padding: 10px;
    }


`
export const Section = styled.section`
    position: relative;
    max-width: 90vw;
    height: auto;
    margin-top: 100px;

    @media (max-width: 540px) {
        max-width: 90%;
        height: auto;
        margin-top: 50px;
        text-align: center;
    }

`
export const Copo = styled.img`
    position: absolute;
    width: 20vw;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); 
    padding: 0; 
    margin: 0; 

    @media (max-width: 450px) {
        width: 50vw;
    }

`
export const Elipse = styled.img`
  position: relative;
  width: 30vw; 
  z-index: -1; 
  margin: 0 auto;

  @media (max-width: 450px) {
    width: 60vw;
  }
`
export const Titulo = styled.h2`
    
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 64px;
        
`
export const Subtitulo = styled.h1`

    margin-top: -55px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 64px;
`
export const Span = styled.span`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 96px;
    color: #037143;
`
export const Texto = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 24px;
    color: #000000;
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
`
export const Div = styled.div`
    margin-top: 94px;
    margin-left: 480px;
    width: 30vw;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
`