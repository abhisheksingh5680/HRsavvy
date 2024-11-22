import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
};

export default RouterConfig;
