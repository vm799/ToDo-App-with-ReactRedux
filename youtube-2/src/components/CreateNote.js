import React from 'react'
import { useState } from 'react'

const CreateNote = () => {
const [note, setNote] = useState("") 

const handleSubmit = (e) => {
    e.preventDefault()
    const data = {note}
    console.log(data)
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
              <button class="btn" type="submit">Add Note</button>
              </div>
  </form>
    </div>
  )
}

export default CreateNote