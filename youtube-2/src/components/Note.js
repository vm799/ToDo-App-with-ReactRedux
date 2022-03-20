import React from 'react'

const Note  = ({note: { date, note, id, isImportant }, toggle_note }) => {
  return (
    <div className= "card m-3"> 
        <div className="card-header">{date}</div>
        <div className="card-body">{note}</div>
        <button onClick = {() => toggle_note(id)} className="btn"> {isImportant? 'Remove from Important' : 'Add'} </button>
    </div>
  )
}

export default Note