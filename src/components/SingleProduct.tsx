import React from "react";
import { Link } from "react-router-dom";

import { IProduct } from "../service/ProductService";

interface SingleProductProps {
  product: IProduct;
  handlerDeleteProduct: (productId: string) => void;
}

const SingleProduct: React.FC<SingleProductProps> = ({
  product,
  handlerDeleteProduct,
}) => {
  const formattedExpiryDate = product.expiryDate
    ? new Date(product.expiryDate)
    : null;

  const formattedDateString = formattedExpiryDate
    ? `${formattedExpiryDate.getDate()}.${
        formattedExpiryDate.getMonth() + 1
      }.${formattedExpiryDate.getFullYear()}`
    : "";

  return (
    <article className="product">
      <h3>{product.name}</h3>
      <p>Manufacturer: {product.manufacturer.name}</p>
      <div className="product-price-box">
        <p>
          Price:{" "}
          {product.price.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR",
          })}
        </p>

        <p>Expiry Date: {formattedDateString}</p>
      </div>

      <div className="product-btns">
        <Link to={`/edit-product/${product.id}`}>
          <button className="btn btn--edit">Edit</button>
        </Link>
        <button
          className="btn btn--delete"
          onClick={() => handlerDeleteProduct(product.id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
};

export default SingleProduct;
