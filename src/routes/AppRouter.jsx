import { Routes, Route } from "react-router-dom";
import HomePage from "../sections/Homepage/Homepage";
import { KitchenOrder } from "../sections/Kitchen/Kitchen";
import WelcomePage from "../sections/WelcomeSection/WelcomePage";


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="homepage" element={<HomePage />} />
        <Route path="kitchen" element={<KitchenOrder />} />
      </Routes>
    </>
  );
};
