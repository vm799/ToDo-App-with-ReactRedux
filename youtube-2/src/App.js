import React, { useEffect } from 'react'
import CreateNote from './components/CreateNote'
import AllNotes from './components/AllNotes'
import ImportantNotes from './components/ImportantNotes'
import { load_notes } from './redux/actions/notes.action'
import { store } from './redux/store'
import { connect } from 'react-redux'

const App = ( {loading} ) => {
   
useEffect(()=>{
  store.dispatch(load_notes())
}, [])

  return (
    <div className='container mt-3 p-3'>
        <CreateNote />
        <hr/>
        {
          loading &&  <div className='text-center'>
            <div className = "spinner-border my-3" /></div>
           
        }
       
        <ImportantNotes />
        <hr/>
        <AllNotes />
        
    </div>
  )
}
const mapStateToProps = state =>({
 loading:state.notes_reducer.loading
})

export default connect(mapStateToProps  )(App)