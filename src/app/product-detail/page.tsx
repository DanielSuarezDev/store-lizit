/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { Typography } from '@/components';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { ArrowSvg, LogoFullSvg } from '@/assets/icons';
import { DeleteProductModal } from '@/components/DeleteProductModal';
import { Product, useProductContext } from '@/context/ProductContext';

const Edit = () => {
    const search = useSearchParams();
    const edit = search.get('edit');
    const view = search.get('view');
    const router = useRouter();
    const id = edit || view;

    const { products, updateProduct } = useProductContext();
    const [product, setProduct] = useState<Product | null>(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

    useEffect(() => {
        const foundProduct = products.find(p => p.id === Number(id));
        if (foundProduct) {
            setProduct(foundProduct);
        }
    }, [id, products]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (product) {
            setProduct({
                ...product,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (product) {
            updateProduct(product);
            router.push('/');
        }
    };

    const handleDelete = (id: number) => {
        setSelectedProductId(id);
        setIsDeleteModalOpen(true);
    };

    if (!product) return <p>Loading...</p>;
    console.log("product", product)
    return (
        <div className='justify-center p-10'>

            <div className='flex justify-between mt-10 w-[92%] m-auto'>
                <div className='flex items-center'>
                    <div
                        onClick={() => router.push('/')}
                        className='bg-blue-200 w-8 h-8 flex justify-center items-center rounded-md mr-8 cursor-pointer'>
                        <ArrowSvg />
                    </div>
                    <Typography type='l1' bold gutterBottom={false}>{product.title}</Typography>
                </div>
                <LogoFullSvg />
            </div>

            <form onSubmit={handleSubmit} className='mt-10'>
                <div className='flex h-full w-full m-auto justify-center'>
                    <div className='flex flex-col mr-10 justify-between w-[40%]'>
                        <Input disabled={view ? true : false} label='Nombre' name="title" value={product.title} handleChange={handleChange} />
                        <Input disabled={view ? true : false} label='Categoría' name="category" value={product.category} handleChange={handleChange} />
                        <Input disabled={view ? true : false} type='textarea' name="description" label='Descripción' value={product.description} handleChange={handleChange} />
                        <Input disabled={view ? true : false} label='Tarifa base' name="price" value={String(product.price)} handleChange={handleChange} />
                    </div>

                    <div className=''>
                        <div className='flex h-full'>
                            <img src={product.image} alt={product.title} className="w-[484px] h-full object-fill rounded-2xl" />

                            <div className='flex flex-col h-full'>
                                {product?.images?.map((image, index) => (
                                    <img key={index} src={image} alt={product.title} className="w-12 h-12 object-fill rounded-xl m-2" />
                                ))}
                            </div>

                        </div>

                        <div className='flex absolute bottom-16 right-16 space-x-4'>
                            {view ?
                                <>
                                    <Button type='button' label='volver' variant='ghost' onClick={() => router.push('/')} />
                                    <Button type='button' label='eliminar' variant='filled' otherClass='bg-red-500' onClick={() => handleDelete(product.id)} />
                                    <Button type='button' label='editar' variant='filled' onClick={() => router.push(`/product-detail?edit=${product.id}`)} />
                                </>
                                :
                                <>
                                    <Button type='button' label='Cancelar' variant='ghost' onClick={() => router.push(`/product-detail?view=${product.id}`)} />
                                    <Button type='submit' label='Guardar' variant='filled' />
                                </>

                            }
                        </div>
                    </div>
                </div>
            </form>
            {isDeleteModalOpen && selectedProductId !== null && (
                <DeleteProductModal
                    productId={selectedProductId}
                    onClose={() => {
                        setIsDeleteModalOpen(false)
                        router.push('/');
                    }}
                />
            )}
        </div>
    )
}

export default Edit