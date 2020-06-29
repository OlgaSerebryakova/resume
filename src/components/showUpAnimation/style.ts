import styled, {keyframes} from 'styled-components';

const showUp = keyframes`
  0% {
      transform: translateY(40px);
      opacity: 0;
  }
  100% {
      transform: rotateY(0px);
      opacity: 1;
  }
`;

interface IProps {
  isAnimate: boolean
}

export const BlockAnimation = styled.div<IProps>`
  animation: ${props => props.isAnimate ? showUp : ''} 0.5s linear ;
`;


