import React, { Fragment } from 'react';
import "../../index.css";

const FoodCategories = (props) => {
    return (
        <Fragment className= 'categories-food'>
            <h1>{props.burger}</h1>
            <h1>{props.accompaniment}</h1>
            <h1>{props.coffee}</h1>
            <h1>{props.drinks}</h1>
        </Fragment>
    );
}
 
export default FoodCategories;