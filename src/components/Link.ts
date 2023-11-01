import styled, {css} from "styled-components";
import { theme } from "../styles/theme";

export const Link = styled.a<{active?:boolean}>`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    height: 0;
    background-color: ${theme.colors.accent};
    display: inline-block;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    z-index: -1;
    transition-duration: ${theme.animation.transition};

    ${props => props.active && css<{ active?: boolean }>`
      height: 10px;
    `}
  }
  
  &:hover {
    &::before {
      height: 10px;
    }
  }
`;