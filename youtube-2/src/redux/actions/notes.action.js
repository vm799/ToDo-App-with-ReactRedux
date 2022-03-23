
import { db } from "../../firebase";
import { ADD_NOTE, TOGGLE_NOTE, LOAD_NOTES, SET_LOADER } from "../types";


export const add_new_note = (data) => async(dispatch) => { 

try{
     dispatch({
         type: SET_LOADER
     })

    await db.collection('notes').doc(data.id.toString()).set(data)

    dispatch({
        type: ADD_NOTE,
        payload: data
          })
} catch(error){
    console.log(error.message)
}
  
    
}

export const toggle_note = (id) => async dispatch => {

     try {

        dispatch({
            type: SET_LOADER
        })

        const snapshot  =  db.collection('notes').doc(id.toString())
        
        const data = (await snapshot.get()).data()
        
        await snapshot.update({
            isImportant: !data.isImportant
        })

dispatch({
        type: TOGGLE_NOTE,
        payload:id
        })

     }  catch(error){
        console.log(error.message)
     }

    
    
 }

 export const load_notes =() => async dispatch => {
     try{

    dispatch({
            type: SET_LOADER
    })
const snapshot = await db.collection('notes').get()
const all_notes = snapshot.docs.map(doc=>doc.data())

dispatch({
    type: LOAD_NOTES,
    payload: all_notes
})
     }catch(error){
        console.log(error.message)
     }
 }

