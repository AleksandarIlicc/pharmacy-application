import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import productService, {
  IManufacturer,
  IProduct,
} from "../service/ProductService";

const NewProductPage: React.FC = () => {
  let lastProductIndex = -1;
  let newProductId = "";
  let newProductManufacturerId = "";

  const navigate = useNavigate();

  const [products, setProducts] = useState<IProduct[]>([]);
  const [productName, setProductName] = useState<string>("");
  const [productManufacturer, setProductManufacturer] = useState<IManufacturer>(
    { id: "", name: "" }
  );
  const [productPrice, setProductPrice] = useState<number>(0);
  const [productExpiryDate, setProductExpiryDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );

  useEffect(() => {
    const fetchProducts = () => {
      const fetchedProducts: IProduct[] = productService.getAllProducts();
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  if (products && products.length > 0) {
    lastProductIndex = products.length - 1;
    newProductId =
      (parseInt(products?.[lastProductIndex]?.id, 10) + 1).toString() || "1";

    newProductManufacturerId =
      (
        parseInt(products?.[lastProductIndex]?.manufacturer.id, 10) + 1
      ).toString() || "1";
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newProduct: IProduct = {
      id: newProductId.toString(),
      name: productName,
      manufacturer: {
        id: newProductManufacturerId.toString(),
        name: productManufacturer.name,
      },
      price: productPrice,
      expiryDate: new Date(productExpiryDate),
    };

    productService.addProduct(newProduct);
    navigate("/");
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
  };

  const handleManufacturerChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProductManufacturer({
      ...productManufacturer,
      name: event.target.value,
    });
  };

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProductPrice(parseFloat(event.target.value));
  };

  const handleExpiryDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProductExpiryDate(event.target.value);
  };

  return (
    <section className="edit-page section">
      <h2 className="section-title">Add new product</h2>

      <div className="edit-page-container">
        <form onSubmit={handleSubmit}>
          <article className="product edit-product">
            <div className="input-box">
              <input
                type="text"
                name="name"
                value={productName}
                placeholder="Name"
                onChange={handleNameChange}
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                name="manufacturer"
                value={productManufacturer.name}
                placeholder="Manufacturer"
                onChange={handleManufacturerChange}
              />
            </div>

            <div className="product-price-box">
              <div className="input-box">
                <input
                  type="number"
                  name="price"
                  value={productPrice.toString()}
                  placeholder="Price"
                  onChange={handlePriceChange}
                />
              </div>

              <div className="input-box">
                <input
                  type="date"
                  name="expiryDate"
                  value={productExpiryDate}
                  placeholder="Expiry date"
                  onChange={handleExpiryDateChange}
                />
              </div>
            </div>

            <div className="product-btns">
              <button className="btn btn--new-product">Add</button>
            </div>
          </article>
        </form>
      </div>
    </section>
  );
};

export default NewProductPage;
