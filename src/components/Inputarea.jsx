import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';


function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} placeholder="add task" />
      <button
        onClick={() => {
          props.itemadd(inputText);
          setInputText("");
        }}
      >
        <span><AddIcon/></span>
      </button>
    </div>

  );
}

export default InputArea;
