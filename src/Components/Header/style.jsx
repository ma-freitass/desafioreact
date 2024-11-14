import styled from "styled-components";

export const HeaderStyle = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  display: flex;
  margin: 20px 30px;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  
  
 nav{
  border: 2px solid #000;
  display: flex;
  width: 30vw;
  justify-content: center;
  align-items: end;
  justify-content: space-around;
  li{
    border: 1px solid #000;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
  }
}   
`



