import React, { useEffect, useState } from 'react';
import './style.css';

import Todo2 from '../images/todo2.svg';

// getting back from localStorage
const getLocalData = () => {
   const lists = localStorage.getItem("mytodolist");

   if(lists) {
      return JSON.parse(lists);
   } else {
      return [];
   }
};

const Todo = () => {
   const [ inputData, setInputData ] = useState('');
   const [ items, setItems ] = useState(getLocalData());
   const [ isEditItem, setIsEditItem ] = useState('');
   const [ toggleButton, setToggleButton ] = useState(false);

   // adding items
   const addItem = () => {
      if(!inputData) {
         alert("Please add Item");
      } 
      else if(inputData && toggleButton) {
         setItems(
            items.map((curElem) => {
               if(curElem.id === isEditItem) {
                  return { ...curElem, name: inputData };
               }
               return curElem;               
            })
         );
         setInputData([]);
         setIsEditItem(null);
         setToggleButton(false);
      }
      else {
         const myNewInputData = {
            id: new Date().getTime().toString(),
            name: inputData,
         };
         setItems([... items, myNewInputData]);
         setInputData('');
      }
   };

   // editing item
   const editItem = (index) => {
     const item_todo_edited = items.find((curElem) => {
      return curElem.id === index;
     })
     setInputData(item_todo_edited.name);
     setIsEditItem(index);
     setToggleButton(true);
   }

   // deleting items
   const deleteItem = (index) => {
      const updatedItem = items.filter((curElem) => {
       return curElem.id !== index;
      });
      setItems(updatedItem);
   }

   // removing all items
   const removeAll = () => {
      setItems([]);
   }

   // adding item to localStorage
   useEffect(() => {
      localStorage.setItem("mytodolist", JSON.stringify(items));
   }, [items])

  return (
    <>
      <div className="main-div">
         <div className="child-div">
            <figure>
               <img src={Todo2} alt="todologo" />
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
               {toggleButton ? (
                  <i className="far fa-edit add-btn" onClick={addItem}></i>
                  ) : (
                     <i className="fa fa-plus add-btn" onClick={addItem}></i>
                     )}
            </div>
            {/* show */}
            <div className="showItems">
               {items.map((curElem, index) => {
                  return (
                     <div className="eachItem" key={curElem.id}>
                        <h3>{ curElem.name }</h3>
                        <div className="todo-btn">
                           <i className="far fa-edit add-btn"
                              onClick={() => editItem(curElem.id)}
                           ></i>
                           <i className="far fa-trash-alt add-btn"
                              onClick={() => deleteItem(curElem.id)}   
                           ></i>
                        </div>
                     </div>
                  )
               })}
            </div>
            {/* hide */}
            <div className="showItems">
               <button className="btn effect04" data-sm-link-text="Remove All"
                  onClick={removeAll}   
               >
                  <span>CHECK LIST</span>
               </button>
               <p className='copy-right'> ©️ developer-rak</p>
            </div>
         </div>
      </div>
    </>
  )
}

export default Todo;