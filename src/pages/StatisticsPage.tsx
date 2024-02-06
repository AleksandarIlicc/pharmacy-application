import React, { useEffect, useState } from "react";
import PharmacyBarChart from "../components/PharmacyBarChart";
import PharmacyPieChart from "../components/PharmacyPieChart";
import ProductService, { IProduct } from "service/ProductService";

const StatisticsPage: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>(
    ProductService.getAllProducts()
  );

  return (
    <main>
      <section className="section">
        <h2 className="section-title">Statistics</h2>

        {products && (
          <>
            <PharmacyBarChart products={products} />
            <PharmacyPieChart products={products} />
          </>
        )}
      </section>
    </main>
  );
};

export default StatisticsPage;
