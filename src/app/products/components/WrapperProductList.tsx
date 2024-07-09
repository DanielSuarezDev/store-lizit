"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { Header } from "@/components/Header";
import { Search } from "@/components/Search";
import AddProductModal from "@/components/Popup";
import { ProductTable } from "@/components/Table";
import { DeleteProductModal } from "@/components/DeleteProductModal";
import {
  Product as ProductProps,
  useProductContext,
} from "@/context/ProductContext";

export const WrapperProductList = ({
  productsData,
}: {
  productsData: ProductProps[];
}) => {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const { products, setProducts } = useProductContext();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );

  const filteredProducts: ProductProps[] = products.filter((product) =>
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

  useEffect(() => {
    setProducts(productsData);
  }, [productsData]);

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
  );
};
