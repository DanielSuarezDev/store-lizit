import { Product } from '@/context/ProductContext';
import React, { FC } from 'react';

export const ItemProduct: FC<Product> = ({
    image,
    title,
    category,
    description,
    price,
}) => {
    return (
        <div className="flex items-center justify-between w-full">
            {/* <img src={image} alt={title} className="w-16 h-16 object-cover" /> */}
            <td className="p-4">
                <img src={image} alt={title} className="w-16 h-16 object-cover" />
            </td>
            <td className="font-bold">{title}</td>
            <td className="text-gray-500">{category}</td>
            <td className="text-sm text-gray-700">{description}</td>
            <td className="font-semibold">${price}</td>
        </div>
    );
};
