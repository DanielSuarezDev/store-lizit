import localFont from 'next/font/local';
import React, { ReactNode } from 'react';

export enum TypeTypography {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  s1 = 's1',
  s2 = 's2',
  s3 = 's3',
  s4 = 's4',
  s5 = 's5',
  b1 = 'b1',
  b2 = 'b2',
  b3 = 'b3',
  b4 = 'b4',
  b5 = 'b5',
  l1 = 'l1',
  l2 = 'l2',
  l3 = 'l3',
  l4 = 'l4',
}

export const tagsByType = (
  type: string,
  {
    bold,
    color,
    noWrap,
    gutterBottom,
    otherClasses,
    title,
    cursor,
    inline = true,
  }: {
    bold?: boolean;
    noWrap?: boolean;
    color?: string;
    gutterBottom?: boolean;
    otherClasses?: string;
    title?: string;
    cursor?: boolean;
    inline?: boolean;
  },
) => {
  const classDefault = `leading-[142%] ${inline ? 'inline' : ''} tracking-[0.18px] ${
    noWrap ? 'whitespace-nowrap' : ''
  } ${gutterBottom ? 'mb-[16px]' : 'mb-[0px]'} ${color ? color : ''}
  ${cursor ? 'cursor-pointer' : ''}
  `;
  const tags: {
    [key: string]: ({
      children,
    }: {
      children: React.ReactNode;
    }) => React.JSX.Element | undefined;
  } = {
    h1: ({ children }) => (
      <h1
        className={
          classDefault +
          `text-5xl ${
            bold
              ? 'font-semibold tracking-[-0.48px] font-LoraSemiBold'
              : 'font-medium font-LoraMedium'
          } leading-[110%] custom-title-font ${otherClasses ? otherClasses : ''}
        `
        }
        title={title}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        title={title}
        className={
          classDefault +
          `text-[2.6875rem] ${
            bold
              ? 'font-semibold font-LoraSemiBold'
              : 'font-medium font-LoraMedium tracking-[-0.42px]'
          } leading-[112%] custom-title-font ${otherClasses ? otherClasses : ''}`
        }
      >
        {children}
      </h2>
    ),
    h3: ({ children }: { children: ReactNode }) => (
      <h3
        title={title}
        className={
          classDefault +
          `text-[2.25rem] ${
            bold
              ? 'font-semibold font-LoraSemiBold'
              : 'font-medium font-LoraMedium'
          } leading-[114%] custom-title-font ${otherClasses ? otherClasses : ''}`
        }
      >
        {children}
      </h3>
    ),
    s1: ({ children }: { children: ReactNode }) => (
      <h4
        title={title}
        className={
          classDefault +
          `text-[2rem] ${
            bold
              ? 'font-semibold font-LoraSemiBold'
              : 'font-medium font-LoraMedium'
          } leading-[116%] custom-subtitle-font ${otherClasses ? otherClasses : ''}`
        }
      >
        {children}
      </h4>
    ),
    s2: ({ children }: { children: ReactNode }) => (
      <h4
        title={title}
        className={
          classDefault +
          `text-[1.625rem] ${
            bold
              ? 'font-semibold font-LoraSemiBold'
              : 'font-medium font-LoraMedium'
          } leading-[118%] ${otherClasses ? otherClasses : ''} custom-subtitle-font`
        }
      >
        {children}
      </h4>
    ),
    s3: ({ children }) => (
      <h5
        title={title}
        className={
          classDefault +
          `text-[1.5rem] ${
            bold
              ? 'font-semibold font-LoraSemiBold'
              : 'font-medium font-LoraMedium'
          } leading-[120%] ${otherClasses ? otherClasses : ''} custom-subtitle-font`
        }
      >
        {children}
      </h5>
    ),
    s4: ({ children }) => (
      <h5
        title={title}
        className={
          classDefault +
          `text-[1.3rem] ${
            bold
              ? 'font-semibold font-LoraSemiBold'
              : 'font-medium font-LoraMedium'
          } leading-[122%] tracking-[0.2px] ${otherClasses ? otherClasses : ''} custom-subtitle-font`
        }
      >
        {children}
      </h5>
    ),
    s5: ({ children }) => (
      <h6
        title={title}
        className={
          classDefault +
          `text-[1.125rem] ${
            bold
              ? 'font-semibold font-LoraSemiBold'
              : 'font-medium font-LoraMedium'
          } leading-[124%] tracking-[0.18px] ${
            otherClasses ? otherClasses : ''
          } custom-subtitle-font `
        }
      >
        {children}
      </h6>
    ),
    b1: ({ children }) => (
      <p
        title={title}
        className={
          classDefault +
          `text-lg ${
            bold
              ? 'font-medium font-DMSansMedium'
              : 'font-normal font-DMSansRegular'
          } leading-[132%] tracking-[0.18px] ${
            otherClasses ? otherClasses : ''
          }  custom-body-font`
        }
      >
        {children}
      </p>
    ),
    b2: ({ children }) => (
      <p
        title={title}
        className={
          classDefault +
          `text-base ${
            bold
              ? 'font-medium font-DMSansMedium'
              : 'font-normal font-DMSansRegular'
          } leading-[140%] tracking-[0.16px] ${
            otherClasses ? otherClasses : ''
          } custom-body-font`
        }
      >
        {children}
      </p>
    ),
    b3: ({ children }) => (
      <p
        className={
          classDefault +
          `text-sm ${
            bold
              ? 'font-medium font-DMSansMedium'
              : 'font-normal font-DMSansNormal'
          } leading-[142%] tracking-[0.14px] ${
            otherClasses ? otherClasses : ''
          } custom-body-font`
        }
      >
        {children}
      </p>
    ),
    b4: ({ children }) => (
      <p
        title={title}
        className={
          classDefault +
          `text-xs ${
            bold
              ? 'font-medium font-DMSansMedium'
              : 'font-normal font-DMSansRegular'
          } leading-[142%] tracking-[0.12px] ${
            otherClasses ? otherClasses : ''
          } custom-body-font`
        }
      >
        {children}
      </p>
    ),
    b5: ({ children }) => (
      <span
        title={title}
        className={
          classDefault +
          `text-xs ${
            bold
              ? 'font-bold font-DMSansBold tracking-[0.36px] '
              : 'font-medium font-DMSansMedium tracking-[0.48px]'
          } leading-[142%] ${otherClasses ? otherClasses : ''} custom-body-font`
        }
      >
        {children}
      </span>
    ),
    l1: ({ children }) => (
      <label
        title={title}
        className={
          classDefault +
          `uppercase text-base ${
            bold
              ? 'font-bold font-DMSansBold tracking-[0.48px]'
              : 'font-medium font-DMSansMedium tracking-[0.64px]'
          } leading-[142%] ${otherClasses ? otherClasses : ''} custom-label-font`
        }
      >
        {children}
      </label>
    ),
    l2: ({ children }) => (
      <label
        title={title}
        className={
          classDefault +
          `text-[14px] ${
            bold
              ? 'font-bold font-DMSansBold tracking-[0.42px]'
              : 'font-medium font-DMSansMedium tracking-[0.56px]'
          } leading-[19.88px] ${otherClasses ? otherClasses : ''} custom-label-font`
        }
      >
        {children}
      </label>
    ),
    l3: ({ children }) => (
      <label
        title={title}
        className={
          classDefault +
          `text-xs ${
            bold
              ? 'font-bold font-DMSansBold tracking-[0.36px] '
              : 'font-medium font-DMSansMedium tracking-[0.48px]'
          } leading-[142%] ${otherClasses ? otherClasses : ''} custom-label-font`
        }
      >
        {children}
      </label>
    ),
    l4: ({ children }) => (
      <label
        title={title}
        className={
          classDefault +
          `text-[0.625rem] ${
            bold
              ? 'font-bold font-DMSansBold tracking-[0.5px] '
              : 'font-medium font-DMSansMedium tracking-[0.6px] '
          } leading-[142%] ${otherClasses ? otherClasses : ''} custom-label-font`
        }
      >
        {children}
      </label>
    ),
  };

  return tags[type];
};
