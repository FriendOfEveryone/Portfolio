import React from 'react';
import {S} from "./../HeaderMenu_Styles"

const items = ["home", "skills", "works", "testimony", "contact"];
export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item: string, index: number) => {
                return (
                    <S.MenuItem key={index}>
                        <S.NavLink to={item} smooth={true} activeClass={"active"} spy={true}>
                            {item}
                            <S.Mask>
                                <span>{item}</span>
                            </S.Mask>
                            <S.Mask>
                                <span>{item}</span>
                            </S.Mask>
                        </S.NavLink>
                    </S.MenuItem>
                );
            })}
        </ul>
    );
};




