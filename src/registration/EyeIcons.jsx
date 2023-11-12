export const OpenEye = ({ onClick }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      id='eye'
      onClick={onClick}>
      <g data-name='Layer 2'>
        <g data-name='eye'>
          <rect width='24' height='24' opacity='0'></rect>
          <path d='M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1zM12.22 17c-4.31.1-7.12-3.59-8-5 1-1.61 3.61-4.9 7.61-5 4.29-.11 7.11 3.59 8 5-1.03 1.61-3.61 4.9-7.61 5z'></path>
          <path d='M12 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 8.5zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z'></path>
        </g>
      </g>
    </svg>
  )
}

export const ClosedEye = ({ onClick }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 256'
      id='eye-closed'
      onClick={onClick}>
      <rect width='256' height='256' fill='none'></rect>
      <line
        x1='201.15'
        x2='223.96'
        y1='127.305'
        y2='166.813'
        fill='none'
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='16'></line>
      <line
        x1='154.182'
        x2='161.296'
        y1='149.263'
        y2='189.607'
        fill='none'
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='16'></line>
      <line
        x1='101.73'
        x2='94.615'
        y1='149.244'
        y2='189.594'
        fill='none'
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='16'></line>
      <line
        x1='54.809'
        x2='31.889'
        y1='127.272'
        y2='166.971'
        fill='none'
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='16'></line>
      <path
        fill='none'
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='16'
        d='M31.99943,104.87509C48.81193,125.68556,79.63353,152,128,152c48.36629,0,79.18784-26.31424,96.00039-47.12468'></path>
    </svg>
  )
}
