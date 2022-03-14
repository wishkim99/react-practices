import React, {Component} from 'react'
import FoodList from './FoodList';

export default class App extends Component {
render(){ //반드시 오버라이딩 해줘야하는 애를 render
    return(
    <div id="App">
        <FoodList/>
    </div>
    );
    }
}



