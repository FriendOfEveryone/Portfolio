import React, {useState} from "react";
import {Menu} from "../menu/Menu";
import {S} from "./../HeaderMenu_Styles"


export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {

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
                <Menu menuItems={props.menuItems}/>
            </S.MenuPopup>

        </S.MobileMenu>
    );
};


