export function TodoItem({completed, id , title,toggleTodo,deleteTodo}){
    return(
        <li>
        <label>
          <input type="checkbox" checked={completed}
          onChange={e=>toggleTodo(id,e.target.checked )}/>
          {title}
        </label>
        <button onClick={()=> deleteTodo(id)} className="btn btn-danger">Delete</button>
        {/* in onClick arrow function should be used or it will return the value of the function */}
      </li>
    )
    
}