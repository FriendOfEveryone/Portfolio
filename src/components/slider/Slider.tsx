import React from "react";
import {FlexWrapper} from "../FlexWrapper";
import {S} from "./Slider_Styles";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css"
import "./../../styles/slider.css"

type SlidePropsType = {
    text: string,
    userName: string
}

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.Text >
                {props.text}
            </S.Text>
            <S.Name>@{props.userName}</S.Name>
        </S.Slide>
    )
}

const items = [
    <Slide userName={"ivan ivanow"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n" +
        "eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.\n" +
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />,
    <Slide userName={"petr petrov"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n" +
        "eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.\n" +
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />,
    <Slide userName={"bogdan bogdanov"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n" +
        "eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.\n" +
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />
];

export const Slider = () => {
    return (
        <S.Slider>
            <AliceCarousel mouseTracking items={items}/>
        </S.Slider>

    )
};

