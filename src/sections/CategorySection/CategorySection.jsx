import FoodCategories from "../../components/category/FoodCategories";
import "../../index.css";
import menu from "../../data/menu.json";
import { useState } from "react";
import FoodSection from "../FoodSection/FoodSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function CategorySection() {
  const [selected, setSelected] = useState("burgers");

  return (
    <>
      <div className="category-section-container">
        <ul className="styles-ul">
          {menu.map((category, index) => (
            <FoodCategories
              key={index}
              category={category}
              setSelected={setSelected}
            />
          ))}
        </ul>
        <Link to="/welcome" ><FontAwesomeIcon icon={faHandPointLeft} className="circle-arrow-left"/></Link>
      </div>
      <FoodSection selected={selected}></FoodSection>
    </>
  );
}
