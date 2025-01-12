import React from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
const TodoList = ({checked,data,handleDelete,handleChecked}) => {
    
  return (
    <li  className="todo-item">
      <span style={{ width: "70%" }} className={checked?'checkedList':'unCheckedList'}>{data}</span>
      <div>
        <button className="check-btn" onClick={()=>handleChecked(data)}>
          <MdCheck />
        </button>
        <button className="delete-btn" onClick={() => handleDelete(data)}>
          <MdDeleteForever />
        </button>
      </div>
    </li>
  );
};

export default TodoList;
