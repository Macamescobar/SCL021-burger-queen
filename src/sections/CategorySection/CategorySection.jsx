import FoodCategories from "../../components/category/FoodCategories"
import "../../index.css";
import menu from "../../data/menu.json"
import { Container} from "@mui/material";
import { useState } from "react";
import FoodSection from "../FoodSection/FoodSection"
import { Rowing } from "@mui/icons-material";

export default function CategorySection() {
  
  const [selected, setSelected] = useState("burgers");
  

  return ( 
    <>
    <Container
      sx={{
        width: "10vw",
        bgcolor: "#261D56",
        boxShadow: "1px 3px 1px #9E9E9E",
        borderRadius: 5,
        display:"flex",
        alignItems: "center",
      }}
    > 
    <ul>
    {
      menu.map((category,index) => 
      <FoodCategories key={index} category={category} setSelected={setSelected}/>)
    }
    </ul>
    </Container>
    <FoodSection selected={selected}></FoodSection>
    </>
  );
}
