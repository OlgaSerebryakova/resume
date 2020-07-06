import React from "react";
import {
  ModalContainer,
  ModalItem
} from './style';

interface IProps {
  children: React.ReactNode,
  theme: string
}

const Modal:React.FC<IProps> = ({children, theme}) => {
  return (
    <ModalContainer theme={theme}>
      <ModalItem>{children}</ModalItem>
    </ModalContainer>
  )
};

export default Modal;