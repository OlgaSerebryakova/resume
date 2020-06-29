import styled, {keyframes} from 'styled-components';

export const Contacts = styled.section`
  max-width: 1200px;
  margin: 15px auto;
`;

export const ContactsContainer = styled.div`
  padding-bottom: 2rem;
  border-bottom: 2px solid rgba(28,45,87,.3);
  
  a {
    text-decoration: none;
    color: ${props => props.theme === 'light' ? '#767777' : '#fff'};
  }
`;

export const ContactsTitle = styled.h1`
  font-size: 50px;
  text-align: center;
  text-transform: uppercase;
  
  @media only screen and (max-width: 500px)  {
    font-size: 40px;
  };
`;

export const ContactsContent = styled.div`

`;

export const TextForContact = styled.h3`
  text-align: center;
  white-space: pre-wrap;
  font-style: italic;
`;

export const BoxContacts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
  padding: 15px;
  
  @media only screen and (max-width: 810px)  {
    grid-template-columns: 1fr;
  };
`;

export const ContactItem = styled.div`
  border: 2px solid ${(props) => props.theme === 'light' ? '#A493DF' : '#C6FEFF'};
  border-radius: 10px;
  padding: 10px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
  
  :hover {
    box-shadow: 0 2px 10px rgba(118,119,119,.5);
    transform: translate3d(0px, 5px, 0px); 
    transition-duration: 0ms;
  }
  
  h4{
    margin: 15px;
    text-transform: capitalize;
  }
`;

export const ContactLink = styled.a`
  margin: 20px;
`;

export const ContactIcon = styled.div`
  margin-top: 10px;
  
  svg {
    fill: ${(props) => props.theme === 'light' ? '#2E2999' : '#C6FEFF'}; 
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotation = keyframes`
  0% {
      transform:rotateY(0deg);
  }
  100% {
      transform:rotateY(360deg);
  }
`;

export const SocialIcon = styled.div`
  border: 2px solid ${(props) => props.theme === 'light' ? '#2E2999' : '#C6FEFF'};
  padding: 15px;
  border-radius: 50%;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  :hover{
    background: ${(props) => props.theme === 'light' ? '#2E2999' : '#C6FEFF'};
    
    svg {
      fill: ${(props) => props.theme === 'light' ? '#fff' : '#053649'}; 
      animation: ${rotation} 0.5s linear 1; 
      transform-origin: 50% 50%;
    }
  }
  
  svg {
    fill: ${(props) => props.theme === 'light' ? '#2E2999' : '#C6FEFF'}; 
    width: 30px;
    height: 30px;
  }
    
  @media (max-width: 810px)  {
    padding: 7px;
    margin: 7px;
    
    svg {
          width: 20px;
          height: 20px;
    }
  }
  
`;

export const Footer = styled.div`
  text-align: center;
  margin: 3rem;
  
`;
