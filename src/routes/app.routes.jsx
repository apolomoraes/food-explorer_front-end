import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { AddDish } from "../pages/AddDish";
import { EditDish } from "../pages/EditDish";
import { DishDetail } from "../pages/DishDetail";
import { MenuMobile } from "../pages/MenuMobile";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddDish />} />
      <Route path="/edit/:id" element={<EditDish />} />
      <Route path="/details/:id" element={<DishDetail />} />
      <Route path="/menu" element={<MenuMobile />} />
    </Routes>
  )
}