import React from "react";
import { connect } from 'react-redux';
import mapStateToProps from './selectors';
import { changeLocationAction, changeThemeAction } from '../../../../app/actions';
import Map from '../../../../assets/icons/map';
import Mail from '../../../../assets/icons/mail';
import Phone from '../../../../assets/icons/phone';
import GitHub from '../../../../assets/icons/github';
import Instagram from "../../../../assets/icons/instagramm";
import Vk from "../../../../assets/icons/vk";
import Telegram from "../../../../assets/icons/telegram";
import ArrowUp from "../../../../assets/icons/arrowUp";
import ShowUpAnimation from "../../../../components/showUpAnimation";

import {
  Contacts,
  ContactsContainer,
  ContactsTitle,
  TextForContact,
  ContactsContent,
  BoxContacts,
  ContactItem,
  ContactLink,
  ContactIcon,
  SocialContainer,
  SocialIcon,
  Footer
} from './style';



interface IProps {
  translator(key: string): string;
  changeLocationAction(): any;
  changeThemeAction(): any;
  theme: string;
  localization: string
}

const ContactsSection:React.FC<IProps> = (props) => {
  const { theme, translator } = props;
  return(
    <Contacts id="contacts">
        <ContactsContainer theme={theme}>
          <ShowUpAnimation>
            <ContactsTitle>{translator('menu:contact')}</ContactsTitle>
          </ShowUpAnimation>
          <ContactsContent>
            <ShowUpAnimation>
              <TextForContact>{translator('contacts:text')}</TextForContact>
            </ShowUpAnimation>
            <BoxContacts>
              <ShowUpAnimation>
                <ContactItem theme={theme}>
                  <ContactIcon theme={theme}>
                    <Phone size={40} />
                  </ContactIcon>
                  <ContactLink href='tel:+ 79175196800'>8-917-519-68-00</ContactLink>
                  <h4>{translator('info:title_tel')}</h4>
                </ContactItem>
              </ShowUpAnimation>
              <ShowUpAnimation>
                <ContactItem theme={theme}>
                  <ContactIcon theme={theme}>
                    <Mail size={40} />
                  </ContactIcon>
                  <ContactLink href='mailto:lelka-7770@yandex.ru'>lelka-7770@yandex.ru</ContactLink>
                  <h4>Email</h4>
                </ContactItem>
              </ShowUpAnimation>
              <ShowUpAnimation>
                <ContactItem theme={theme}>
                  <ContactIcon theme={theme}>
                    <Map size={40} />
                  </ContactIcon>
                  <ContactLink>{translator('info:address')}</ContactLink>
                  <h4>{translator('info:title_address')}</h4>
                </ContactItem>
              </ShowUpAnimation>
            </BoxContacts>
          </ContactsContent>
          <ShowUpAnimation>
            <SocialContainer>
              <SocialIcon theme={theme} as="a" href="https://github.com/OlgaSerebryakova">
                <GitHub size={30}/>
              </SocialIcon>
              <SocialIcon theme={theme} as="a" href="https://www.instagram.com/lelkamod/">
                <Instagram size={30} />
              </SocialIcon>
              <SocialIcon theme={theme} as="a" href="#main">
                <ArrowUp size={30} />
              </SocialIcon>
              <SocialIcon theme={theme} as="a" href="https://t.me/OlgaSerebry">
                <Telegram size={30} />
              </SocialIcon>
              <SocialIcon theme={theme} as="a" href="https://vk.com/id6392182">
                <Vk size={30} />
              </SocialIcon>
            </SocialContainer>
          </ShowUpAnimation>
        </ContactsContainer>
        <Footer>
          <h4>{`© ${new Date().getFullYear()} Olga Serebryakova`}</h4>
        </Footer>
    </Contacts>
  )
}

export default connect(mapStateToProps, { changeLocationAction, changeThemeAction })(ContactsSection);
