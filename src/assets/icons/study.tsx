import React from 'react';

interface IProps {
  size: number;
}

export default function HalfMoon(props: IProps) {
  const {size} = props;

  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
         x="0px" y="0px"
         viewBox="0 0 47.167 47.167" enableBackground="new 0 0 47.167 47.167" xmlSpace="preserve" width={`${size}px`}
         height={`${size}px`}>
      <path d="M46.369,28.793c-11.852,5.935-26.271,1.138-32.206-10.714c-2.748-5.488-3.191-11.524-1.702-17.016
            C1.197,7.236-3.255,21.263,2.544,32.844C8.479,44.696,22.898,49.493,34.75,43.558c6.364-3.187,10.69-8.821,12.417-15.19
            C46.903,28.513,46.64,28.658,46.369,28.793z"/>
    </svg>
  )
}