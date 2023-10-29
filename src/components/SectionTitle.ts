import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import {font} from "../styles/Common";


export const SectionTitle = styled.div`
   ${font({family: "'Josefin Sans', sans-serif", weight: 600, fMax: 36, fMin: 30})};
   position: relative;
   text-align: center;
   letter-spacing: 5px;
   margin-bottom: 90px;

   &::before {
      content: "";
      display: inline-block;
      width: 55px;
      height: 1px;
      background-color: ${theme.colors.accent};
      position: absolute;
      left: 50%;
      bottom: -30px;
      transform: translate(-50%);

      @media ${theme.media.mobile} {
         bottom: -24px;
      }
   }
`;
