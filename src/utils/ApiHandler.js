import axios from 'axios';

const baseUrl = "https://alexander-to-do.onrender.com"


const getAllToDos = (setToDo) => {
    axios.get(baseUrl)
    .then(({ data }) => {
        console.log('data --->', data);
        setToDo(data)
    })
}

const addToDo = (text, setText, setToDo) => {
    axios.post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("")
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

const updateToDo = (toDoId, text, setToDo, setText, setUpdating) => {
    axios.post(`${baseUrl}/update`, { _id: toDoId, text })
    .then((data) => {
        setText("")
        setUpdating(false)
        getAllToDos(setToDo)
    })
    .catch((err) => console.log(err))
}

export { getAllToDos, addToDo, deleteToDo, updateToDo}