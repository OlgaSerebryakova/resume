import React, {useEffect, useRef, useState} from "react";
import {isPartiallyVisible} from "../showUpAnimation";

import {
  ProgressContainer,
  ProgressTitle,
  ProgressString,
  ProgressSpan
} from './style';


interface IProps {
  theme: string,
  skill: ISkillItem
}

interface ISkillItem {
  type: string,
  scale: number
}

const Progress:React.FC<IProps> = (props) => {

  const [isAnimateProgress, setAnimateProgress]  = useState(false);
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const elementRefCurrent = elRef.current;

      if (elementRefCurrent && isPartiallyVisible(elementRefCurrent)) {
        setAnimateProgress(true);
      } else {
        setAnimateProgress(false);
      }
    }
    window.addEventListener('scroll', onScroll )
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  })

  return(
    <ProgressContainer ref={elRef}>
      <ProgressTitle theme={props.theme}>{props.skill.type}</ProgressTitle>
      <ProgressString theme={props.theme} >
        <ProgressSpan theme={props.theme} scale={props.skill.scale} isAnimateProgress={isAnimateProgress}/>
      </ProgressString>
    </ProgressContainer>
  )
}

export default Progress;