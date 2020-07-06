import styled, { css } from "styled-components";

export const MenuButton: any = styled.button`
  position: fixed;
  z-index: 999;
  top: 5px;
  right: 5px;
  display: block;
  transform-origin: 16px 11px;
  outline: 0;
  border: 0;
  padding: 12px;
  background: none;

  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  ${({ isOpenMenu }: any) => isOpenMenu && css`
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(10px, 10px);
      width: 40px;
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(7px, -7px);
      width: 40px;
    }
  `}
  
  // :focus {
  //   border: medium none rgb(111, 255, 176);
  //   box-shadow: rgb(111, 255, 176) 0 0 2px 2px;
  //   outline: 0;
  // }

  // :hover {
  //   span:nth-of-type(1) {
  //     width: 33px;
  //   }
  //
  //   span:nth-of-type(2) {
  //     width: 40px;
  //   }
  //
  //   span:nth-of-type(3) {
  //     width: 30px;
  //   }
  // }

  @media only screen and (min-width: 767px) {
    display: none;
  };
`;

interface IBarProps {
  theme: string
}

export const Bar = styled.span<IBarProps>`
  display: block;
  width: 40px;
  height: 5px;
  margin-bottom: 7px;
  background-color: ${(props) => props.theme === 'light' ? '#2E2999' : '#C6FEFF'};
  border-radius: 5px;
`;