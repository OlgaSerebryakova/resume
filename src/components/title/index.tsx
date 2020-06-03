import React, { useState, useEffect } from "react";

import {
  TitleWrapper,
  TitleText,
  TextChange,
  TitleHello
} from './style';

interface IProps {
  theme: string;
  phrases: string[];
  titleHello: string
  titleHead: string,
  localization: string
}

const TIMER_TIME: number = 3000;

const Title:React.FC<IProps> = (props) => {
  const [phraseIndex, setPhraseIndex] = useState<number>(0);
  const [animationName, setAnimationName] = useState<'open' | 'close'>('open');

  useEffect(() => {
    setAnimationName('open');

    setTimeout(() => setAnimationName('close'), TIMER_TIME / 2)
  }, [phraseIndex, props.localization]);

  useEffect(() => {
    const lastIndex: number = props.phrases.length - 1;
    const nextIndex: number = phraseIndex === lastIndex ? 0 : phraseIndex + 1;

    setTimeout(() => setPhraseIndex(nextIndex), TIMER_TIME);
  }, [props.phrases, phraseIndex, props.localization]);

  return(
    <TitleWrapper>
      <TitleHello theme={props.theme}>{props.titleHello}</TitleHello>
      <TitleText theme={props.theme}>
        <div>{props.titleHead}</div>
        <TextChange
          animationTime={TIMER_TIME / 2}
          animationName={animationName}
        >
          {props.phrases[phraseIndex]}
        </TextChange>
      </TitleText>
    </TitleWrapper>
  )
}

export default Title
