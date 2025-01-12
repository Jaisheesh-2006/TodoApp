import React from "react";
import { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({});
  const handleChange = (value) => {
    setInputValue({id:value,content:value,checked:false});
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //prevents default reloading
    onAddTodo(inputValue); //*Lifting state up
    setInputValue({id:"",content:"",checked:false}); //After adding, clearing the search
  };
  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            autoComplete="off"
            className="todo-input"
            value={inputValue.content}
            onChange={(event) => handleChange(event.target.value)}
          />
        </div>
        <div>
          <button className="todo-btn" type="submit">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};

export default TodoForm;
