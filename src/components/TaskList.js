import React from "react";
import Task from "./Task";

function TaskList({tasks,deletedItem}) {
  //const [tasksList, setTaskList] = useState(TASKS);
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <ul className="Items">
        {tasks.map((item, index) => (<Task deletedItem={deletedItem} key={index} text={item.text} category={item.category }/>))}
      </ul>
    </div>
  );
}

export default TaskList;
