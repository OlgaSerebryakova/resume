import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${({theme}) => theme === 'light' ? 'rgba(255, 255, 255, 1)' : 'rgba(5,54,73, 1)'};
  z-index: 100;
`;

export const ModalItem = styled.div`
  position: relative;
  // margin: 200px auto;
  // padding: 40px;
  // border-radius: 6px;
  // width: 500px;
  // white-space: pre-wrap;
  // word-wrap: break-word;
`;