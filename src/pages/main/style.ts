import styled from 'styled-components';
import backhome from '../../assets/images/back-home.png';
import backHomeSmall from '../../assets/images/back-home-small.png';
import backdark from '../../assets/images/back-dark.png';
import backDarkSmall from '../../assets/images/back-dark-small.png';
// import photo from '../../assets/images/photoMe.png';
// import photo_small from '../../assets/images/photoMe_small.png';

// const red = '#f30000';
// const blue = '#00f';

export const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  background-image: url(${(props) => props.theme === 'light' ? backhome : backdark});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed; 
  background-color: #464646;
  height: 100vh;
  position: relative;
  padding-top: 7px;
 
  @media only screen and (max-width: 767px) {
    background-image: url(${(props) => props.theme === 'light' ? backHomeSmall : backDarkSmall});
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30vh;
  margin-left: 30vw;
  
  @media only screen and (max-width: 1200px) {
    margin-left: 22vw;
  };
  
  @media only screen and (max-width: 960px) {
    margin-left: 5vw;
  };
  
  @media only screen and (max-width: 350px) {
    margin-left: 3vw;
  };
`;

export const LeftSideBar = styled.div`
  position: absolute;
  bottom: 10px;
  z-index: 3;
  padding: 20px;
  
  @media only screen and (max-width: 640px)  {
    display: none
  };

`;
