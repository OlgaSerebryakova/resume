import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'

import { AppStateType } from "../store";
import './App.css';
import { GlobalStyle } from './style';
import Main from "../pages/main";
import Header from '../components/header';
import MenuBurgerContainer from '../components/menu-burger'
import MobileNav from '../components/mobile-nav';

interface ImapStateToProps {
  theme: 'light' | 'dark'
}

const App: React.FC<ImapStateToProps> = (props) => {
  const [ isOpenMenu, setOpenMenu ] = useState(false);

  return (
    <>
      <GlobalStyle theme={props.theme} />
      <Header />
      <MenuBurgerContainer theme={props.theme} onClick={() => setOpenMenu(!isOpenMenu)} isOpenMenu={isOpenMenu}/>
      { isOpenMenu && <MobileNav onClick={() => setOpenMenu(!isOpenMenu)} isOpenMenu={isOpenMenu}/> }
      <Switch>
        <Route path='/' exact={true} component={Main} />
      </Switch>
    </>
  );
}

const mapStateToProps = (state: AppStateType):ImapStateToProps => ({
 theme: state.applicationReducer.theme
})

export default connect(mapStateToProps)(App);