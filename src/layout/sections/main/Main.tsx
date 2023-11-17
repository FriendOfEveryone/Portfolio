import React from "react";
import photo from "../../../assets/images/photo.webp";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


export const Main = () => {
    return (
        <S.Main id={"home"}>
            <Container border="1px">
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"} gap={"40px"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I'm <span>Denis Sudnikov</span></S.Name>
                        <S.MainTitle>
                            <p>A Web Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer.', 'A Frontend Developer.', 'A Web Designer.'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                }}
                            />
                        </S.MainTitle>
                    </div>
                    <Tilt>
                        <S.PhotoWrapper><S.Photo src={photo}/></S.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

