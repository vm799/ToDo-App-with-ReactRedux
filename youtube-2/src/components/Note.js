import React from 'react'
import { connect } from 'react-redux'
import { toggle_note } from '../redux/actions/notes.action'

const Note  = ({note: { date, note, id, isImportant }, toggle_note }) => {
  return (
    <div className= "card m-3"> 
        <div className="card-header">{date}</div>
        
        <div className="card-body">{note}</div>

        <div className="button_container">
        <button onClick = {() => toggle_note(id)} className="btn mb-2"> {isImportant? 'Remove from Important' : 'Add'} </button>
        <button onClick = {() => toggle_note(id)} className="btn btn_delete mb-2"> I'm complete! </button>
        </div>

    </div>
  )
}

export default connect(null, {toggle_note})(Note)