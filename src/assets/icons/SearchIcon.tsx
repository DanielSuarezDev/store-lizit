import { FC, memo } from 'react';

import { PropsIcons } from './types';

const SvgSearch: FC<PropsIcons> = ({ width, height, fill, ...props }) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 14}
    height={height || 14}
    fill="none"
    {...props}
  >
    <path
      fill="#3478D7"
      fillRule="evenodd"
      d="M2.11 2.11a5.5 5.5 0 0 1 8.116 7.409l3.128 3.127a.5.5 0 0 1-.707.707l-3.128-3.127A5.5 5.5 0 0 1 2.11 2.11ZM6 1.499a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"
      clipRule="evenodd"
    />
  </svg>
  );
};

const MemoSvgSearch = memo(SvgSearch);
export default MemoSvgSearch;
