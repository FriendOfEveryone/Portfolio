import styled from "styled-components";
import {theme} from "../../styles/theme";

const Slider = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slide = styled.div`
  text-align: center;
`;

const Text = styled.p``;

const Name = styled.span`
  display: inline-block;
  font-size: 16px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 22px 0 32px;
`;

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    & + span {
      margin-left: 5px;
    }

    &.active {
      background-color: ${theme.colors.accent};
      width: 20px;
    }
  }
`;

export const S = {
    Slider, Slide, Text, Name, Pagination
}