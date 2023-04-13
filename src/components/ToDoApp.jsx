import React, { useEffect, useState } from 'react';
import ToDo from './ToDo';
import { addToDo, getAllToDos, deleteToDo, updateToDo } from '../utils/ApiHandler';


const ToDoApp = () => {

    const [toDo, setToDo] = useState([])
    const [toDoText, setToDoText] = useState("")
    const [updating, setUpdating] = useState(false)
    const [toDoId, setToDoId] = useState("")


    useEffect(() => {
        getAllToDos(setToDo)
    }, [])

    const updateItem = (_id, toDoText) => {
        setUpdating(true)
        setToDoText(toDoText)
        setToDoId(_id)
    }

    // const makeListItem = (e) => {
    //     setToDoText(e.target.value)
    // }


  return (
    <div className="toDoApp">
        <div className="toDoAppContainer">
            <h1 className="title">Alexander's List</h1>
            <div className="top">
                <input
                    placeholder="Add to list..."
                    type="text"
                    value={toDoText}
                    onChange={(e) => setToDoText(e.target.value)}
                />
                <div className="addToDo"
                    onClick={updating ? () => updateToDo(toDoId, toDoText, setToDo, setToDoText, setUpdating) :
                     () => addToDo(toDoText, setToDoText, setToDo)}>
                    {updating ? "Update" : "Add"}
                </div>
            </div>
            <div className="list">
                {toDo.map((item) => <ToDo
                    key={item._id}
                    toDoText={item.toDoText}
                    updateItem = {() => updateItem(item._id, item.toDoText)}
                    deleteToDo = {() => deleteToDo(item._id, setToDo)}
                    />
                )}
            </div>
        </div>
      
    </div>
  )
}

export default ToDoApp;
