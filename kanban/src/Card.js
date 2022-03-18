import React, {useState} from 'react'
import styles from './assets/css/Card.css';
import TaskList from './TaskList';
// <TaskList tasks={tasks} /> 은 상태에 따라 어쩔 때는 있고,없어야됨
const Card = ({title, description, tasks}) => {
  const[showDetails, setShowDetails]=useState(false);

  return (
    <div className={styles.Card}>
        <div className={styles.Card__Title}>{title}</div>
        <div className={styles.Card__Details}>
            {description}
            <TaskList tasks={tasks} />  
        </div>
    </div>
  )
}

export default Card;