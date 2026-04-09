import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [data, setData] = useState([]);
  console.log(data, "222data");
  function addTodo(e) {
    if (todo.trim() !== "") {
      setData((prev) => [...prev, todo]);
      setTodo("");
    }
  }
  function deleteTodo(index){
//delete using filter
    // let newItems=data?.filter((item,idx)=>idx !==index)
    // setData(newItems)

    //delete using splice
    let newData =[...data]
    newData.splice(index,1)
    setData(newData)

  }

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={(e) => addTodo(e)}>Add todo</button>
      <div>
        {data?.length === 0
          ? "NO Todo to Display"
          : data?.map((item,index) => (
              <div key={index} style={{ display: "flex", gap: "10px" }}>
                <li>{item}</li>
                <button onClick={()=>deleteTodo(index)}>Delete Todo</button>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Todo;
