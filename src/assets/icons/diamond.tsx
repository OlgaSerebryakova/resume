import React from 'react';

interface IProps {
  size: number;
}

export default function Diamond(props: IProps) {
  const {size} = props;

  return (
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 59.986 59.986" enableBackground="new 0 0 59.986 59.986;" xmlSpace="preserve"
         width={`${size}px`} height={`${size}px`}>
      <path d="M59.972,20.164c0.007-0.041,0.011-0.081,0.013-0.123c0.002-0.049,0.001-0.096-0.003-0.145
        c-0.004-0.042-0.01-0.082-0.02-0.123c-0.011-0.048-0.026-0.094-0.044-0.14c-0.009-0.024-0.011-0.049-0.022-0.072
        c-0.008-0.017-0.022-0.03-0.031-0.047c-0.009-0.017-0.013-0.035-0.023-0.052l-10-16c-0.046-0.073-0.1-0.139-0.161-0.197
        c-0.001-0.001-0.002-0.001-0.003-0.002c-0.086-0.081-0.188-0.139-0.297-0.185c-0.014-0.006-0.023-0.018-0.038-0.024
        c-0.011-0.004-0.023-0.002-0.034-0.005c-0.101-0.034-0.205-0.057-0.314-0.057h-38c-0.108,0-0.211,0.023-0.31,0.056
        c-0.011,0.003-0.022,0.001-0.032,0.005c-0.015,0.005-0.024,0.017-0.038,0.023c-0.104,0.043-0.202,0.099-0.287,0.175
        c-0.005,0.005-0.012,0.008-0.017,0.012c-0.062,0.058-0.117,0.125-0.163,0.198l-10,16c-0.01,0.016-0.014,0.035-0.023,0.052
        c-0.009,0.017-0.023,0.03-0.031,0.047c-0.011,0.023-0.013,0.048-0.023,0.072c-0.018,0.046-0.033,0.092-0.044,0.14
        c-0.009,0.041-0.016,0.082-0.02,0.124C0,19.945-0.001,19.993,0.001,20.041c0.002,0.042,0.006,0.082,0.013,0.123
        c0.008,0.048,0.021,0.095,0.037,0.142c0.013,0.039,0.027,0.077,0.045,0.115c0.009,0.018,0.012,0.038,0.022,0.056
        c0.016,0.029,0.04,0.051,0.058,0.078c0.014,0.021,0.022,0.044,0.039,0.064l28.989,35.986c0.002,0.003,0.004,0.005,0.006,0.007
        l0.005,0.007c0.003,0.004,0.008,0.005,0.011,0.009c0.082,0.099,0.184,0.174,0.295,0.234c0.03,0.016,0.058,0.03,0.089,0.043
        c0.121,0.051,0.249,0.087,0.383,0.087c0.114,0,0.229-0.02,0.343-0.061c0.017-0.006,0.028-0.02,0.045-0.027
        c0.051-0.021,0.091-0.055,0.137-0.084c0.076-0.048,0.147-0.098,0.206-0.163c0.014-0.015,0.035-0.022,0.048-0.038l29-36
        c0.016-0.02,0.024-0.044,0.039-0.064c0.019-0.027,0.042-0.049,0.058-0.078c0.01-0.018,0.013-0.038,0.022-0.056
        c0.018-0.038,0.032-0.075,0.045-0.115C59.95,20.259,59.964,20.213,59.972,20.164z M32.095,4.993h15.459l-4.86,13.045L32.095,4.993z
         M40.892,18.993H19.095L29.993,5.58L40.892,18.993z M17.222,18.125L12.423,4.993h15.469L17.222,18.125z M41.593,20.993
        L29.818,52.599L18.269,20.993H41.593z M49.221,6.246l7.967,12.748H44.472L49.221,6.246z M10.756,6.259l4.653,12.734H2.798
        L10.756,6.259z M16.14,20.993l10.839,29.664L3.083,20.993H16.14z M32.39,51.423l11.337-30.43h13.176L32.39,51.423z"/>
    </svg>
  )
}