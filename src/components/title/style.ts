import styled, { keyframes } from "styled-components";


export const TitleWrapper = styled.div`
  width: 100%;
`;

interface ITextProps {
  theme: string
}

interface ITextChangeProps {
  animationTime: number;
  animationName: 'open' | 'close';
}

export const TitleText = styled.h1<ITextProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  text-transform: uppercase; 
  font-family: Capriola, sans-serif;
  font-size: 50px;
  
  text-shadow: ${(props: any) => {
    if (props.theme === 'dark') {
      return '#057886 1px 0px, #057886 1px 1px, #057886 0px 1px, #057886 -1px 1px, #057886 -1px 0px, #057886 -1px -1px, #057886 0px -1px, #057886 1px -1px'
    }
  }};
  
  @media only screen and (max-width: 960px) {
    font-size: 40px;
  };
  
  @media only screen and (max-width: 767px) {
    font-size: 30px;
  };
  
  @media only screen and (max-width: 485px) {
    font-size: 25px;
  };
  
  @media only screen and (max-width: 400px) {
    font-size: 20px;
  };
  
`;

export const TitleHello = styled(TitleText)`
  font-size: 60px;
  
  @media only screen and (max-width: 960px) {
    font-size: 50px;
  };
  
  @media only screen and (max-width: 767px) {
    font-size: 40px;
  };
  
  @media only screen and (max-width: 485px) {
    font-size: 35px;
  };
  
  @media only screen and (max-width: 375px) {
    font-size: 30px;
  };
 
`;

const open = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

const close = keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
`;

const animations = {
  open,
  close
};

export const TextChange = styled.div<ITextChangeProps>`
  margin-left: 15px;
  width: 0;
  animation: ${({ animationName }) => animations[animationName]} linear ${({ animationTime }) => animationTime}ms forwards;
  white-space: nowrap;
  overflow: hidden;
  
  @media only screen and (max-width: 960px) {
    font-size: 40px;
  };
  
  @media only screen and (max-width: 767px) {
    font-size: 30px;
  };
  
  @media only screen and (max-width: 485px) {
    font-size: 25px;
  };
  
  @media only screen and (max-width: 400px) {
    font-size: 20px;
  };
`;
