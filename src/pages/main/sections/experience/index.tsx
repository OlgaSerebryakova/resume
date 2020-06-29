import React from "react";
import { connect } from 'react-redux';
import mapStateToProps from './selectors';
import { changeLocationAction, changeThemeAction } from '../../app/actions';
import Title from '../../components/title';
import SideBar from  '../../components/side-bar';
import Sun from '../../assets/icons/sun';
import AboutSection from './sections/about/index';


import {
  PageWrapper,
  Content,
  ContainerTitle,
  LeftSideBar,
  About,
  AboutContainer,
  AboutTitle,
  AboutContent,
  PhotoContainer,
  Photo,
  InfoContainer,
  InfoAboutMe,
  PhotoWrapper,
  InfoGreed,
  ItemInfo,
  ButtonContainer,
  Button,
  Experience,
  ExperienceContainer,
  ExperienceTitle,
  Timeline,
  ItemTineLine,
  IconTimeline,
  ItemText,
  ItemTextTitle
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
            phrases={[translator('title:name'), translator('title:frontentDeveloper')]}
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
      <AboutSection/>
      <Experience>
        <ExperienceContainer>
          <ExperienceTitle>{translator('experience:title')}</ExperienceTitle>
          <Timeline theme={theme}>
            <ItemTineLine>
              <IconTimeline theme={theme}>
                <Sun size={40}/>
              </IconTimeline>
              <ItemText>
                <ItemTextTitle>МЭСИ</ItemTextTitle>
              </ItemText>
            </ItemTineLine>
          </Timeline>
        </ExperienceContainer>
      </Experience>

    </PageWrapper>
  )
}

export default connect(mapStateToProps, { changeLocationAction, changeThemeAction })(Main);
