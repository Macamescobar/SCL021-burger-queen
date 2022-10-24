import Item from "../../components/item/Item";
import FoodCategories from "../../components/category/FoodCategories"
import "../../index.css";

export default function CategorySection() {
  return (
    <Item
      sx={{
        width: "5vw",
        bgcolor: "#261D56",
        boxShadow: "1px 3px 1px #9E9E9E",
        borderRadius: 5,
      }}
    > 
    <FoodCategories burger= "🍔"></FoodCategories>
    <FoodCategories accompaniment= "🍟"></FoodCategories>
    <FoodCategories coffee= "☕"></FoodCategories>
    <FoodCategories drinks= "🍹"></FoodCategories>
    </Item>
    
  );
}
