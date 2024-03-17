import React, { useState } from 'react';
import './style.css';

const Todo = () => {
   const [ inputData, setInputData ] = useState('');

  return (
    <>
      <div className="main-div">
         <div className="child-div">
            <figure>
               <img src="/public/img/img.png" alt="todologo" />
               <figcaption>Add Your List Here 😊</figcaption>
            </figure>
            <div className="addItems">
               <input 
                  type='text' 
                  placeholder='✍️ Add Item' 
                  className='form-control'
                  value={inputData}
                  onChange={(e) => setInputData(e.target.value)}
               />
               <i className="fa fa-plus add-btn"></i>
            </div>
            {/* show */}
            <div className="showItems">
               <div className="eachItem">
                  <h3>Apple</h3>
                  <div className="todo-btn">
                  <i className="far fa-edit add-btn"></i>
                  <i className="far fa-trash-alt add-btn"></i>
                  </div>
               </div>
            </div>
            {/* hide */}
            <div className="showItems">
               <button className="btn effect04" data-sm-link-text="Remove All">
                  <span>CHECK LIST</span>
               </button>
            </div>
         </div>
      </div>
    </>
  )
}

export default Todo;