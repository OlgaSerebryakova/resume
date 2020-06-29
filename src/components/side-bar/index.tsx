import React from "react";
import HalfMoon from '../../assets/icons/halfmoon';
import Sun from '../../assets/icons/sun2';


import {
  WrapperSideBar,
  ThemeContainer,
  LocationContainer,
  IconWrapper,
} from './style';


interface IProps {
  isMobile?: boolean,
  translateIconLocation: string,
  onClickChangeLocation(): any,
  onClickTheme(): any,
  theme: string,
  direction: string
}

const SideBar:React.FC<IProps> = (props) => {

  return(
    <WrapperSideBar direction={props.direction}>
      <ThemeContainer onClick={props.onClickTheme}>
        <IconWrapper>
          {props.theme === 'light' ? <HalfMoon size={36}/> : <Sun size={36}/>}
        </IconWrapper>
      </ThemeContainer>
      <LocationContainer theme={props.theme} onClick={props.onClickChangeLocation}>{props.translateIconLocation}</LocationContainer>
    </WrapperSideBar>
  )
}

export default SideBar

src/components/side-bar
