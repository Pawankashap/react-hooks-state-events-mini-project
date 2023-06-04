import React from "react";

function CategoryFilter({onButton,selectedButton,categories}) {
 
  return (
    <div className="categories">
      <h5>Category filters</h5>
         {categories.map((category,index)=>(
        <button key={index} className={onButton===category?'selected':''} onClick={()=>{selectedButton(category)}}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
