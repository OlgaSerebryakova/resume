import React from "react";
import Study from '../../assets/icons/study';
import Job from '../../assets/icons/job';
import ShowUpAnimation from "../showUpAnimation";

import {
  ItemTineLine,
  IconTimeline,
  ItemText,
  Place,
  Date,
  Text
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
          <Place>{props.experiencePlace}</Place>
          <Date>{props.experienceDate}</Date>
          <Text>{props.experienceText}</Text>
        </ItemText>
        </ShowUpAnimation>
      </ItemTineLine>
  )
}

export default ItemExperience;
