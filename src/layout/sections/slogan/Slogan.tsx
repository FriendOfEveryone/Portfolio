import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { StyledButton } from "../../../components/Button";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Slogan: React.FC = () => {
  return (
    <StyledSlogan>
      <Container border="1px">
        <FlexWrapper direction="column" align="center">
          <SectionTitle>I Am Available For Freelance</SectionTitle>
          <StyledButton>Hire me</StyledButton>
        </FlexWrapper>
      </Container>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
`;
