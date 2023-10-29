import React from "react";
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/theme";
import {StyledButton} from "../../../../components/Button";
import {S} from "./../Works_Styles"

type WorkPropsType = {
    src: string;
    title: string;
    text: string;
};

export const Work:React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt=""/>
                <StyledButton>View progect</StyledButton>
            </S.ImageWrapper>
            <S.Discription>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Link active href="#">Demo</Link>
                <Link href="#">Code</Link>
            </S.Discription>
        </S.Work>
    );
};

