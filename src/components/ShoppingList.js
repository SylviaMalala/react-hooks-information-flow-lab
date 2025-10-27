import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    console.log("Selected Category:", selectedCategory);
    console.log("Item Category:", item.category);
    return selectedCategory === "All" || item.category === selectedCategory;
  });
  
  


  return (
    <div className="ShoppingList">
      <div className="Filter">
       <Filter onCategoryChange = {handleCategoryChange} />
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
