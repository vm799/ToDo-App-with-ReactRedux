import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add_new_note } from '../redux/actions/notes.action'

const CreateNote = () => {
const [note, setNote] = useState("") 

const dispatch = useDispatch()

const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
        note,
        id:Math.floor(Math.random() *500),
        date: new Date().toJSON().slice(0,10),
        isImportant: false
  }
   dispatch(add_new_note(data))
   
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

// export default connect(null, {add_new_note})(CreateNote)
export default CreateNote