import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./tabMenu/TabMenu";
import { Work } from "./work/Work";
import { FlexWrapper } from "../../../components/FlexWrapper";
import socialImg from "../../../assets/images/proj1.webp";
import timer from "../../../assets/images/proj2.webp";
import { Container } from "../../../components/Container";

const items = ["All", "Lending Page", "React", "SPA"];

export const Works = () => {
  return (
    <StyledWorks>
      <Container border="1px">
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={items} />
        <FlexWrapper justify="space-between" align="flex-start">
          <Work
            src={socialImg}
            title="Social Network"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
          <Work
            src={timer}
            title="Timer"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section``;
