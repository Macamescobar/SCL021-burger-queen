
import Item from "../../components/item/Item";
import menu from "../../data/menu.json"


export default function FoodSection({selected}) {
  const option = menu.find(item => item.category_name === selected)
  console.log(option)
  return (
    <Item
      sx={{
        width: "70vw",
        bgcolor: "#DEE8FF",
        boxShadow: "1px 3px 1px #9E9E9E",
      }}
    > Item 2
    </Item>
  )
}

