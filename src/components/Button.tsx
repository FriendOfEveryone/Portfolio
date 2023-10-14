import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

export const StyledButton = styled.button`
  position: relative;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  width: 170px;
  height: 32px;
  z-index: 0;

  &::before {
    position: absolute;
    content: "";
    height: 10px;
    width: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    background-color: ${theme.colors.accent};
    z-index: -1;
  }

  &:hover {
        &::before {
            width: 100%;
            height: 100%;
            transition-duration: .2s;
        }
    }
`;
