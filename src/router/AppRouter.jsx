import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HistoryPage, HomePage } from "../pages";
import { CoinsPage } from "../pages/CoinsPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/coins" element={<CoinsPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
