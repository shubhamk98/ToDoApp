import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import { addTodo, getAllToDo, updateTodo,deleteTodo } from "./utils/HandleApi";
import { ToastContainer } from "react-toastify";

function App() {
  const [todo, settodo] = useState([]);
  const [text, settext] = useState([]);
  const [isUpdating, setisUpdating] = useState(false);
  const [toDoId, settoDoId] = useState("");

  useEffect(() => {
    getAllToDo(settodo);
  }, []);


  const updateMode =(_id,text)=>{
    setisUpdating(true)
    settext(text)
    settoDoId(_id)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add your task...."
            value={text}
            onChange={(e) => settext(e.target.value)}
          />
          <button
            className="add"
            onClick={
              isUpdating
                ? () => updateTodo(toDoId,text,settodo,settext,setisUpdating)
                : () => addTodo(text, settext, settodo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </button>
          <ToastContainer  />
        </div>

        <div className="list">
          {todo.map((item) => (
            <Todo key={item._id} text={item.text} 
            updateMode={()=>updateMode(item._id,item.text)}
            deleteToDo={()=>deleteTodo(item._id,settodo)}/>
            ))}
            <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
