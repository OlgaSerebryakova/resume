import styled from 'styled-components';

interface IWrapperSideBarProps {
  direction: string
}

export const WrapperSideBar = styled.div<IWrapperSideBarProps>`
  display: flex;
  flex-direction: ${(props) => props.direction === 'row' ? 'row' : 'column' };
  z-index: 3;
`;

export const LocationContainer = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #BEC3C7;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #BEC3C7;
  margin: 5px 5px 5px 11px;
  
  &:hover {
    background: #E9DFEC;
    box-shadow: 0 0 10px rgb(196, 200, 252,0.5);
    color: #2E2999;
  }
`;

export const ThemeContainer = styled.div`
  margin: 5px 5px 5px 11px;
`;

export const IconWrapper = styled.div`
  svg {
    fill: #BDC3C7;
    
    :hover {
      fill: #E9DFEC;
    }
  }
  
  @media only screen and (max-width: 640px)  {
    svg {
      fill: #BDC3C7;
      
      :hover {
        fill: #E9DFEC;
      }
    }
  };
`;



