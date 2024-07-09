import React, { FC } from 'react'
import { Input } from './Input';
import { getIconByName } from '@/utils/iconSelector';

interface Props {
  search: string;
  setSearch: (search: string) => void;
}

export const Search: FC<Props> = ({
  search,
  setSearch,
}) => {
  return (
    <div className='w-72 h-10 mb-10 border-[1px] border-blue-500 rounded-[10px] flex items-center '>
      <Input
        placeholder="Buscar"
        value={search}
        handleChange={(e) => setSearch(e.target.value)}
        otherClasses='w-60 h-2 !border-transparent blur-none focus:ring-0 focus:outline-none !mb-6'
      />

      {getIconByName('SearchIcon') }
    </div>
  )
}
