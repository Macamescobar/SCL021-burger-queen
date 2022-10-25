import React from 'react';
import "../../index.css";

const FoodCategories = ({burger, accompaniment, coffee, drinks}) => {
    return (
        <ul className= 'categories-food'>
            <li>{burger}</li>
            <li>{accompaniment}</li>
            <li>{coffee}</li>
            <li>{drinks}</li>
        </ul>
    );
}
 
export default FoodCategories;