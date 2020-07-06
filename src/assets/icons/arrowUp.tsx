import React from 'react';

interface IProps {
  size: number;
}

export default function ArrowUp(props: IProps) {
  const {size} = props;

  return (
    <svg x="0px" y="0px" width={`${size}px`} height={`${size}px`} viewBox="0 0 268.831 268.832"
         enableBackground="new 0 0 268.831 268.832" xmlSpace="preserve">
      <g>
        <path d="M223.255,83.659l-80-79.998c-4.881-4.881-12.797-4.881-17.678,0l-80,80c-4.883,4.882-4.883,12.796,0,17.678
          c2.439,2.44,5.64,3.661,8.839,3.661s6.397-1.221,8.839-3.661l58.661-58.661v213.654c0,6.903,5.597,12.5,12.5,12.5
          c6.901,0,12.5-5.597,12.5-12.5V42.677l58.661,58.659c4.883,4.881,12.797,4.881,17.678,0
          C228.137,96.455,228.137,88.541,223.255,83.659z"/>
      </g>
    </svg>
)
}