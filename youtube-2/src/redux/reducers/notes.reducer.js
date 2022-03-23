import { ADD_NOTE, TOGGLE_NOTE, LOAD_NOTES, SET_LOADER } from "../types";


const initialState = {
    notes:[],
    loading:false
}


const reducer = (previousState = initialState, action)=>{
    const { type, payload } = action;

switch(type){

    case SET_LOADER:
        return{
        ...previousState,
        loading:true
    
        }


    case ADD_NOTE:
        return {
            ...previousState,
            loading:false,
            notes:[...previousState.notes,payload]
        }
    
    // case TOGGLE_NOTE:
    //       const new_notes = previousState.notes.slice()
          
    //       const index = new_notes.findIndex(note => note.id === payload)
           
    //       const note = new_notes[index]
           
    //       const new_note = {
    //          ...note,
    //          isImportant: !note.isImportant
    //                        }
    //        new_notes[index] = new_note
          
    //        return {
    //            ...previousState,
    //            loading:false,
    //            notes: new_notes
    //        }
          
    case LOAD_NOTES:
            return {
                ...previousState,
                loading:false,
                notes:payload
            }

    default:
        return previousState
    }
}

export default reducer