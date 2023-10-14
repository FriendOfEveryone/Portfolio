import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { theme } from "../../styles/theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container border="1px">
        <FlexWrapper direction="column" align="center">
          <Name>Denis Sudnikov</Name>
          <SocialList>
            <SocialItem>
              <SocialLink href="#">
                <Icon
                  height="21px"
                  width="21px"
                  viewBox="0 0 21 21"
                  iconId="instagram"
                />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="#">
                <Icon
                  height="21px"
                  width="21px"
                  viewBox="0 0 21 21"
                  iconId="telegram"
                />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="#">
                <Icon
                  height="21px"
                  width="21px"
                  viewBox="0 0 21 21"
                  iconId="vk"
                />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="#">
                <Icon
                  height="21px"
                  width="21px"
                  viewBox="0 0 21 21"
                  iconId="linkedin"
                />
              </SocialLink>
            </SocialItem>
          </SocialList>
          <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primiryBg};
  padding: 40px 0;
`;

const Name = styled.span`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 3px;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`;

const SocialItem = styled.li`
`;

const SocialLink = styled.a`
display: flex;
justify-content: center;
align-items: center;

background-color: rgba(255, 255, 255, 0.1);
border-radius: 50%;
width: 35px;
height: 35px;

color: ${theme.colors.accent};

&:hover{
  color: ${theme.colors.primiryBg};
  transform: translateY(-4px);
  background-color: ${theme.colors.accent};
  transition-duration: .2s;
}

`;

const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`;
