import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { StyledButton } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/theme";

export const Contact = () => {
  return (
    <StyledContact>
      <Container border="1px">
        <SectionTitle>Contact</SectionTitle>
        <StyledForm>
          <Field placeholder="name" />
          <Field placeholder="subject" />
          <Field as="textarea" placeholder="message"/>
          <StyledButton type="submit">Send message</StyledButton>
        </StyledForm>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  
`;

const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  textarea{
    resize: none;
    height: 155px;
  }
`;

const Field = styled.input`
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.borderColor};
  padding: 7px 15px;
  font-family: 'Poppins', sans-serif;
  color: ${theme.colors.font};
  font-size: 12px;
  letter-spacing: 0.05em;

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }

  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }
`;
