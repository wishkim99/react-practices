import React from 'react';
import styles from './assets/css/TaskList.css';
import Task from './Task';
import PropTypes from 'prop-types';

const TaskList = ({ tasks }) => {
  return (
    <div className={styles.TaskList}>
        <ul>
            {tasks.map(task => <Task
                                    key={task.no}
                                    card_no={task.no}
                                    name={task.name}
                                    done={task.done} 
                                    task={task}/> )}
            <input 
              type='text' 
              className={styles.TaskList__add_task}
              placeholder={'테스크 추가'}
              onKeyPress={e=>{
                if(e.key==='Enter'){
                  console.log(`call notifyAddTask(${e.target.value})`);
                  // callback(e.target.value);
                }
              }}/>
        </ul>
    </div>     
  );
}

// TaskList.propTypes = {
//   callback: PropTypes.func.isRequired
// }


export default TaskList