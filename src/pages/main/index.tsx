import React from "react";
import { connect } from 'react-redux';
import mapStateToProps from './selectors';
import { changeLocationAction, changeThemeAction } from '../../app/actions';
import Title from '../../components/title';
import SideBar from  '../../components/side-bar';

import {
  PageWrapper,
  Content,
  ContainerTitle,
  LeftSideBar,
  About,
  AboutContainer
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

  return(
    <PageWrapper>
      <Content theme={props.theme} id="main">
        <ContainerTitle>
          <Title
            theme={props.theme}
            phrases={[props.translator('title:name'), props.translator('title:frontentDeveloper')]}
            titleHead={props.translator('title:head')}
            localization={props.localization}
            titleHello={props.translator('title:hello')}
          />
        </ContainerTitle>
        <LeftSideBar>
          <SideBar onClickTheme={props.changeThemeAction}
                   theme={props.theme}
                   onClickChangeLocation={props.changeLocationAction}
                   translateIconLocation={props.translator('icon:location')}
                   direction={'column'}/>
        </LeftSideBar>
      </Content>
      <About id="about">
        <AboutContainer theme={props.theme} />
      </About>
    </PageWrapper>
  )
}

export default connect(mapStateToProps, { changeLocationAction, changeThemeAction })(Main);
