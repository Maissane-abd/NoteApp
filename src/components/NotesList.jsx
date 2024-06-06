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
        <div className='p-10 w-full'>
            <p className='text-xl text-slate-200 mb-6 '>
                Bienvenue sur votre NoteApp
            </p>
            <div className='grid lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-6'>
                {notes.list?.length > 0 && notes.list.map(note => (
                    <div className='bg-slate-100 hover:bg-slate-50 p-4 rounded cursor-pointer'>
                    <p className='text-lg font-semibold'>{note.title}</p>
                    <p className='text-gray-700'>{note.subtitle}</p>
                    </div>
                ))}
            </div> 
        </div>
    )
}
