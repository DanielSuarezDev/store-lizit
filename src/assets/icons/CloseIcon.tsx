import { FC, memo } from 'react';

import { PropsIcons } from './types';

const SvgClose: FC<PropsIcons> = ({ width, height, fill, ...props }) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 32}
    height={height || 32}
    fill="none"
    {...props}
  >
    <path
      fill="#3478D7"
      fillRule="evenodd"
      d="M16 5a11 11 0 1 0 0 22 11 11 0 0 0 0-22ZM6.808 6.808a13 13 0 1 1 18.384 18.384A13 13 0 0 1 6.808 6.808Zm5.485 5.485a1 1 0 0 1 1.414 0L16 14.586l2.293-2.293a1 1 0 0 1 1.414 1.414L17.414 16l2.293 2.293a1 1 0 0 1-1.414 1.414L16 17.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L14.586 16l-2.293-2.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </svg>
  );
};

const MemoSvgClose = memo(SvgClose);
export default MemoSvgClose;
