"use client";
import React from 'react'
import { Button } from './Button'
import { LogoFullSvg } from '../assets/icons';

export const Header = ({
    handleAddProduct
}: {
    handleAddProduct: () => void
}) => {
    return (
        <div className='flex justify-between items-center mb-10 w-full'>
            <Button type='button' variant='filled' label='Nuevo producto' width='w-[235px]' onClick={handleAddProduct} iconLeft='FileIcon' />
            <LogoFullSvg />
        </div>
    )
}
