import FoodCategories from "../../components/category/FoodCategories";
import "../../index.css";
import menu from "../../data/menu.json";
import { useState } from "react";
import FoodSection from "../FoodSection/FoodSection";

export default function CategorySection() {
  const [selected, setSelected] = useState("burgers");

  return (
    <>
      <div className="category-section-container">
        <ul className="styles-ul">
          <img
            src="../../img/benito-logo2.png"
            alt="logo"
            className="benito-logo"
          />
          {menu.map((category, index) => (
            <FoodCategories
              key={index}
              category={category}
              setSelected={setSelected}
            />
          ))}
        </ul>
      </div>
      <FoodSection selected={selected}></FoodSection>
    </>
  );
}
