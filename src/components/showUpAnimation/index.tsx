import React, {useEffect, useState} from "react";
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

  // const showUpEffect = (scrollTop:number) => {
  //
  //   const [isAnimateShowUp, setAnimateShowUp]  = useState(false);
  //
  //   useEffect(() => {
  //     const onScroll = () => {
  //       const windowScrollTop = document.documentElement.getBoundingClientRect().top;
  //
  //       if (windowScrollTop < -scrollTop) {
  //         setAnimateShowUp(true);
  //       } else {
  //         setAnimateShowUp(false);
  //       }
  //     }
  //     window.addEventListener('scroll', onScroll )
  //     return () => {
  //       window.removeEventListener('scroll', onScroll);
  //     };
  //   })
  // }

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
              <InfoGrid>
                <ItemInfo>{translator('info:title_first_name')}:<span>{translator('info:first_name')}</span></ItemInfo>
                <ItemInfo>{translator('info:title_last_name')}:<span>{translator('info:last_name')}</span></ItemInfo>
                <ItemInfo>{translator('info:title_birthday')}:<span>15.06.1991</span></ItemInfo>
                <ItemInfo>{translator('info:title_address')}:<span>{translator('info:address')}</span></ItemInfo>
                <ItemInfo>E-mail:<span>lelka-7770@yandex.ru</span></ItemInfo>
                <ItemInfo theme={theme}>{translator('info:title_tel')}:<a href='tel:+ 79175196800' >8-917-519-68-00</a></ItemInfo>
              </InfoGrid>
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
