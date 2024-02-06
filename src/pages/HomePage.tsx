import React from "react";
import { Link } from "react-router-dom";
import Products from "../components/Products";

const HomePage: React.FC = () => {
  return (
    <main>
      <section className="home-page section">
        <div className="home-page-header">
          <h2 className="section-title">All products</h2>

          <Link to="/new-product">
            <button className="btn btn--new-product">New product</button>
          </Link>
        </div>

        <Products />
      </section>
    </main>
  );
};

export default HomePage;
