import React from 'react'
import {useSelector} from "react-redux"

export default function SideNotes() {
    const notes = useSelector (state => state.notes)
  return (
    <aside className="shrink-0 bg-slate-100 text-slate-900 w-[275px] flex flex-col items-center pt-2 border-r border-gray-300">
      <p className="w-full text-center py-6 px-4 text-2xl text-slate-800 font-semibold border-b border-gray-300">Mes notes</p>
      <ul className="w-full divide-y divide-slate-300">
        {notes.list && notes.list.map(note => (
          <li className="relative p-4 hover:bg-slate-200 cursor-pointer">
              <p className="block text-xl text-slate-900">{note.title}</p>
              <p className="block text-lg text-slate-800">{note.subtitle}</p>
          </li>
        ))}
      </ul>
    </aside> 
  )
}
