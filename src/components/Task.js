import React from "react";

function Task({text,category,deletedItem}) {
  // function handleDelete (event){
  //   console.log(event.target.id)
  //   const itemName= event.target.id;
  //   const updatedItems = tasksList.filter(item => item.text !== itemName);
  //    console.log(updatedItems)
  //    setTaskList(updatedItems)
  // }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={()=>deletedItem(text)} id={text}  className="delete">X</button>
    </div>
  );
}

export default Task;
