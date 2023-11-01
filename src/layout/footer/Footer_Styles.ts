import styled from "styled-components";
import {theme} from "../../styles/theme";
import {font} from "../../styles/Common";

const Footer = styled.footer`
  background-color: ${theme.colors.primiryBg};
  padding: 40px 0;
`;

const Name = styled.span`
  ${font({family: "'Josefin Sans', sans-serif", weight: 700, fMax: 22, fMin: 16})};
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
  transition-duration: ${theme.animation.transition};
color: ${theme.colors.accent};

&:hover{
  color: ${theme.colors.primiryBg};
  transform: translateY(-4px);
  background-color: ${theme.colors.accent};
}

`;

const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`;

export const S = {
    Footer, Name, SocialList, SocialItem, SocialLink, Copyright
}