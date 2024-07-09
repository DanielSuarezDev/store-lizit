"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

import { Header } from '@/components/Header';
import { Search } from '@/components/Search';
import AddProductModal from '@/components/Popup';
import { ProductTable } from '@/components/Table'
import { DeleteProductModal } from '@/components/DeleteProductModal';
import { Product as ProductProps, useProductContext } from '@/context/ProductContext';

const Product = () => {
  const { products, setProducts } = useProductContext();
  const [search, setSearch] = useState('');
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const fetchProducts = async () => {
    const storedProducts = localStorage.getItem('products');
    if (!storedProducts) {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts: ProductProps[] = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleView = (id: number) => {
    router.push(`/product-detail?view=${id}`);
  };

  const handleEdit = (id: number) => {
    router.push(`/product-detail?edit=${id}`);
  };

  const handleDelete = (id: number) => {
    setSelectedProductId(id);
    setIsDeleteModalOpen(true);
  };

  const handleAddProduct = () => {
    setIsModalOpen(true);
  };
  return (
    <div>
      <Header handleAddProduct={handleAddProduct} />
      <Search search={search} setSearch={setSearch} />
      <ProductTable
        products={filteredProducts}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {isModalOpen && <AddProductModal onClose={() => setIsModalOpen(false)} />}

      {isDeleteModalOpen && selectedProductId !== null && (
        <DeleteProductModal
          productId={selectedProductId}
          onClose={() => setIsDeleteModalOpen(false)}
        />
      )}

    </div>
  )
}

export default Product
