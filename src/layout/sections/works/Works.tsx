import React, {useState} from "react";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TapStatusType} from "./tabMenu/TabMenu";
import {Work} from "./work/Work";
import {FlexWrapper} from "../../../components/FlexWrapper";
import socialImg from "../../../assets/images/proj1.webp";
import timer from "../../../assets/images/proj2.webp";
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles";

const tabsItems: Array<{ status: TapStatusType, title:string}> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "Landing page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "SPA",
        status: "spa"
    },
]

const worksData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore" +
            " et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa"
    },
    {
        title: "Timer",
        src: timer,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt" +
            " ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "react"
    },
]
export const Works: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
    let filteredWorks = worksData;

    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing");
    }
    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react");
    }
    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa");
    }

    function changeFilterStatus (value: TapStatusType) {
        setCurrentFilterStatus(value);

    }


    return (
        <S.Works>
            <Container border="1px">
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify="space-around" align="flex-start" wrap="wrap" gap="30px">
                    {filteredWorks.map((item, index) => {
                        return (
                            <Work
                                src={item.src} key={index}
                                title={item.title}
                                text={item.text}/>
                        )
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

