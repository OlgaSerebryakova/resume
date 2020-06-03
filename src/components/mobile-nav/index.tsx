import React, { MouseEvent } from "react";
import { connect } from 'react-redux';
import mapStateToProps from './selectors';

import ModalWrapper from "../modal";
import SideBar from "../side-bar";
import Diamond from "../../assets/icons/diamond";

import {
  MenuWrapper,
  MenuItem,
  StyledLink,
  LogoWrapper,
  BottomSideBar,
  BoxHidden
} from './styled';

import { changeLocationAction, changeThemeAction } from '../../app/actions';

interface IProps {
  translator: (key: string) => string,
  theme: string,
  onClick: () => void,
  isOpenMenu: boolean,
  changeLocationAction(): any,
  changeThemeAction(): any,
}

const MobileNav:React.FC<IProps>  = (props) => {
  const { theme } = props;

  const onClickLink = (event: MouseEvent<HTMLElement>) => {
    const element = event.target as HTMLElement;

    if (element.tagName === 'A') {
      props.onClick();
    }
  }

  return(
    <ModalWrapper theme={theme}>
      <LogoWrapper theme={theme}>
        <Diamond size={40} />
      </LogoWrapper>
      <MenuWrapper onClick={onClickLink}>
        <MenuItem>
          <StyledLink theme={theme} href="#main">{props.translator('menu:main')}</StyledLink>
          <BoxHidden theme={theme}/>
        </MenuItem>
        <MenuItem>
          <StyledLink theme={theme} href="#about">{props.translator('menu:about')}</StyledLink>
          <BoxHidden theme={theme}/>
        </MenuItem>
        <MenuItem>
          <StyledLink theme={theme} href="#about">{props.translator('menu:skills')}</StyledLink>
          <BoxHidden theme={theme}/>
        </MenuItem>
        <MenuItem>
          <StyledLink theme={theme} href="#about">{props.translator('menu:contact')}</StyledLink>
          <BoxHidden theme={theme}/>
        </MenuItem>
        <MenuItem>
          <StyledLink theme={theme} href="#about">{props.translator('menu:components')}</StyledLink>
          <BoxHidden theme={theme}/>
        </MenuItem>
      </MenuWrapper>
      <BottomSideBar>
        <SideBar onClickTheme={props.changeThemeAction}
                 theme={props.theme}
                 onClickChangeLocation={props.changeLocationAction}
                 translateIconLocation={props.translator('icon:location')}
                 direction={'row'}/>
      </BottomSideBar>
    </ModalWrapper>
  )
}

export default connect(mapStateToProps, { changeLocationAction, changeThemeAction })(MobileNav);