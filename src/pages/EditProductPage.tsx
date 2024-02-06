import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import productService, {
  IManufacturer,
  IProduct,
} from "../service/ProductService";

const EditProductPage: React.FC = () => {
  const { id } = useParams();
  const parsedId = id ? parseInt(id, 10) : undefined;
  const navigate = useNavigate();

  const [productName, setProductName] = useState<string>("");
  const [productManufacturer, setProductManufacturer] = useState<IManufacturer>(
    {
      id: "",
      name: "",
    }
  );
  const [productPrice, setProductPrice] = useState<string>("0");
  const [productExpiryDate, setProductExpiryDate] = useState<Date>(new Date());

  useEffect(() => {
    const id = String(parsedId);

    const getSingleProduct = () => {
      const fetchedProduct: IProduct | undefined =
        productService.getProductById(id);

      if (fetchedProduct) {
        setProductName(fetchedProduct.name);
        setProductManufacturer({
          id: fetchedProduct.manufacturer.id,
          name: fetchedProduct.manufacturer.name,
        });
        setProductPrice(fetchedProduct.price.toString());
        setProductExpiryDate(fetchedProduct.expiryDate);
      }
    };
    getSingleProduct();
  }, [parsedId]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const id = String(parsedId);

    const updatedProduct = {
      id: id,
      name: productName,
      manufacturer: {
        id: productManufacturer.id,
        name: productManufacturer.name,
      },
      price: +productPrice,
      expiryDate: productExpiryDate,
    };

    productService.updateProduct(id, updatedProduct);

    navigate("/");
  };

  return (
    <section className="edit-page section">
      <h2 className="section-title">Edit product</h2>

      <div className="edit-page-container">
        <form onSubmit={handleSubmit}>
          <article className="product edit-product">
            <div className="input-box">
              <input
                type="text"
                name="name"
                value={productName}
                placeholder="Name"
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                name="manufacturer"
                value={productManufacturer.name}
                placeholder="Manufacturer"
                onChange={(e) =>
                  setProductManufacturer({
                    ...productManufacturer,
                    name: e.target.value,
                  })
                }
              />
            </div>

            <div className="product-price-box">
              <div className="input-box">
                <input
                  type="number"
                  name="price"
                  value={productPrice}
                  placeholder="Price"
                  onChange={(e) => setProductPrice(e.target.value)}
                />
              </div>

              <div className="input-box">
                <input
                  type="date"
                  name="expiryDate"
                  value={productExpiryDate.toISOString().split("T")[0]}
                  placeholder="Expiry date"
                  onChange={(e) =>
                    setProductExpiryDate(new Date(e.target.value))
                  }
                />
              </div>
            </div>

            <div className="product-btns">
              <button className="btn btn--edit">Edit</button>
            </div>
          </article>
        </form>
      </div>
    </section>
  );
};

export default EditProductPage;
