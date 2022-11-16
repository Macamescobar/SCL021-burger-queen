import React from 'react';
import "../../index.css";

const FoodCategories = ( {setSelected, category}) => {
    return (
        <>
            <div className= 'categories-food'><li  onClick={()=> {setSelected(category.category_name)}}>{category.icon}</li></div>
        </>
    );
}
 
export default FoodCategories;

