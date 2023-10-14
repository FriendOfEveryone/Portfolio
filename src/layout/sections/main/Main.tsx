import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container border="1px">
        <FlexWrapper align={"center"} justify={"space-between"}>
          <div>
            <SmallText>Hi There</SmallText>
            <Name>I'm <span>Denis Sudnikau</span></Name>
            <MainTitle>A Web Developer.</MainTitle>
          </div>
          <PhotoWrapper><Photo src={photo} /></PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;
  background-color: antiquewhite;
`;

const SmallText = styled.span`
  font-weight: 400;
  font-size: 14px;
`

const Name = styled.h2`
  font-family: 'Josefin Sans';
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 0.05em;
  margin: 10px 0;

  span{
    position: relative;
    z-index: 0;

    &::before {
      content:"";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};

      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`;

const MainTitle = styled.h1`
  font-weight: 400;
  font-size: 27px;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: " ";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};

    position: absolute;
    top: -24px;
    left: 24px;

    z-index: -1;
  }
`

const Photo = styled.img`
  width: 350px;
  height: 450px;
  object-fit: cover;
`;
