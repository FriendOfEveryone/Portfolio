import React from "react";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from "./Skills_Styles"
import {Fade} from "react-awesome-reveal";

const skillData = [
    {
        iconId: "codeSvg",
        title: "HTML5",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "css",
        title: "CSS3",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "react",
        title: "REACT",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "ts",
        title: "TYPESCRIPT",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "styled",
        title: "STYLED COMPONENTS",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "figma",
        title: "WEB DESIGN",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
]

export const Skills = () => {
    return (
        <S.Skills id={"skills"}>
            <Container border="1px">
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap="wrap" justify="space-around">
                    <Fade cascade={true} damping={.1} style={{display: "flex"}}>
                        {skillData.map((item, index) => {
                            return <Skill
                                iconId={item.iconId} key={index}
                                title={item.title}
                                discription={item.discription}/>
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};


