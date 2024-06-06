import NotesList from "./components/NotesList"
import {useSelector, useDispatch} from "react-redux"
import { getNotesFromApi } from "./features/note"
import Sidebar from "./components/Sidebar"
import SideNotes  from "./components/SideNotes"
import {BrowserRouter, Routes, Route} from "react-router-dom" 


function App() {
  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes)
  console.log(notes)
  if (!notes.list){
    dispatch(getNotesFromApi())
  }

  return <div className="bg-slate-800 min-h-screen flex">
  <BrowserRouter>
  <Sidebar/> 
  <SideNotes/>
  <Routes>
    <Route path='/' element={<NotesList/>} />
  </Routes>
  </BrowserRouter>
  </div>
}

export default App
