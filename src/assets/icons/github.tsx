import React from 'react';

interface IProps {
  size: number;
}

export default function Map(props: IProps) {
  const {size} = props;

  return (
    <svg version="1.1" x="0px" y="0px" viewBox="0 0 496.035 496.035" enableBackground="new 0 0 496.035 496.035"
         xmlSpace="preserve" width={`${size}px`} height={`${size}px`}>
      <g>
        <g>
          <path d="M170.683,186.345c-8.836,0-16,7.164-16,16v173.116L32,404.508V134.826L158.055,111.8
            c8.693-1.588,14.453-9.923,12.865-18.615c-1.589-8.693-9.926-14.451-18.615-12.865l-139.18,25.423
            C5.523,107.133,0,113.756,0,121.484v303.254c0,4.892,2.238,9.515,6.075,12.55c2.854,2.257,6.359,3.45,9.926,3.45
            c1.229,0,2.466-0.141,3.686-0.43l154.683-36.624c7.216-1.708,12.313-8.152,12.313-15.569v-185.77
            C186.683,193.509,179.519,186.345,170.683,186.345z"/>
        </g>
      </g>
      <g>
        <g>
          <path d="M331.921,442.868l-153.947-69.342c-8.055-3.625-17.531-0.039-21.159,8.018s-0.039,17.53,8.018,21.16l153.946,69.342
            c2.134,0.96,4.366,1.415,6.562,1.415c6.101,0,11.929-3.509,14.598-9.433C343.567,455.971,339.978,446.498,331.921,442.868z"/>
        </g>
      </g>
      <g>
        <g>
          <path d="M490.016,110.419c-3.804-3.037-8.786-4.177-13.528-3.097L342.62,137.753c-8.617,1.959-14.014,10.532-12.055,19.149
            c1.959,8.617,10.533,14.011,19.148,12.055l114.321-25.988v270.135L341.35,437.899V201.593c0-8.836-7.163-16-16-16
            c-8.837,0-16,7.164-16,16v255.864c0,4.799,2.154,9.345,5.869,12.384c2.883,2.358,6.47,3.616,10.131,3.616
            c1.056,0,2.117-0.104,3.171-0.316l154.684-31.263c7.464-1.508,12.83-8.069,12.83-15.683V122.924
            C496.035,118.057,493.82,113.455,490.016,110.419z"/>
        </g>
      </g>
      <g>
        <g>
          <path d="M248.345,22.575c-59.611,0-108.109,48.483-108.109,108.077c0,42.565,17.352,84.277,50.18,120.627
            c24.363,26.975,48.716,41.624,49.741,42.234c2.523,1.503,5.355,2.254,8.188,2.254c2.831,0,5.664-0.751,8.186-2.253
            c1.024-0.61,25.379-15.254,49.742-42.229c32.828-36.347,50.181-78.061,50.181-120.633
            C356.454,71.058,307.97,22.575,248.345,22.575z M283.142,229.149c-13.183,14.728-26.548,25.37-34.804,31.332
            c-21.185-15.294-76.102-61.537-76.102-129.83c0-41.949,34.142-76.077,76.138-76.077c41.951,0,76.08,34.128,76.08,76.076
            C324.454,165.387,310.554,198.526,283.142,229.149z"/>
        </g>
      </g>
      <g>
        <g>
          <path d="M248.345,86.173c-25.628,0-46.479,20.851-46.479,46.479s20.851,46.479,46.479,46.479s46.479-20.851,46.479-46.479
            S273.973,86.173,248.345,86.173z M248.345,147.131c-7.984,0-14.479-6.495-14.479-14.479s6.495-14.479,14.479-14.479
            s14.479,6.495,14.479,14.479S256.329,147.131,248.345,147.131z"/>
        </g>
      </g>
</svg>
  )
}