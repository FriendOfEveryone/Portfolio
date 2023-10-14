import React from "react";
import styled from "styled-components";
import { Link } from "../../../../components/Link";
import { theme } from "../../../../styles/theme";
import { StyledButton } from "../../../../components/Button";

type WorkPropsType = {
  src: string;
  title: string;
  text: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <ImageWrapper>
        <Image src={props.src} alt="" />
        <StyledButton>View progect</StyledButton>
      </ImageWrapper>
      <Discription>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Link href="#">Demo</Link>
        <Link href="#">Code</Link>
      </Discription>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: ${theme.colors.secondaryBg};
  max-width: 540px;
  width: 100%;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
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

  &:hover {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(3px);
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
