import React, { Component } from 'react'
import FoodListItem from './FoodListItem';

//부모에서 자식으로 데이터 전달
export default class FoodList extends Component {
render(){
    //const components=[]; //이게 함수로 바뀜
    //this.props.foods.forEach(function(food){
    //    components.push(<FoodListItem name={food.name} quantity={food.quantity}/>);
   // });

  //  const result=[1,2,3,4].map(function(e){
  //      return e*e;
  //  })
    
    //result===[1,4,9,16]; //새로운 요소를 만듦
    
   // const components=this.props.foods.map(function(food){
    //    return <FoodListItem name={food.name} quantity={food.quantity}/>;
   // });
   
    return(
        <ul>
           {this.props.foods.map((food)=><FoodListItem 
                                            name={food.name} 
                                            quantity={food.quantity}/> )}
        </ul>
    );
}
};

