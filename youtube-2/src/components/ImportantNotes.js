import React from 'react'
import Note from './Note'
import { connect } from 'react-redux'

const ImportantNotes = ({ notes }) => {
  return (
    <div className="importantNotes">
        <h4>Important Notes </h4>
        <div className="row">
        {
        notes.filter(note => note.isImportant === true && note.isComplete === false)
        .map(note => <Note note={note}  key={note.id} />)
        
        }
        </div>
    </div>
    
  )
}

const mapStateToProps = state =>({
  notes: state.notes_reducer.notes

})

export default connect(mapStateToProps)(ImportantNotes)