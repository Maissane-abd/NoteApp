// Importation de la bibliothèque React pour créer des composants
import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

export default function NotesList() {
    // Utilisation du hook useSelector pour accéder à l'état des notes dans le store Redux
    const notes = useSelector(state => state.notes);

return (
    <div className='p-10 w-full'>
        <p className='text-xl text-slate-200 mb-6'>
            Bienvenue sur votre NoteApp
        </p>

        {/* Div pour afficher les notes */}
        <ul className='grid lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-6'>
           
            {/* Vérification de la présence de notes et affichage conditionnel */}
            {notes.list?.length > 0 && notes.list.map(note => (
              
              // Div pour chaque note avec des classes CSS pour le style
                <li 
                key={note.id}
                className='bg-slate-100 hover:bg-slate-50 p-4 rounded cursor-pointer'>
                
                    {/* Titre de la note */}
                    <Link to={`/note/${note.id}`} className="block p-4 w-full h-full ">
                <p className="text-lg font-semibold">{note.title}</p>
                
                
                    {/* Sous-titre de la note */}
                    <p className="text-gray-700">{note.subtitle}</p>
              </Link>
                </li>
            ))}
        </ul> 
    </div>
);

}
