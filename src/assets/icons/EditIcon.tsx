import { FC, memo } from 'react';

import { PropsIcons } from './types';

const SvgEdit: FC<PropsIcons> = ({ width, height, fill, ...props }) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 24}
    height={height || 24}
    fill="none"
    {...props}
  >
    <path
      stroke="#3478D7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.862 4.487 18.549 2.8a1.875 1.875 0 0 1 2.652 2.652l-10.619 10.62a4.499 4.499 0 0 1-1.897 1.13L6 18l.8-2.686a4.5 4.5 0 0 1 1.13-1.897l8.932-8.93Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
    />
  </svg>
  );
};

const MemoSvgEdit = memo(SvgEdit);
export default MemoSvgEdit;
