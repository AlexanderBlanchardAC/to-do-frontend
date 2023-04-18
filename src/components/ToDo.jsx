
import React from 'react'
import { AiTwotoneDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

const ToDo = ({ text, deleteToDo, updateItem }) => {
  return (
    <div className="eachTodo">
        <div className="todoText">
            {text}
        </div>
        <div className="iconControllers">
                <BiEdit className="icon" onClick={updateItem} />
                <AiTwotoneDelete className="icon" onClick={deleteToDo} />
        </div>
      
    </div>
  )
}

export default ToDo


import React from 'react'
import { AiTwotoneDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

const ToDo = ({ text, deleteToDo, updateItem }) => {
  return (
    <div className="eachTodo">
        <div className="todoText">
            {text}
        </div>
        <div className="iconControllers">
                <BiEdit className="icon" onClick={updateItem} />
                <AiTwotoneDelete className="icon" onClick={deleteToDo} />
        </div>
      
    </div>
  )
}

export default ToDo


