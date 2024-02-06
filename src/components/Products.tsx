import React, { useEffect, useState } from "react";

import SingleProduct from "./SingleProduct";

import productService, { IProduct } from "../service/ProductService";

const Products: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = () => {
      const fetchedProducts: IProduct[] = productService.getAllProducts();
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  const handlerDeleteProduct = (productId: string) => {
    productService.deleteProduct(productId);
    const updatedProducts: IProduct[] = productService.getAllProducts();
    setProducts(updatedProducts);
  };

  return (
    <div className="products">
      {products &&
        products.map((product) => (
          <SingleProduct
            key={product.id}
            product={product}
            handlerDeleteProduct={handlerDeleteProduct}
          />
        ))}
    </div>
  );
};

export default Products;
