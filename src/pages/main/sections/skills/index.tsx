import React from "react";
import { connect } from 'react-redux';
import mapStateToProps from './selectors';
import { changeLocationAction, changeThemeAction } from '../../../../app/actions';


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
  InfoGreed,
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
          <AboutTitle>{translator('menu:about')}</AboutTitle>
          <AboutContent>
            <PhotoWrapper>
              <PhotoContainer theme={theme}>
                <Photo/>
              </PhotoContainer>
            </PhotoWrapper>
            <InfoContainer theme={theme}>
              <InfoAboutMe theme={theme}>
                Я начинающий JavaScript разработчик и имею большое желание развиваться в сфере фронтенда.
                Oкончила курсы Front-end school Газпромбанка и активно занимаюсь самообразованием.
              </InfoAboutMe>
              <InfoGreed>
                <ItemInfo>Имя:<span>{translator('info:first_name')}</span></ItemInfo>
                <ItemInfo>Фамилия:<span>{translator('info:last_name')}</span></ItemInfo>
                <ItemInfo>День рождения:<span>15.06.1991</span></ItemInfo>
                <ItemInfo>Адрес:<span>{translator('info:address')}</span></ItemInfo>
                <ItemInfo>E-mail:<span>lelka-7770@yandex.ru</span></ItemInfo>
                <ItemInfo>Телефон:<span>8-917-519-68-00</span></ItemInfo>
              </InfoGreed>
              <ButtonContainer>
                <Button theme={theme} download href='#'>{translator('buttons:download')}</Button>
              </ButtonContainer>
            </InfoContainer>
          </AboutContent>
        </AboutContainer>
    </About>
  )
}

export default connect(mapStateToProps, { changeLocationAction, changeThemeAction })(AboutSection);
