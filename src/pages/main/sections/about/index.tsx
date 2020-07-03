import React from "react";
import { connect } from 'react-redux';
import mapStateToProps from './selectors';
import { changeLocationAction, changeThemeAction } from '../../../../app/actions';
import ShowUpAnimation from "../../../../components/showUpAnimation";

import {
  About,
  AboutContainer,
  AboutTitle,
  AboutContent,
  PhotoContainer,
  Photo,
  InfoContainer,
  InfoAboutMe,
  PhotoWrapper,
  InfoGrid,
  ItemInfo,
  ButtonContainer,
  Button,
} from './style';



interface IProps {
  translator(key: string): string,
  transfer(key: string): string,
  changeLocationAction(): any,
  changeThemeAction(): any,
  theme: string,
  localization: string,
  about: any
}

const AboutSection:React.FC<IProps> = (props) => {
  const { theme, translator, about } = props;

  return(
    <About id="about">
        <AboutContainer theme={theme}>
          <ShowUpAnimation>
            <AboutTitle>{translator('menu:about')}</AboutTitle>
          </ShowUpAnimation>
          <AboutContent>
            <PhotoWrapper>
              <PhotoContainer theme={theme}>
                <Photo/>
              </PhotoContainer>
            </PhotoWrapper>
            <InfoContainer theme={theme}>
              <ShowUpAnimation>
                <InfoAboutMe theme={theme}>
                  {about[props.localization].about.text}
                </InfoAboutMe>
              </ShowUpAnimation>
              <ShowUpAnimation>
                <InfoGrid>
                  {about[props.localization].info.map((infoItem: any) => {
                    return (
                      <ItemInfo key={Math.random()}>{infoItem.title}:<span>{infoItem.content}</span></ItemInfo>
                    )
                  })}
                </InfoGrid>
              </ShowUpAnimation>
              <ShowUpAnimation>
                <ButtonContainer>
                  <Button theme={theme} download href='#'>{translator('buttons:download')}</Button>
                </ButtonContainer>
              </ShowUpAnimation>
            </InfoContainer>
          </AboutContent>
        </AboutContainer>
    </About>
  )
}

export default connect(mapStateToProps, { changeLocationAction, changeThemeAction })(AboutSection);
