import { FC, memo } from 'react';

import { PropsIcons } from './types';

const SvgArrow: FC<PropsIcons> = ({ width, height, fill, ...props }) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 6}
    height={height || 10}
    fill="none"
    {...props}
  >
    <path
      stroke="#0A2F5B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.818}
      d="M4.739 9.296.443 5.001 4.74.705"
    />
  </svg>
  );
};

const MemoSvgArrow = memo(SvgArrow);
export default MemoSvgArrow;
