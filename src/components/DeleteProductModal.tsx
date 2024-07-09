import React from 'react';
import { useProductContext } from '@/context/ProductContext';
import { CloseSvg } from '@/assets/icons';
import { Button } from './Button';
import { Typography } from './Typography/Typography';

interface DeleteProductModalProps {
    productId: number;
    onClose: () => void;
}

export const DeleteProductModal: React.FC<DeleteProductModalProps> = ({ productId, onClose }) => {
    const { deleteProduct } = useProductContext();

    const handleConfirm = () => {
        deleteProduct(productId);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white rounded-lg p-8 w-[40%] text-center">
                <div className="flex justify-end">
                    <CloseSvg onClick={onClose} className='cursor-pointer mb-4' />
                </div>
                <Typography type='l2' bold >¿Está seguro que desea eliminar el producto?</Typography>
                <div className="flex justify-end space-x-4 mt-5 mb-6">
                    <Button onClick={onClose} label='Cancelar' variant='ghost' />
                    <Button onClick={handleConfirm} label='Confirmar' variant='filled' otherClass='bg-red-500' />
                </div>
            </div>
        </div>
    );
};
