import styled from "styled-components";
import {theme} from "../styles/theme";

type WindowEmptyPropsType = {
   closed: boolean
}

export const WindowEmpty = styled.div<WindowEmptyPropsType>`
  display: ${props => props.closed ? "none" : "flex"};
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 150px;
  border: 2px solid ${theme.colors.borderColor};
  border-radius: 30px;
  background-color: ${theme.colors.secondaryBg};
  color: ${theme.colors.font};
  max-width: 360px;
  width: 100%;
  height: 80px;
  z-index: 999999999999;
  font-weight: bold;
  text-align: right;
  
  button {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: 10px;
    background-color: ${theme.colors.secondaryBg};
    width: 50px;
    height: 50px;
  }
  
  p {
    font-size: 20px;
  }
  
`