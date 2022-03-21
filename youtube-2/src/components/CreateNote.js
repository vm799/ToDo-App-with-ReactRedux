import React from 'react'
import { useState } from 'react'

import { store } from '../redux/store'

const CreateNote = () => {
const [note, setNote] = useState("") 

const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
        note,
    id:Math.floor(Math.random() *500),
    date: new Date().toJSON().slice(0,10),
    isImportant: false
  }
   
    store.dispatch({
      type:'ADD_NOTE',
      payload: data
    })
}

  return(
    <div> 
        <form onSubmit= {handleSubmit}> 
      <div className="form-group">
          <textarea  
          cols="3" 
          placeholder='Write your note' 
          className="form-control" 
          value={note}
          onChange={ e => setNote(e.target.value)}
          >
              </textarea>
              <button className="btn" type="submit">Add Note</button>
              </div>
  </form>
    </div>
  )
}

export default CreateNote