import React, { useEffect, useState } from 'react'
const TodoList = () => {
  const [todo, settodo] = useState("");
  const [todolist, settodolist] = useState([]);
  const handlesubmit = (e) => {
    e.preventDefault();
 
    console.log(todolist.indexOf(todo));
    if (todolist.indexOf(todo) === -1) {
      settodolist([...todolist, todo]);
      let str=JSON.stringify([...todolist, todo])
      localStorage.setItem("todoItem",str)
      settodo("");
    } else {
      alert("Duplicate");
    }
  };
  const delItem = (item) => {
    
    let res = todolist.filter((value) => value !== item);
    console.log("res", res);
    settodolist(res);
 
    localStorage.setItem("todoItem",JSON.stringify(res))
  };

  useEffect(()=>{
    let item=JSON.parse(localStorage.getItem("todoItem"))
   console.log("todoitem",item)
   if(item?.length>0){
    settodolist(item)
   }
  },[])
  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
      
        <h2 className='text-center text-decoration-underline mb-4'> TO DO LIST</h2>
        <div className='text-center' style={{width:"50%"}}>
        <form onSubmit={handlesubmit}>
          <div className='d-flex' >
          <input
            value={todo}
            type="text"
            className='form-control bg-light'
            placeholder='Enter Task...'
            onChange={(e) => {
              settodo(e.target.value);
            }}
          />
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          </div>
        </form>
        </div>

      <ul className='mt-3'>
        {todolist.map((item, index) => (
          <li className='row border p-2 border rounded mb-2 bg-light' key={index}>
            <div className="col-9 text-break ">{item}</div>
            <div className="text-end col-3" onClick={() => delItem(item)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="red" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
             
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default TodoList