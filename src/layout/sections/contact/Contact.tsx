import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { StyledButton } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/theme";
import {S} from "./Contact_Styles";

export const Contact: React.FC = () => {
  return (
    <S.Contact>
      <Container border="1px">
        <SectionTitle>Contact</SectionTitle>
        <S.Form>
          <S.Field placeholder="name" />
          <S.Field placeholder="subject" />
          <S.Field as="textarea" placeholder="message"/>
          <StyledButton type="submit">Send message</StyledButton>
        </S.Form>
      </Container>
    </S.Contact>
  );
};


