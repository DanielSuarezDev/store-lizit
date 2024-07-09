import Image from "next/image";
import Product from "./products/page";
import { Header } from "@/components/Header";
import { ProductProvider } from "@/context/ProductContext";

export default function Home() {
  return (
    <main className="p-6 w-[900px] m-auto">
      {/* <ProductProvider> */}
        <>
          
          <Product />
        </>
      {/* </ProductProvider> */}
    </main>
  );
}
