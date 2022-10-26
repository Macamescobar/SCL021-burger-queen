import React from 'react';
import "../../index.css";

const FoodCategories = ( {setSelected, category}) => {
    return (
        <ul className= 'categories-food'>
            <li onClick={()=> {setSelected(category.category_name)}}>{category.icon}</li>
        </ul>
    );
}
 
export default FoodCategories;

