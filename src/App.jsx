import NotesList from "./components/NotesList"
import {useSelector, useDispatch} from "react-redux"
import { getNotesFromApi } from "./features/note"


function App() {
  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes)
  console.log(notes)
  if (!notes.list){
    dispatch(getNotesFromApi())
  }
  return <>
  <NotesList/>
  </>
}

export default App
