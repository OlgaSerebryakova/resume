import styled from 'styled-components';
import photo from '../../../../assets/images/photoMe.png';
import photo_small from '../../../../assets/images/photoMe_small.png';

export const About = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const AboutContainer = styled.div`
  max-width: 1200px;
  padding-bottom: 2rem;
  border-bottom: 2px solid rgba(28,45,87,.3);
`;

export const AboutTitle = styled.h1`
  font-size: 50px;
  text-align: center;
  text-transform: uppercase;
  
  @media only screen and (max-width: 500px)  {
    font-size: 40px;
  };
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  
  @media only screen and (max-width: 810px)  {
    grid-template-columns: 1fr;
    align-item: center
  };
`;

export const PhotoWrapper = styled.div`
  margin: 0 auto;
  
`;

export const PhotoContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
  
  :before {
    border: 6px solid ${props => props.theme === 'light' ? '#A493DF' : '#C6FEFF'};
    display: inline-block;
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    transform: translate3d(26px, 26px, -26px);
  }
  
  @media only screen and (max-width: 500px)  {
    margin-right: 10px;
    
    :before {
    transform: translate3d(10px, 10px, 10px);
    }
  };
`;

export const Photo = styled.div`
  background-image: url(${photo});
  height: 500px;
  border-radius: 30px;
  width: 400px;
  
  @media only screen and (max-width: 1060px)  {
    background-image: url(${photo_small});
    background-repeat: no-repeat;
    height: 375px;
    width: 300px;
  };
`;

export const InfoContainer = styled.div`
  padding: 2vh 2vw;
  color: ${props => props.theme === 'light' ? '#767777' : '#fff'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media only screen and (max-width: 640px)  {
    align-items: center;
  };
  
`;

export const InfoAboutMe = styled.div`
  font-size: 1.3rem;
  padding-bottom: 2rem;
  border-bottom: 6px solid ${props => props.theme === 'light' ? '#A493DF' : '#C6FEFF'};
`;

export const InfoGreed = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  margin-top: 2rem;
  
  @media only screen and (max-width: 640px)  {
    grid-template-columns: 1fr;
  };
`;

export const ItemInfo = styled.div`
  padding: 10px;
  font-weight: 600;
  
  
  span {
    font-weight: 500;
    margin-left: 15px;
  }
`;

export const ButtonContainer = styled.div``;

export const Button = styled.a`
  background: ${props => props.theme === 'light' ? '#5958C5' : '#2599AA'};
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 2px 10px rgba(118,119,119,.5);
  border-radius: 50px;
  padding: 0.6em 2em;
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
  margin-top: 1em;
  font-size: 1em;
  transition: all .25s ease-in-out;
  user-select: none;
  
  :hover, :active {
    transform: translate3d(0px, 2px, 0px); transition-duration: 0ms;
}
`;
