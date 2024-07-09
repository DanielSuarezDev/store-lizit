import { FC, memo } from 'react';

import { PropsIcons } from './types';

const SvgTrash: FC<PropsIcons> = ({ width, height, fill, ...props }) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 24}
    height={height || 24}
    fill="none"
    {...props}
  >
    <path
      fill="#DD0021"
      d="m13.032 1.486.154.003c.248.004.494.01.74.036l.055.006c.74.084 1.413.487 1.883 1.055.49.621.666 1.338.645 2.117l.09-.002c.145 0 .287.016.43.031a192.636 192.636 0 0 1 .331.036l.152.017a45.67 45.67 0 0 1 1.546.2l.091.013a47.992 47.992 0 0 1 .989.152l.087.014c.218.036.44.103.6.266.134.19.213.37.193.606a.813.813 0 0 1-.312.541c-.218.15-.43.165-.691.125l-.064-.011c-.027.102-.034.204-.042.31l-.005.065-.017.22-.012.16a641.64 641.64 0 0 0-.07.91l-.062.82-.095 1.241-.038.498-.004.056-.101 1.318-.005.058-.102 1.345-.005.058-.022.29-.004.059-.01.116a4137.14 4137.14 0 0 1-.167 2.193l-.004.054a2478.223 2478.223 0 0 0-.212 2.774c-.065.869-.065.869-.19 1.217l-.021.063c-.153.425-.393.78-.702 1.108l-.045.05c-.51.541-1.266.802-1.992.847-.112.003-.225.003-.337.003H15.023l-.573.001H12.516a1113.758 1113.758 0 0 0-2.346.002 493.921 493.921 0 0 0-1.523 0c-.951.002-.951.002-1.34-.108l-.058-.015a3.021 3.021 0 0 1-1.786-1.4c-.284-.513-.375-1.027-.42-1.605A200.562 200.562 0 0 0 5 18.843l-.024-.303a441.5 441.5 0 0 1-.167-2.162l-.057-.74-.007-.1-.012-.151-.107-1.397-.004-.053a6059.99 6059.99 0 0 1-.305-3.963l-.016-.2-.004-.05a3698.111 3698.111 0 0 0-.21-2.738l-.005-.056a2.81 2.81 0 0 1-.01-.264l-.066.025a.88.88 0 0 1-.66-.073.81.81 0 0 1-.357-.535.83.83 0 0 1 .168-.628c.187-.213.458-.27.727-.31l.072-.012.233-.036.082-.013c.826-.127 1.653-.24 2.484-.331l.07-.008.2-.022.058-.006c.136-.014.271-.016.408-.014l-.003-.096c-.016-.861.257-1.602.851-2.231l.052-.056c.554-.585 1.342-.802 2.124-.823l.365-.008.08-.001a56.792 56.792 0 0 1 2.072-.002Zm-1.985 1.52a28.75 28.75 0 0 0-.438.007c-.448.004-.84.106-1.172.421-.269.276-.422.599-.42.985v.092l.001.07a3299.9 3299.9 0 0 1 .603-.025 51.783 51.783 0 0 1 2.469-.052c.745 0 1.489.018 2.233.05l.328.014.33.014c.015-.418-.068-.754-.348-1.076-.337-.352-.705-.478-1.189-.49l-.1-.002-.108-.003a51.528 51.528 0 0 0-1.35-.008l-.84.003Zm-1.445 3.05-.24.014a53.019 53.019 0 0 0-3.344.3l-.062.007a22.124 22.124 0 0 0-.261.033c-.073.008-.073.008-.12.063a2.676 2.676 0 0 0 .015.278l.018.227a219.006 219.006 0 0 1 .047.613l.034.434a710.4 710.4 0 0 0 .14 1.827l.017.223a3335.294 3335.294 0 0 0 .305 3.944 3561.696 3561.696 0 0 0 .177 2.306l.005.055a1274.403 1274.403 0 0 1 .173 2.245 159.187 159.187 0 0 0 .046.598c.044.59.147 1.047.603 1.453.44.35.966.332 1.499.33h1.549a690.867 690.867 0 0 0 2.371-.001h1.947l.572-.001H15.793c.276-.002.55-.04.795-.17a1.535 1.535 0 0 0 .745-.833c.084-.281.099-.567.12-.857a91.24 91.24 0 0 1 .048-.615l.033-.436.068-.893.068-.883.004-.056.021-.279a3283.42 3283.42 0 0 0 .298-3.896l.005-.06.045-.594.093-1.211.004-.057.284-3.716a45.714 45.714 0 0 0-.113-.023l-.064-.013a4.538 4.538 0 0 0-.312-.044l-.072-.01a75.56 75.56 0 0 0-.313-.036 48.051 48.051 0 0 0-3.21-.27c-1.57-.089-3.168-.09-4.738.004Z"
    />
    <path
      fill="#DD0021"
      d="M9.624 8.315c.171.103.286.228.364.412.05.234.059.475.067.713l.005.11.011.297.013.322a662.977 662.977 0 0 1 .043 1.143c.002.024.002.048.003.074l.006.148.053 1.39.046 1.192.054 1.385a1892.323 1892.323 0 0 1 .075 1.965l.004.105c.029.704.029.704-.203.973a.85.85 0 0 1-.62.226c-.241-.023-.417-.143-.575-.322a.832.832 0 0 1-.132-.457l-.003-.052a58.21 58.21 0 0 1-.008-.177l-.003-.064c-.034-.712-.06-1.425-.088-2.137a2274.471 2274.471 0 0 0-.056-1.463l-.003-.066-.005-.133-.002-.066a1992.133 1992.133 0 0 0-.139-3.569 44.325 44.325 0 0 1-.022-.664l-.001-.052A22.342 22.342 0 0 1 8.5 9.13c-.005-.263.026-.483.21-.681a.812.812 0 0 1 .914-.134ZM15.152 8.34c.175.109.27.268.339.46.017.119.015.234.01.354l-.001.102a18.277 18.277 0 0 1-.012.42c-.006.227-.014.453-.023.68l-.012.298-.022.58c-.01.227-.018.454-.026.68a2451.722 2451.722 0 0 1-.101 2.603l-.003.072-.003.073-.043 1.123-.016.405-.025.642-.011.293-.01.269a24.529 24.529 0 0 1-.027.596l-.006.087a.787.787 0 0 1-.275.517.807.807 0 0 1-.606.17.763.763 0 0 1-.505-.301c-.135-.213-.157-.4-.146-.647 0-.027.002-.053.003-.08l.01-.267.008-.191a281.346 281.346 0 0 1 .04-1.043l.05-1.37.005-.123.044-1.157.01-.263.002-.066a1909.396 1909.396 0 0 0 .136-3.584l.011-.29.003-.083c.014-.336.036-.637.28-.887a.835.835 0 0 1 .921-.073Z"
    />
  </svg>
  );
};

const MemoSvgTrash = memo(SvgTrash);
export default MemoSvgTrash;