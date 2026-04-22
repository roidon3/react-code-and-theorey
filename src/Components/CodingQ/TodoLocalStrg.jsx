//normal api call and store data
//search fun debounce it and usememeo
//store it in local storage
//and also make a checkbox for completed todo
import React, { useState,useEffect } from "react";


function TodoLocalStrg() {
  const [data, setData] = useState([]);
  const [todo, setTodo] = useState("");

    useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem("todos"));
  if (storedTodos) {
    setData(storedTodos);
  }
}, []);

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(data));
}, [data]);



  function addTodo(e) {
    if (todo.trim() !== "") {
      setData([...data, {text:todo,completed:false}]);
      setTodo("");
    }
  }
  function deleteTodo(id){
    //delete using filter
    let filData=data.filter((ele,idx)=>idx !==id)
    setData(filData)

    //delete using splice
    // let newData=[...data]
    // newData.splice(id,1)
    // setData(newData)

  }
function completed(id) {
  const updated = data.map((item, index) => {
    if (index === id) {
      return { ...item, completed: !item.completed };
    }
    return item;
  });

  setData(updated);
}
  console.log(data, "data");
  return (
    <div>
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="enter the Todo"
        />
        <button onClick={(e) => addTodo(e)}>Submit</button>
        <h1>Todo List</h1>
{data.map((ele, index) => {
  return (
    <div
      key={index}
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        marginLeft: "10px",
      }}
    >
      <div
        style={{
          textDecoration: ele.completed ? "line-through" : "none",
        }}
      >
        {ele.text}
      </div>

      <button onClick={() => deleteTodo(index)}>delete</button>

      <button onClick={() => completed(index)}>
        {ele.completed ? "Undo" : "Completed"}
      </button>
    </div>
  );
})}
      </div>
    </div>
  );
}

export default TodoLocalStrg;
