import React, {useEffect, useState} from "react";
import { connect } from 'react-redux';
import mapStateToProps from './selectors';
import {
  MenuContainer,
  MenuItem,
  StyledLink,
  IconWrapper
} from './style';
import Diamond from "../../assets/icons/diamond";

interface IMapStateToProps {
  translator: (key: string) => string,
  theme: 'light' | 'dark'
}

const Header:React.FC<IMapStateToProps> = (props) => {

  const [isFixedHeader, setFixedHeader]  = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const windowScrollTop = document.documentElement.getBoundingClientRect().top;

      if (windowScrollTop < -600) {
        setFixedHeader(true);
      } else {
        setFixedHeader(false)
      }
    }
    window.addEventListener('scroll', onScroll )
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  })

  return(
    <MenuContainer theme={props.theme} isFixedHeader={isFixedHeader}>
      <MenuItem><StyledLink theme={props.theme} href="#main">{props.translator('menu:main')}</StyledLink></MenuItem>
      <MenuItem><StyledLink theme={props.theme} href="#about">{props.translator('menu:about')}</StyledLink></MenuItem>
      <IconWrapper theme={props.theme}>
        <Diamond size={50} />
      </IconWrapper>
      <MenuItem><StyledLink theme={props.theme} href="#skills">{props.translator('menu:skills')}</StyledLink></MenuItem>
      <MenuItem><StyledLink theme={props.theme} href="#contacts">{props.translator('menu:contact')}</StyledLink></MenuItem>
      {/*<MenuItem><StyledLink theme={props.theme} to="#/about">{props.translator('menu:components')}</StyledLink></MenuItem>*/}
    </MenuContainer>
  )
}

export default connect(mapStateToProps)(Header);
