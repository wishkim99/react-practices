import React,{useState, useEffect} from 'react'
import Card from './Card'
import './assets/css/App.css';
import KanbanBoard from './KanbanBoard';

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(async () => {
    try {  
      const response = await fetch('/api/card', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: null
      });

      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if(json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }
      
      setCards(json.data);
    } catch(err) {
      console.log(err);      
    }  
  }, []);


  return (
    <div className={'App'}>
      <KanbanBoard cards={cards} />
    </div>
  )
}

export default App;