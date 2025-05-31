import React, { useState} from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";

const Todo = () => {
  const todoKey="reactTodo" //*Key for item stored in local storage

  const [task, setTask] = useState(()=>{
    const rawTodo=localStorage.getItem(todoKey);
    if(!rawTodo) return []
    return JSON.parse(rawTodo)
  });
  
  //todo add to local storage
  localStorage.setItem("reactTodo",JSON.stringify(task))
  
  const handleSubmit = (inputValue) => {
    const {id,content,checked}=inputValue
    if (!content) return; //empty string, dont add it

    const ifTodoContentMatched=task.find((currTask)=>currTask.content===content)
    if(ifTodoContentMatched) return;

    setTask((prev) => [...prev, {id,content,checked}]); //this means keep previous value and add i/p value

  };
  const handleClear = (e) => {
    setTask([]);
  };
  const handleDelete = (e) => {
    let newArr = task.filter((currTask) => currTask.content !== e);//here currTask is different
    setTask(newArr);
  };

  const handleChecked=(data)=>{
        const updatedTodo=task.map((curTask)=>{
             if(curTask.content===data){
              return {...curTask,checked:!curTask.checked}
             }
             else{
              return curTask
             }
        })
        setTask(updatedTodo)
  }
  

  return (
    <section className="todo-container">
      <header>
        <h1 style={{ fontSize: "30px" }}>Todo List</h1>
        <TodoDate/>
      </header>

      <TodoForm onAddTodo={handleSubmit} />

      <section>
        <ul className="myUnorderList">
          {task.map((currTask) => {
            return <TodoList key={currTask.id} checked={currTask.checked} data={currTask.content} handleDelete={handleDelete} handleChecked={handleChecked}/>
          })}
        </ul>
        <button
          className="clear-btn"
          style={
            task.length != 0
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
          onClick={handleClear}
        >
          Clear All
        </button>
      </section>
    </section>
  );
};

export default Todo;
