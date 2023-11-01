import styled from "styled-components";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/theme";

const Main = styled.section`
  display: flex;
  //min-height: 100vh;
  background-color: antiquewhite;
`;

const SmallText = styled.span`
  font-weight: 400;
  font-size: 14px;
`

const Name = styled.h2`
  ${font({family:"'Josefin Sans', sans-serif", weight: 700, fMax: 50, fMin: 36})};
  letter-spacing: 0.05em;
  margin: 10px 0;

  span{
    position: relative;
    z-index: 0;
    white-space: nowrap;

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
  
  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  };
`;

const MainTitle = styled.h1`
  ${font({weight: 400, fMax: 27, fMin: 20})};
  p {
    display: none;
  }
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  user-select: none;

  &::before {
    content: " ";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
    border-radius: 20% 5% 20% 5%;
    @media ${theme.media.mobile} {
        width: 314px;
        height: 414px;
      &::before {
        top: -17px;
        right: 20px;
      }
    }
  }
  @media ${theme.media.mobile} {
    margin-top: 65px;
  }
`

const Photo = styled.img`
  width: 350px;
  height: 450px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 20% 5% 20% 5%;
  
  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`;

export const S = {
    Main, SmallText, Name, MainTitle, Photo, PhotoWrapper
}