// Importation de la fonction configureStore depuis la bibliothèque @reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";

// Importation du slice "notes" depuis le fichier ./features/note
import notes from "./features/note";

// Configuration du store Redux
export const store = configureStore({
    // Définition des réducteurs pour le store
    reducer: {
        // Ajout du réducteur du slice "notes" sous la clé "notes"
        notes
    }
});
