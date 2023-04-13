import React from 'react'
import { AiTwotoneDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

const ToDo = ({ toDoText, deleteToDo, updateItem }) => {
  return (
    <div className="eachTodo">
        <div className="todoText">
            {toDoText}
            <div className="iconControllers">
                <BiEdit className="icon" onClick={updateItem} />
                <AiTwotoneDelete className="icon" onClick={deleteToDo} />
            </div>
        </div>
      
    </div>
  )
}

export default ToDo

