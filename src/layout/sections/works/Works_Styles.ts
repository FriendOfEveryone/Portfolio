import styled from "styled-components";
import {theme} from "../../../styles/theme";
import {Link} from "../../../components/Link";
import {StyledButton} from "../../../components/Button";

const Works = styled.section``;

const Work = styled.div`
  background-color: ${theme.colors.secondaryBg};
  width: 330px;
  flex-grow: 1;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }
  @media ${theme.media.desktop} {
    max-width: 540px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  ${StyledButton} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    display: none;
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(3px);
  }

  &:hover {
    &::before {
      display: block;
    }
    
    ${StyledButton} {
      display: block;
    }
  }
  
  @media ${theme.media.tablet} {
    &::before {
      display: block;
    }
    ${StyledButton} {
      display: block;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const Discription = styled.div`
  padding: 25px 20px;
`;

const Title = styled.h3``;

const Text = styled.p`
  margin: 14px 0 10px;
`;

export const S = {
    Work, Works, ImageWrapper, Image, Discription, Title, Text
}