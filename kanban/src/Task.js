import React, { useState } from "react";
import styles from "./assets/css/Task.css";
//배열을 상태에다 넣기

const Task = ({ name, done }) => {
  const [check, setCheck] = useState(done);

  const onChangeInputCheck = function (e) {
    const status = e.target.value === done ? "yes" : "no";
  };
  return (
    <li className={styles.TaskList__Task}>
      <input
        type="checkbox"
        value={status}
        checked={check === "yes"}
        onChange={onChangeInputCheck}
      />
      {name}
      <a href="#" className={styles.TaskList__Task__remove}></a>
    </li>
  );
};

export default Task;
