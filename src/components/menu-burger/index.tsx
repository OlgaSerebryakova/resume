import React from "react";

import {
  MenuButton,
  Bar
} from './style';

interface IProps {
  theme: string,
  onClick: any,
  isOpenMenu: boolean
}

const MenuBurgerContainer:React.FC<IProps>  = (props) => {
  return(
    <MenuButton onClick={props.onClick} isOpenMenu={props.isOpenMenu}>
      <Bar theme={props.theme}/>
      <Bar theme={props.theme}/>
      <Bar theme={props.theme}/>
    </MenuButton>
  )
}

export default MenuBurgerContainer;