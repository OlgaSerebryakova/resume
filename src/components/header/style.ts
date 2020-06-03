import styled, {keyframes} from "styled-components";
import { Link } from 'react-router-dom';

interface IMenuContainerProps {
  theme: string,
  isFixedHeader: boolean
}
export const MenuContainer = styled.ul<IMenuContainerProps>`
  position: ${({ isFixedHeader }) => isFixedHeader ? 'fixed' : 'absolute'};
  background: ${({ isFixedHeader, theme }) => {
    if (!isFixedHeader) {
      return ''
    } else if (isFixedHeader && theme === 'light') {
      return 'white'
    } else {
      return '#2798AB'
    }
  } };
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  z-index: 3;
  margin-top: 0px;
  padding-top: 2px;
  transition: all 0.5s ease-in-out;
  border-bottom: ${({ isFixedHeader }) => isFixedHeader ? '2px solid rgba(28,45,87,.3)' : ''};
  
  @media only screen and (max-width: 767px) {
    display: none;
  };
  
`;

export const MenuItem = styled.li`
  opacity: .7;
  padding: 1em;
  text-decoration: none;
  display: inline-block;
  
  :hover {
   opacity: 1;
  };
`;

interface LinkProps {
  theme: string
}

export const StyledLink = styled.a<LinkProps>`
   text-decoration: none;
   font-weight: 500;
   font-size: 20px;
   color: ${(props) => props.theme === 'light' ? '#605DCD' : '#053649'};
   
   :visited, :active {
      color: ${(props) => props.theme === 'light' ? '#605DCD' : '#053649'};
   };
   
   @media only screen and (min-width: 1800px) {
      font-size: 30px;
   };
   
   @media only screen and (max-width: 1024px) {
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

export const IconWrapper = styled.div`
  svg {
    fill:  ${(props) => props.theme === 'light' ? '#2E2999' : '#C6FEFF'}; 
  }
  animation: ${rotation} 2s linear 2; 
  transform-origin: 50% 50%;
`;