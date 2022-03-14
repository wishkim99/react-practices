import React, { Component } from 'react'
import FoodListItem from './FoodListItem';

//부모에서 자식으로 데이터 전달
export default class FoodList extends Component {
render(){
    return(
        <ul>
            <FoodListItem name="Egg" quantity="10"/>
            <FoodListItem name="Milk" quantity="5"/>
            <FoodListItem name="Bread" quantity="20"/>
        </ul>
    );
}
};

