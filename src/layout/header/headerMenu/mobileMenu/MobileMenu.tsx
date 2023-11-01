import React, {useState} from "react";
import {Menu} from "../menu/Menu";
import {S} from "./../HeaderMenu_Styles"


export const MobileMenu: React.FC = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span>
                </span>
            </S.BurgerButton>
            <S.MenuPopup isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <Menu/>
            </S.MenuPopup>

        </S.MobileMenu>
    );
};


