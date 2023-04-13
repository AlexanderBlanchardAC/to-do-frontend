import axios from 'axios';

const baseUrl = "https://alexander-to-do.onrender.com"

const getAllToDos = (setToDo) => {
    axios.get(baseUrl)
    .then(({ data }) => {
        console.log('data --->', data);
        setToDo(data)
    })
}

const addToDo = (toDoText, setToDoText, setToDo) => {
    axios.post(`${baseUrl}/save`, { toDoText} )
        .then((data) => {
            console.log(data);
            setToDoText("")
            getAllToDos(setToDo)
        })
        .catch((err) => console.log(err))
}

const deleteToDo = (_id, setToDo) => {
    axios.post(`${baseUrl}/delete`, { _id})
    .then((data) => {
        console.log(data)
        getAllToDos(setToDo)
    })
    .catch((err) => console.log(err))
}

const updateToDo = (toDoId, toDoText, setToDo, setToDoText, setUpdating) => {
    axios.post(`${baseUrl}/update`, { _id: toDoId, toDoText })
    .then((data) => {
        setToDoText("")
        setUpdating(false)
        getAllToDos(setToDo)
    })
    .catch((err) => console.log(err))
}

export { getAllToDos, addToDo, deleteToDo, updateToDo}