import React, {useEffect, useRef, useState} from "react";

import {
  BlockAnimation
} from './style';


interface IProps {

}

const ShowUpAnimation:React.FC<IProps> = (props) => {

  const [isAnimateShowUp, setAnimateShowUp]  = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const elementRefCurrent = elementRef.current;

      if ( elementRefCurrent && isPartiallyVisible(elementRefCurrent)) {
        setAnimateShowUp(true);
      }
    }
    window.addEventListener('scroll', onScroll )
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  })

  return(
    <BlockAnimation ref={elementRef} isAnimate={isAnimateShowUp}>{props.children}</BlockAnimation>
  )
}

export default ShowUpAnimation;

export const isPartiallyVisible = (el: HTMLDivElement) => {
  const elementBoundary = el.getBoundingClientRect();

  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;
  let height = elementBoundary.height;

  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}