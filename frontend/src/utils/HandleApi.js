import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const baseUrl = "http://localhost:5000/"

const getAllToDo = (setToDo)=>{
    axios.get(baseUrl)
    .then(({data})=>{
        console.log(data);
        setToDo(data)
    })
}

const addTodo=(text,settext,setToDo)=>{
    axios.post(`${baseUrl}save`,{text})
    .then((data)=>{
        settext("")
        getAllToDo(setToDo)
    })
    .catch((err)=>console.log(err))
}

const updateTodo=(toDoId,text,setToDo,settext,setIsUpdating)=>{
    axios.post(`${baseUrl}update`,{_id:toDoId,text})
    .then((data)=>{
        settext("")
        setIsUpdating(false)
        getAllToDo(setToDo)
        toast.success('Item Updated!', {
            position: 'top-right',
            autoClose: 2000,
            toastClassName: 'custom-toast', 
            bodyClassName: 'custom-toast-body',
        });
    })
    .catch((err)=>console.log(err))
}


const deleteTodo=(_id,setToDo)=>{
    axios.post(`${baseUrl}delete`,{_id})
    .then((data)=>{
        getAllToDo(setToDo)
        toast.error('Item deleted!', {
            position: 'top-right',
            autoClose: 2000, 
        });
    })
    .catch((err)=>console.log(err))
}

export {getAllToDo,addTodo,updateTodo,deleteTodo}