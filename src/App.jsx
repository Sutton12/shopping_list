import {useEffect, useState} from 'react'
import { nanoid } from 'nanoid'
import './style.css'
import List from "./components/List"
import CompletedList from "./components/CompletedList"
import AddItem from "./components/AddItem"
import NoItems from "./components/NoItems"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [listItems, setListItems] = useState(() => JSON.parse(localStorage.getItem("list")) || [])
  const [showCompleted, setShowCompleted] = useState(false)
  const [addingItem, setAddingItem] = useState(false)
  const [newItem, setNewItem] = useState("")
  const [listTitle, setListTitle] = useState("Shopping List")


  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(listItems))
  }, [listItems])

  function deleteItem(id){
    const newList = []
    listItems.map(item => {
      if (item.id !== id) {
        newList.push({
          ...item
        })
      }
    })
    setListItems(newList) 
  }

  function toggleCompletedList(){
    setShowCompleted(!showCompleted)
  }

  function toggleComplete(id){
    const newList = []
    listItems.map(item => {
      if (item.id === id){
        newList.push({
          ...item,
          isComplete: !item.isComplete
        })
      }else {
        newList.push({
          ...item
        })
      }
    })
    setListItems(newList)    
  }

  function countCompleted(){
    var totalComplete = 0
    listItems.map(item => {
      item.isComplete ? totalComplete++ : null
    })
    return totalComplete
  }

  function changeItem(event, id){
    const newList = []
    listItems.map(item => {
      if(item.id === id){
        newList.push({
          ...item,
          value: event.target.value
        })
      }else {
        newList.push({
          ...item
        })
      }
    })
    setListItems(newList)
  }

  function updateNewItem(event){
    setNewItem(event.target.value)
  }

  function addNewItem(event){
    event.preventDefault()
    if(newItem){
      const newItemObj = {
        id: nanoid(),
        value: newItem,
        isComplete: false
      }    
      setListItems(prevList => {
        return [...prevList, newItemObj]
      })
      toggleAdd()
    }
  }

  function toggleAdd(){
    setAddingItem(!addingItem)
    setNewItem("")
  }

  function clearAll(){
    setListItems([])
  }



  return (
    <main>
      <div className="heading">
        {/* <h1>{listTitle}</h1> */}
        <small
          className="clear-all"
          onClick={clearAll}
        >
          Clear All
        </small>
      </div>

      <List
        items={listItems}
        deleteItem={deleteItem}
        toggleComplete={toggleComplete}
        handleChange={changeItem}
      />

      {listItems.filter((item) => !item.isComplete).length === 0 ? <NoItems /> : null}

      {countCompleted() > 0 
        ? 
        <div className="show-completed">
          <h4
          onClick={toggleCompletedList}
          >
          {showCompleted
          ? "Hide completed items"
          : "Show Completed Items"
          }
        </h4>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={showCompleted ? "completed-open show-completed-icon" : "show-completed-icon"} 
        />
      </div>
      : null}
       

      {showCompleted && <CompletedList
        items={listItems}
        deleteItem={deleteItem}
        toggleComplete={toggleComplete}
        handleChange={changeItem}        
      />}

      <AddItem
        newItem={newItem}
        addingItem={addingItem}
        updateNewItem={updateNewItem}
        addNewItem={addNewItem}
        toggleAdd={toggleAdd}

      />
    </main>

  )
    
}

export default App
