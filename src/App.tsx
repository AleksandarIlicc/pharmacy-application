import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import StatisticsPage from "./pages/StatisticsPage";
import EditProductPage from "./pages/EditProductPage";
import NewProductPage from "./pages/NewProductPage";

import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
          <Route path="statistics" element={<StatisticsPage />}></Route>
          <Route path="/new-product" element={<NewProductPage />}></Route>
          <Route path="edit-product/:id" element={<EditProductPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
