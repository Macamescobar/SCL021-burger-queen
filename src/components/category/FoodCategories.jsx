import React from 'react';
import "../../index.css";

const FoodCategories = (props) => {
    return (
        <ul className= 'categories-food'>
            <li>{props.burger}</li>
            <li>{props.accompaniment}</li>
            <li>{props.coffee}</li>
            <li>{props.drinks}</li>
        </ul>
    );
}
 
export default FoodCategories;