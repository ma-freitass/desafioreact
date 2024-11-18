import styled from "styled-components";
import {Link} from "react-router-dom";

export const HeaderStyle = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyleLink = styled(Link)`
  text-decoration: none;
  color: #1e3922;
  &:hover{
    color: #0F744B;
  }
`
export const Ul = styled.ul`
  display: flex;
  width: 40vw;
  justify-content: space-around;
  list-style: none;
`

export const Li = styled.li`
  
  &:hover{
    color: pink;
  }
`


