import React from 'react'
import './TodoItem.css'
const TodoItem = (props) => {
    const {items , deletItems} = props ; 
    let length = items.length;
    const ListItems = length ? (
        items.map(item => {
            return(
               <div key={item.id} className="row text-center todo2">
                  <span className="col-7">{item.name}</span>
                  <span className="col-3">{item.age}</span>
                  <span onClick={() => deletItems(item.id)} className="col-2">&times;</span>
               </div>
            )
        })
    ) : (
        <p>Thire is no item to show</p>
    )
    return(
        <div>
            <div className="todo row">
                <span className="col-7">Name</span>
                <span className="col-3">Age</span>
                <span className="col-2">Action</span>
            </div>
            {ListItems}
        </div>
    )
}
export default TodoItem