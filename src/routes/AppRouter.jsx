import { Routes, Route } from "react-router-dom";
import HomePage from "../sections/Homepage/Homepage";
import { KitchenOrder } from "../sections/Kitchen/Kitchen";


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="kitchen" element={<KitchenOrder />} />
      </Routes>
    </>
  );
};
