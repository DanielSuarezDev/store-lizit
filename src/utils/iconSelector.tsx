import { EditSvg, FileSvg, SearchSvg, TrashSvg } from '@/assets/icons';
import { FC } from 'react';

const icons: { [key: string]: FC } = {
  FileIcon: FileSvg,
  TrashIcon: TrashSvg,
  EditIcon: EditSvg,
  SearchIcon: SearchSvg
};

export const getIconByName = (name: string, props = {}) => {
  const IconComponent = icons[name];
  return IconComponent ? <IconComponent {...props} /> : null;
};
