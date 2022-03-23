import React, { useEffect } from 'react'
import CreateNote from './components/CreateNote'
import AllNotes from './components/AllNotes'
import ImportantNotes from './components/ImportantNotes'
import { load_notes } from './redux/actions/notes.action'
import { store } from './redux/store'

const App = () => {
   
useEffect(()=>{
  store.dispatch(load_notes())
}, [])

  return (
    <div className='container mt-3 p-3'>
        <CreateNote />
        <hr/>
        <ImportantNotes />
        <hr/>
        <AllNotes />
        
    </div>
  )
}

export default App