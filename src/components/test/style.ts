import styled from 'styled-components';

interface IButtonProps {
  isWhite: boolean
}

const red = '#f30000';
// const blue = '#00f';

export const PageWrapper = styled.div`
  background: red;
`;

export const Content = styled.div`
  color: ${red};
`;

export const Button = styled.div<IButtonProps>`
  background: ${(props) => props.isWhite ? 'white' : 'black'};
  color: ${(props) => props.isWhite ? 'black' : 'white'};
  padding: 5px 10px;
  cursor: pointer;
  user-select: none;
`;
