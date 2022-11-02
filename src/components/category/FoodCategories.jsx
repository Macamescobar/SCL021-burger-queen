import React from 'react';
import "../../index.css";

const FoodCategories = ( {setSelected, category}) => {
    return (
        <>
            <li className= 'categories-food' onClick={()=> {setSelected(category.category_name)}}>{category.icon}</li>
        </>
    );
}
 
export default FoodCategories;

