import ReactDOM from 'react-dom';
import {App} from '../src/App.js';

//document.getElementById("root").appendChild(App()); // Dom api 사용하지 않음
ReactDOM.render(App(), document.getElementById('root')); //reactDom에 반영
