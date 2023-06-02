import {useState} from "react"

export function NewToDoForm(props){
   
    const [newItem,setNewItem]=useState("")

    function handleSubmit(e){
        e.preventDefault() /*prevents page from refreshing*/
        if(newItem === "")return

        props.onSubmit(newItem)

        setNewItem("")/*to empty input field */
      }

    return(
    <form onSubmit={handleSubmit} className="new-item-form">{/*class can't be used because it is a reserved keyword in js ,so className is used. */}
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input 
      type="text" 
      value={newItem} 
      onChange={e=> setNewItem(e.target.value)} 
      id="item"/>
    </div>
    <button className="btn">Add</button>
    </form>
    )
}