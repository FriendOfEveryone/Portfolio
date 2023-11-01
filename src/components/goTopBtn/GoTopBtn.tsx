import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";

export const GoToTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 700) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        })
    }, [])

    return (

        <>
            {showBtn && (
                <StyledGoToTopBtn onClick={() => {
                    scroll.scrollToTop()
                }}>
                    <Icon iconId={"goToTopBtn"} height={"16"} width={"16"} viewBox={"0 0 16 16"}/>
                </StyledGoToTopBtn>
            )}
        </>


    );
};

const StyledGoToTopBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 8px;
  position: fixed;
  right: 30px;
  bottom: 30px;
`
