// Importation de la fonction createSlice depuis le toolkit Redux
import { createSlice } from "@reduxjs/toolkit";

// Définition de l'état initial avec une liste non définie
const initialState = {
    list: undefined
}

// Création du slice "notes" avec un état initial et des réducteurs (reducers)
export const notes = createSlice({
    name: "notes", // Nom du slice
    initialState, // État initial
    reducers: {
        // Réducteur pour ajouter des notes à partir de l'API
        addNotesFromApi: (state, action) => {
            // Mise à jour de l'état avec les données reçues dans l'action
            state.list = action.payload;
        },
        addNoteFromUser: (state, action) => {
            state.list.push(action.payload)
          },
          editNote: (state,action) => {
            const noteToEditIndex = state.list.findIndex(note => note.id === action.payload.id)
      
            state.list[noteToEditIndex] = action.payload
          },
        deleteNote: (state, action) => {
            state.list = state.list.filter(note => note.id !== action.payload)
          }
    }
})

// Fonction pour obtenir des notes à partir de l'API
export function getNotesFromApi(action) {
    return function (dispatch, getState) {
        // Effectuer une requête fetch pour récupérer les notes
        fetch("/data/notes.json")
            .then(response => response.json()) // Conversion de la réponse en JSON
            .then(data => {
                // Dispatch de l'action pour ajouter les notes à l'état
                dispatch(addNotesFromApi(data.notes));
            })
    }
}

// Exportation du réducteur addNotesFromApi pour qu'il puisse être utilisé
export const { addNotesFromApi, addNoteFromUser, editNote, deleteNote } = notes.actions;

// Exportation du réducteur du slice "notes"
export default notes.reducer;
