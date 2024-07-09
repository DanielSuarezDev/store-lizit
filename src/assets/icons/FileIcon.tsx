import { FC, memo } from 'react';

import { PropsIcons } from './types';

const SvgFile: FC<PropsIcons> = ({ width, height, fill, ...props }) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 15}
    height={height || 12}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M1.086.586A2 2 0 0 1 2.5 0h3.586a1.5 1.5 0 0 1 1.06.44L8.56 1.853A.502.502 0 0 0 8.914 2H12.5a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V2A2 2 0 0 1 1.086.586ZM2.5 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8.914c-.397 0-.78-.158-1.061-.44L6.44 1.147A.502.502 0 0 0 6.086 1H2.5Zm5 3.5A.5.5 0 0 1 8 5v1.5h1.5a.5.5 0 0 1 0 1H8V9a.5.5 0 0 1-1 0V7.5H5.5a.5.5 0 0 1 0-1H7V5a.5.5 0 0 1 .5-.5Z"
      clipRule="evenodd"
    />
  </svg>
  );
};

const MemoSvgFile = memo(SvgFile);
export default MemoSvgFile;
