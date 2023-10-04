import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./Inputarea";

const date = new Date().toLocaleDateString();
const day = new Date().toLocaleDateString('en', { weekday: 'long' });

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    if(inputText==="")
    {
      return ;
    }
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
    <div classname="time">
      <h2>
      {date} {day}
      </h2>
    </div>
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>

      </div>
      <InputArea itemadd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default App;

