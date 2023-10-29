import React from "react";
import styled from "styled-components";
import {theme} from "../../../../styles/theme";
import {Link} from "../../../../components/Link";

export type TapStatusType = "all"|"landing"|"react"|"spa";

type TapMenuPropsType = {
    tabsItems: Array<{ status: TapStatusType, title:string}>
    changeFilterStatus: (value: TapStatusType) => void
    currentFilterStatus: string
}
export const TabMenu = (props: TapMenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabsItems.map((item, index: number) => {
                        return <ListItem key={index}>
                            <Link active={props.currentFilterStatus === item.status} as={"button"} onClick={() => props.changeFilterStatus(item.status)}>{item.title}</Link>
                        </ListItem>
                    }
                )}
            </ul>
        </StyledTabMenu>
    );
}

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    margin: 0 auto 40px;
    max-width: 352px;
    width: 100%;
  }
`

const ListItem = styled.li`

`;