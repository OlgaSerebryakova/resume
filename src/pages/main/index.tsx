import React from "react";
import { connect } from 'react-redux';
import mapStateToProps from './selectors';
import { changeLocationAction, changeThemeAction } from '../../app/actions';
import Title from '../../components/title';
import SideBar from  '../../components/side-bar';
import About from './sections/about/index';
import Experience from './sections/experience/index';
import Skills from './sections/skills/index';
import Contacts from './sections/contacts/index';

import {
  PageWrapper,
  Content,
  ContainerTitle,
  LeftSideBar,
} from './style';


interface IProps {
  isMobile?: boolean;
  translator(key: string): string;
  changeLocationAction(): any;
  changeThemeAction(): any;
  theme: string;
  localization: string
}

const Main:React.FC<IProps> = (props) => {
  const { theme, translator, localization } = props;
  return(
    <PageWrapper>
      <Content theme={theme} id="main">
        <ContainerTitle>
          <Title
            theme={theme}
            phrases={[translator('title:name'), translator('title:frontendDeveloper')]}
            titleHead={translator('title:head')}
            localization={localization}
            titleHello={translator('title:hello')}
          />
        </ContainerTitle>
        <LeftSideBar>
          <SideBar onClickTheme={props.changeThemeAction}
                   theme={theme}
                   onClickChangeLocation={props.changeLocationAction}
                   translateIconLocation={translator('icon:location')}
                   direction={'column'}/>
        </LeftSideBar>
      </Content>
      <About/>
      <Experience />
      <Skills />
      <Contacts />
    </PageWrapper>
  )
}

export default connect(mapStateToProps, { changeLocationAction, changeThemeAction })(Main);
