import { Routes, Route } from "react-router-dom";

import { AddDish } from "../pages/AddDish";
import { EditDish } from "../pages/EditDish";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/add" element={<AddDish />} />
      <Route path="/edit/:id" element={<EditDish />} />
    </Routes>
  )
}