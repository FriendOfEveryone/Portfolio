import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";


export const SectionTitle = styled.div`
  position: relative;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 600;
  font-size: 36px;
  text-align: center;
  letter-spacing: 5px;
  margin-bottom: 90px;

  &::before {
    content:"";
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: ${theme.colors.accent};
    position: absolute;
    left: 50%;
    bottom: -30px;
    transform: translate(-50%);
  }
`;
