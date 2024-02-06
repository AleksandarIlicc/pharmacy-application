import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import EditProductPage from "./components/EditProductPage";
import NewProduct from "./components/NewProduct";
import Statistics from "./components/Statistics";

import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
          <Route path="statistics" element={<Statistics />}></Route>
          <Route path="/new-product" element={<NewProduct />}></Route>
          <Route path="edit-product/:id" element={<EditProductPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
