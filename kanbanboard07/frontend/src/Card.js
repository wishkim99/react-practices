import React, {useState, useEffect} from 'react'
import styles from './assets/scss/Card.scss';
import TaskList from './TaskList';

const Card = ({no,title, description}) => {
  const [tasks, setTasks] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  
  const getTask = async function(card_no){
    console.log(card_no);
    try {
        const response = await fetch(`/api/task?cardNo=${card_no}`, {
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: null
        });
        
        if(!response.ok) {
            console.log("error:", response.status, response.statusText);
            throw new Error(`${response.status} ${response.statusText}`);
        }
        
        const json = await response.json();
        
        if(json.result !== 'success') {
            console.log("error:", json.message);
            throw new Error(`${json.result} ${json.message}`);
        }
        
        setTasks(json.data);
    } catch(err) {
        console.log(err);
    }

    getTask();
}

const insertTask = async function (value, no) {

  var data = new Object();
  data.card_no = no;
  data.name = value;
  console.log(data);
  try {
    const response = await fetch(`/api/task`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const json = await response.json();

    if (json.result !== 'success') {
      throw new Error(`${json.result} ${json.message}`);
    }
    setTask([json.data, ...task]);
  } catch (err) {
    console.log(err);
  }
}
  return (
    <div className={styles.Card}>
        <div
          className={showDetails ? [styles.Card__Title, styles.Card__Title__open].join(' ') : styles.Card__Title}
          onClick={() => {
            console.log(`fecth task(/api/task?cardNo=${no}...`);
            getTask(no);
            setShowDetails(!showDetails);
          }}>
          {title}
        </div>
        {
          showDetails ? 
            <div className={styles.Card__Details}>
              {description}
              <TaskList tasks={tasks} insertTask={insertTask}
              
              />
            </div> :
            null
        }
    </div>
  )
}

export default Card;
