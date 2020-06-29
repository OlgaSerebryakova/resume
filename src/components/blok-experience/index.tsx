import React from "react";
import Study from '../../assets/icons/study';
import Job from '../../assets/icons/job';
import ShowUpAnimation from "../showUpAnimation";

import {
  ItemTineLine,
  IconTimeline,
  ItemText,
} from './style';


interface IProps {
  theme: string,
  iconType: string,
  experiencePlace: string,
  experienceDate: string,
  experienceText: string
}

const ItemExperience:React.FC<IProps> = (props) => {
  const { theme, iconType } = props;
  return(
      <ItemTineLine theme={theme}>
        <IconTimeline theme={theme}>
          { iconType === 'job' ? <Job size={40}/> : <Study size={40}/>}
        </IconTimeline>
        <ShowUpAnimation>
        <ItemText theme={theme}>
          <h4>{props.experiencePlace}</h4>
          <h5>{props.experienceDate}</h5>
          <p>{props.experienceText}</p>
        </ItemText>
        </ShowUpAnimation>
      </ItemTineLine>
  )
}

export default ItemExperience;
