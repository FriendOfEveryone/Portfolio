import styled from "styled-components";

type ConteinerPropertyTypes = {
    border?: string;
}

export const Container = styled.div<ConteinerPropertyTypes>`
  position: relative;
    max-width: 1170px;
    width: 100%;
    min-height: 100%;
    padding: 0 15px;
    margin: 0 auto;
    //outline: ${props => props.border || 0} solid red;
`