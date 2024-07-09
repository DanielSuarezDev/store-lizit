import { WrapperProductList } from './components/WrapperProductList';

const Product = async () => {
  const fetchProducts = await fetch('https://fakestoreapi.com/products');
  const data = await fetchProducts.json();
  
  return <WrapperProductList productsData={data} />
}

export default Product;

