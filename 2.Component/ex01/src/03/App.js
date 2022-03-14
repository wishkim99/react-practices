import React from 'react'
import FoodList from './FoodList';

const App = function() {

    const foods=[{
        no:1,
        name: 'Bread',
        quantity:40
    },{
        no:2,
        name: 'Egg',
        quantity:80
    },{
        no:3,
        name: 'Milk',
        quantity:50
    }];

  return (
    <div id="App">
        <FoodList foods={foods}/>
    </div>
  )
}

export default App