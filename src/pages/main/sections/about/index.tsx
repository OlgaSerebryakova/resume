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
  translator(key: string): string;
  changeLocationAction(): any;
  changeThemeAction(): any;
  theme: string;
  localization: string
}

const AboutSection:React.FC<IProps> = (props) => {
  const { theme, translator } = props;

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
                  Я начинающий JavaScript разработчик и имею большое желание развиваться в сфере фронтенда.
                  Oкончила курсы Front-end school Газпромбанка, затем проходила там стажировку.
                  Активно занимаюсь самообразованием.
                </InfoAboutMe>
              </ShowUpAnimation>
              <ShowUpAnimation>
                <InfoGrid>
                  <ItemInfo>{translator('info:title_first_name')}:<span>{translator('info:first_name')}</span></ItemInfo>
                  <ItemInfo>{translator('info:title_last_name')}:<span>{translator('info:last_name')}</span></ItemInfo>
                  <ItemInfo>{translator('info:title_birthday')}:<span>{translator('info:birthday')}</span></ItemInfo>
                  <ItemInfo>{translator('info:title_address')}:<span>{translator('info:address')}</span></ItemInfo>
                  <ItemInfo>{translator('info:title_email')}:<span>{translator('info:email')}</span></ItemInfo>
                  <ItemInfo theme={theme}>{translator('info:title_tel')}:<a href='tel:+ 79175196800' >{translator('info:tel')}</a></ItemInfo>
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
