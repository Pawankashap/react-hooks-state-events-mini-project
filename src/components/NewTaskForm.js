import React,{useState} from "react";

function NewTaskForm({onTaskFormSubmit,categories}) {

  const [newItemFields,setNewItemFields]= useState({
    text:'',
    category:'Code'
  })

  function handleFields(event){
    const {name,value}=event.target
    setNewItemFields({...newItemFields,[name]:value})
  }
  return (
    <form onSubmit={(event)=>{
      event.preventDefault()
      onTaskFormSubmit(newItemFields)
      }} className="new-task-form">
      <label>
        Details
        <input onChange={handleFields} value={newItemFields.text} type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category" value={newItemFields.category} onChange={handleFields}>
          {/* render <option> elements for each category here */}
          {categories.map((category,index)=>(<option key={index}>{category}</option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
