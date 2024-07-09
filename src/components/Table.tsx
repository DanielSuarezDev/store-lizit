/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import { ItemProduct } from './ItemProduct';
import { Product } from '@/context/ProductContext';
import { Typography } from './Typography/Typography';
import { Button } from './Button';
import { EditSvg, TrashSvg } from '@/assets/icons';

interface ProductTableProps {
    products: Product[];
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
    onView: (id: number) => void;
}

export const ProductTable: FC<ProductTableProps> = ({ products, onEdit, onDelete, onView }) => {
    return (
        <table className="table-auto bg-white shadow-md rounded">
            <thead>
                <tr className="bg-white border-b-2 text-[10px]">
                    <th className="p-4 text-left">Foto</th>
                    <th className="p-4 text-left">Nombre</th>
                    <th className="p-4 text-left">Categoría</th>
                    <th className="p-4 text-left">Descripción</th>
                    <th className="p-4 text-left w-28">Tarifa base</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <tr key={index} className='text-[10px]'>
                        <td className="p-4">
                            <img src={product.image} alt={product.title} className="w-8 h-8 object-cover" />
                        </td>
                        <td className="p-4">{product.title}</td>
                        <td className="p-4">{product.category}</td>
                        <td className="p-4">{product.description}</td>
                        <td className="p-4">${product.price}</td>
                        <td className="p-4 flex space-x-2">
                            <Button label='ver' onClick={() => onView(product.id)} otherClass='bg-blue-500' width='w-[75px]' height='h-[25px]' />
                            <div onClick={() => onEdit(product.id)} className='cursor-pointer'>
                                <EditSvg />
                            </div>
                            <div onClick={() => onDelete(product.id)} className='cursor-pointer'>
                                <TrashSvg />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
