// Importation de la bibliothèque React pour créer des composants
import React from 'react';

// Importation du hook useSelector de react-redux pour accéder à l'état du store Redux
import { useSelector } from "react-redux";

// Définition et exportation par défaut du composant fonctionnel NotesList
export default function NotesList() {
    // Utilisation du hook useSelector pour accéder à l'état des notes dans le store Redux
    // Cette ligne extrait la partie de l'état global qui correspond aux notes
    const notes = useSelector(state => state.notes);

    // Rendu du composant NotesList
    // Pour l'instant, il retourne simplement un div avec le texte "NotesList"
    return (
        <div>NotesList</div>
    );
}
