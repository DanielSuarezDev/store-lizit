/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { useProductContext, Product } from '@/context/ProductContext';
import { Input } from './Input';
import { Typography } from './Typography/Typography';
import { Button } from './Button';
import { CloseSvg } from '@/assets/icons';

interface AddProductModalProps {
    onClose: () => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ onClose }) => {
    const { addProduct } = useProductContext();
    const [newProduct, setNewProduct] = useState<Omit<Product, 'id' | 'image'>>({
        title: '',
        category: '',
        description: '',
        price: 0,
        images: [],
    });
    const [newImageUrl, setNewImageUrl] = useState('');
    const [mainImageIndex, setMainImageIndex] = useState<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewImageUrl(e.target.value);
    };

    const handleAddImage = () => {
        if (newImageUrl.trim() !== '') {
            setNewProduct({
                ...newProduct,
                images: [...newProduct.images, newImageUrl],
            });
            setNewImageUrl('');
        }
    };

    const handleImageSelect = (index: number) => {
        setMainImageIndex(index);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const productWithId = {
            ...newProduct,
            id: Date.now(),
            image: mainImageIndex !== null ? newProduct.images[mainImageIndex] : '',
        };
        addProduct(productWithId);
        onClose();
    };

    console.log("mainImageIndex", mainImageIndex)

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white rounded-lg p-8 w-[80%]">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Nuevo producto</h2>
                    <CloseSvg onClick={onClose} className='cursor-pointer' />
                </div>
                <form onSubmit={handleSubmit} className='relative'>
                    <div className='flex pb-16'>
                        <div className='w-[50%]'>
                            <Input label='Nombre' name="title" value={newProduct.title} handleChange={handleChange} />
                            <Input label='Categoría' name="category" value={newProduct.category} handleChange={handleChange} />
                            <Input type='textarea' name="description" label='Descripción' value={newProduct.description} handleChange={handleChange} />
                            <Input label='Tarifa base' name="price" value={String(newProduct.price)} handleChange={handleChange} />
                        </div>

                        <div className="w-[50%] ml-6 bg-blue-200 rounded-md p-4 flex flex-col pt-24">
                            <Typography type='l2' bold color='text-blue-600' >Imágenes</Typography>

                            <Typography type='l4' gutterBottom={false}>Añada los links de las imágenes relacionadas al producto.</Typography>
                            <div className="flex items-center mt-5">
                                <input
                                    type="text"
                                    value={newImageUrl}
                                    onChange={handleImageChange}
                                    className="w-full border rounded-2xl p-2 mr-2 border-blue-500"
                                />
                                <Button type='button' label='Agregar' otherClass='bg-blue-500' variant='filled' onClick={handleAddImage} />
                            </div>
                            <div className="mt-4 text-center">
                                <Typography type='l4' gutterBottom={false}>Selecciona la imagen principal</Typography>
                                <div className="flex space-x-2 flex-wrap justify-center">
                                    {newProduct.images.map((url, index) => (
                                        <div
                                        key={index}
                                        className={`w-24 h-24 border relative mt-10 rounded-md ${mainImageIndex === index ? 'border-blue-500' : ''}`}
                                        onClick={() => handleImageSelect(index)}
                                        >
                                            

                                            <div className={`absolute w-5 h-5 rounded-full ${mainImageIndex === index ? 'bg-blue-500 border-white border-2' : 'bg-white'} -top-8 left-9 `} />
                                            
                                            <img src={url} alt={`Imagen ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 absolute -bottom-5 right-0">
                            <Button type='submit' label='Guardar' variant='filled' disabled={newProduct.images.length === 0 || mainImageIndex === null} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProductModal;
