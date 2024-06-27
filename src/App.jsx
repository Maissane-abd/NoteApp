import NotesList from "./components/NotesList"
import {useSelector, useDispatch} from "react-redux"
import { getNotesFromApi } from "./features/note"
import Sidebar from "./components/Sidebar"
import SideNotes  from "./components/SideNotes"
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import Edit from "./components/Edit"
import DisplayedNote from "./components/DisplayedNotes"


function App() {
  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes) // Sélectionne l'état des notes depuis le store

  console.log(notes)

  // Vérifie si la liste de notes n'est pas encore chargée, puis lance une action pour les récupérer depuis une API pour qu'elle soit sauvegarder en mémoire
  if (!notes.list){
    dispatch(getNotesFromApi())
  }

  return <div className="bg-slate-800 min-h-screen flex">
  <BrowserRouter>
  <Sidebar/> 
  <SideNotes/>
  <Routes>
        <Route path="/" element={<NotesList />} />
        <Route path="/note/:id" element={<DisplayedNote />} />
        <Route path="/editer" element={<Edit />} />
        <Route path="/editer/:id" element={<Edit />} />
  </Routes>
  </BrowserRouter>
  </div>
}

export default App
