import React from "react";
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {theme} from "../../styles/theme";
import {font} from "../../styles/Common";
import {S} from "./Footer_Styles";

const SocialItemData = [
    {
        id: "instagram"
    },
    {
        id: "telegram"
    },
    {
        id: "vk"
    },
    {
        id: "linkedin"
    },
]

export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <Container border="1px">
                <FlexWrapper direction="column" align="center">
                    <S.Name>Denis Sudnikov</S.Name>
                    <S.SocialList>
                        {SocialItemData.map((item, index) => {
                            return (
                                <S.SocialItem key={index}>
                                    <S.SocialLink href="#">
                                        <Icon
                                            height="21px"
                                            width="21px"
                                            viewBox="0 0 21 21"
                                            iconId={item.id}
                                        />
                                    </S.SocialLink>
                                </S.SocialItem>
                            )
                        })}
                    </S.SocialList>
                    <S.Copyright>© 2023 Sudnikov Denis, All Rights Reserved.</S.Copyright>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};


