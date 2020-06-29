import styled, {keyframes} from 'styled-components';

export const ProgressContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const ProgressTitle = styled.div`
  color: ${props => props.theme === 'light' ? '#767777' : '#fff'};;
  letter-spacing: 2px;
  text-transform: uppercase;
  top: 1px;
  height: 60px;
  z-index: 3;
  padding-right: 20px;
`;

export const ProgressString = styled.div`
  height: 60x;
  position: relative;
  vertical-align: top;
  z-index: 0;
  top: 3px;
  margin-right: 10px;
  
  :before {
    content: '';
    background-color: #ddd;
    height: 10px;
    border-radius: 5px;
    content: '';
    display: block;
    height: 10px;
    position: absolute;
    width: 100%;
    z-index: -1;
  }
  
`;

function progressBuilder(scale: number) {
  const progress = keyframes`
      0% {
        width: 0%;
      }
      100% {
        width: ${scale} + '%';
      }
  `;
  return progress
}


interface IProgressString {
  scale: number,
  theme: string,
  isAnimateProgress: boolean
}

export const ProgressSpan = styled.div<IProgressString>`
  width: ${props => props.scale+'%'};
  background-color: ${props => props.theme === 'light' ? '#A493DF' : '#C6FEFF'};
  height: 10px;
  border-radius: 5px;
  z-index: 10;
  vertical-align: top;
  position: absolute;
  animation: ${props => props.isAnimateProgress ? progressBuilder(props.scale) : ''} 0.5s linear ;
`;


