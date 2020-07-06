import React, {Component} from "react";
import { createPortal } from 'react-dom';
import Modal from './modal';

interface IProps {
  children: React.ReactNode,
  theme: string
}

export default class ModalWrapper extends Component<IProps>{
  element: HTMLDivElement;

  constructor(props: IProps) {
    super(props);

    this.element = document.createElement('div');
    document.body.append(this.element)
  }

  componentWillUnmount() {
    this.element.remove()
  }

  render() {
    return (
      createPortal(
        <Modal {...this.props}/>, this.element
      )
    )
  }
}