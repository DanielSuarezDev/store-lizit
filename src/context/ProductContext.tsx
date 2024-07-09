"use client"
import React, { createContext, useContext, useState, FC, ReactNode, useEffect } from 'react';
import { useToast } from './toastContext';

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string; // Principal image URL
    images: string[]; // Array of image URLs
}

interface ProductContextType {
    products: Product[];
    setProducts: (products: Product[]) => void;
    addProduct: (product: Product) => void;
    updateProduct: (product: Product) => void;
    deleteProduct: (id: number) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
    children: ReactNode;
}

export const ProductProvider: FC<ProductProviderProps> = ({ children }) => {
    const [products, setProductsState] = useState<Product[]>([]);
    const {success} = useToast();

    // Load products from localStorage on initial render
    useEffect(() => {
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            setProductsState(JSON.parse(storedProducts));
        }
    }, []);

      // Save products to localStorage whenever the products state changes
      useEffect(() => {
        console.log("products --------------", products.length)
        if (products.length > 0) {
            localStorage.setItem('products', JSON.stringify(products));
        } else {
            localStorage.removeItem('products');
        }
    }, [products]);

    const setProducts = (products: Product[]) => {
        setProductsState(products);
    };

    const addProduct = (product: Product) => {
        setProductsState(prevProducts => {
            const updatedProducts = [...prevProducts, product];
            localStorage.setItem('products', JSON.stringify(updatedProducts));
            return updatedProducts;
        });
        success('Producto agregado correctamente');
    };

    const updateProduct = (updatedProduct: Product) => {
        setProductsState(prevProducts => {
            const updatedProducts = prevProducts.map(p => (p.id === updatedProduct.id ? updatedProduct : p));
            localStorage.setItem('products', JSON.stringify(updatedProducts));
            return updatedProducts;
        });
        success('Producto actualizado correctamente');
    };

    const deleteProduct = (id: number) => {
        setProductsState(prevProducts => {
            const updatedProducts = prevProducts.filter(p => p.id !== id);
            localStorage.setItem('products', JSON.stringify(updatedProducts));
            return updatedProducts;
        });
        success('Producto eliminado correctamente');
    };

    return (
        <ProductContext.Provider value={{ products, setProducts, addProduct, updateProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProductContext must be used within a ProductProvider');
    }
    return context;
};
