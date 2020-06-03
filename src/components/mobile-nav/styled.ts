import styled, {keyframes} from "styled-components";


export const MenuWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  height: 100vh;
  width: 100%;
  // padding: 0;
`;

export const MenuItem = styled.li`
  opacity: .8;
  padding: 2em;
  display: inline-block;
  position: relative;
  width: 100%;
    
  
  :hover {
   opacity: 1;
  };
  
`;

export const BoxHidden = styled.div`
  position: absolute;
  width: 100%;
  height: 2rem;
  background: ${({theme}) => theme === 'light' ? 'rgba(255, 255, 255, 1)' : 'rgba(5,54,73, 1)'};
  top: 2rem;
`;

const grow = keyframes`
  0% {
    top: 50%;
  }
  100% {
    top: -5%;
  }
`;

export const StyledLink = styled.a`
   text-decoration: none;
   position: absolute;
   top: 0;
   animation: ${grow} 0.25s linear 1 forwards; 
   
   font-size: calc(5vw + 1rem);
   user-select: none;
   color: ${({theme}) => theme === 'light' ? '#605DCD' : '#C6FEFF'};
   
   :visited, :active, :hover {
      color: ${(props) => props.theme === 'light' ? '#605DCD' : '#C6FEFF'};
      background: transparent;
      user-select: none;
      text-decoration: none;
   };
   
   @media only screen and (min-width: 1800px) {
      font-size: 30px;
   };
`;

const rotation = keyframes`
  0% {
      transform:rotateY(0deg);
  }
  100% {
      transform:rotateY(360deg);
  }
`;

export const LogoWrapper = styled.div`
  svg {
    fill: ${(props) => props.theme === 'light' ? '#2E2999' : '#C6FEFF'}; 
  }
  
  position: fixed;
  padding: 0 12px;
  animation: ${rotation} 0.4s linear 1; 
  transform-origin: 50% 50%;
`;

export const BottomSideBar = styled.div`
  position: absolute;
  bottom: 10px;
  left: calc(50% - 69px);
  margin: 0 auto;
  z-index: 103;
  padding: 20px;
`;