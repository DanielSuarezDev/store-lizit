import React, { FC } from 'react';

import { Required } from '../../assets/icons';
import { TypeTypography, tagsByType } from './utils.typography';

type Props = {
  children: React.ReactNode;
  type: keyof typeof TypeTypography;
  gutterBottom?: boolean;
  noWrap?: boolean;
  bold?: boolean;
  required?: boolean;
  color?: string;
  otherClasses?: string;
  title?: string;
  cursor?: boolean;
  inline?: boolean;
};

export const Typography: FC<Props> = ({
  children,
  type = TypeTypography.b1,
  gutterBottom = true,
  noWrap = false,
  bold = false,
  required = false,
  color,
  otherClasses,
  title,
  cursor = false,
  inline = true,
}) => {
  const Parent = tagsByType(type, {
    bold,
    noWrap,
    gutterBottom,
    color,
    otherClasses,
    title,
    cursor,
    inline
  });

  const renderChildren = (children: React.ReactNode) => {
    return React.Children.map(children, (child) => {
      return child;
    });
  };

  return (
    <Parent>
      {renderChildren(children)}
      {required && (
        <span className="inline-block">
          <Required style={{ marginLeft: '4px' }} />
        </span>
      )}
    </Parent>
  );
};
