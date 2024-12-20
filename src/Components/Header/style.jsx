import styled from "styled-components";
import {Link} from "react-router-dom";

export const HeaderStyle = styled.header`
  display: flex;
  margin-left: 99px;
  margin-top: 52px;
  justify-content: space-between;
  align-items: center;
  font-family: "Poppins", serif;
  height: 100px;
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


