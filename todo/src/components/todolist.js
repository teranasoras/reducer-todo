import listitem from './todo';
import listform from './todoform';
import React, {useState, useReducer} from 'react';
import { MyReducer, initialstate, ADD_TODOS, TOGGLE_TODOS, COMPLETE_TODO} from "../reducer";


export default function List(){
const [liststate, dispatch] = useReducer(MyReducer, initialstate)

const [newitem, setNewitem] = useState()
const handleChanges = e => {
    setNewitem(e.target.value);
  };


  return(
      <div className = 'thelist'>
         {liststate.map(item => (
             <div onClick ={() =>{
                dispatch({type: TOGGLE_TODOS, payload:item.id})}} className = 'task'>Task: {item.task}
                </div>
         ))} 

            <input
            type='text'
            value={newitem}
            name='tasktype'
            onChange={handleChanges}></input>
          <button onClick ={() =>{
              dispatch({type: ADD_TODOS, payload: newitem})
          }}>submit</button>
          <button onClick ={() =>{
              dispatch({type: COMPLETE_TODO, payload: newitem})
          }}>clear completed</button>

      </div>
  )

}