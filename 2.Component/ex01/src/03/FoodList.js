import React from 'react'
import FoodListItem from './FoodListItem';

const FoodList = ({foods}) => {
  return (
    <ul>
        {foods.map((food)=><FoodListItem  //함수안에서 this는 component의 this가 아님, this.props는 객체
                                    key={food.no}
                                    name={food.name} 
                                    quantity={food.quantity}/> )}
    </ul>
  )
}

export default FoodList