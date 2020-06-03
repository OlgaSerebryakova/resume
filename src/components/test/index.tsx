import React, {useState} from "react";
import { connect } from 'react-redux';
import mapStateToProps from './selectors';
import { changeLocationAction } from '../../app/actions';

import {
  PageWrapper,
  Content,
  Button
} from './style';

interface IProps {
  isMobile?: boolean;
  translator(key: string): string;
  changeLocationAction(): any;
}

const Test:React.FC<IProps> = (props: IProps) => {
  const [isWhite, setWhite] = useState(true);
  const onClick = () => {
    setWhite(!isWhite);
    props.changeLocationAction();
  };

  return(
    <PageWrapper>
      <Content>
        Main
      </Content>
      <Button onClick={onClick} isWhite={isWhite}>
        {props.translator('buttons:cancel')}
      </Button>
    </PageWrapper>
  )
}

export default connect(mapStateToProps, { changeLocationAction })(Test);
