import { useState, useEffect } from "react"

export default function Edit() {

  const [inputsStates, setInputsStates] = useState({
    title: "",
    subtitle: "",
    bodyText: "",
  })
  const [showValidation, setshowValidation] = useState({
    title: false,
    subtitle: false,
    bodyText: false,
  })

  return (
    <div className="w-full p-10">
      <p className="text-slate-100 text-xl mb-4">Ajouter une note</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="mb-2 block text-slate-100">
          Le titre
        </label>
        <input
          onChange={e =>
            setInputsStates({ ...inputsStates, title: e.target.value })
          }
          value={inputsStates.title}
          className="p-2 text-md block w-full rounded bg-slate-200"
          type="text"
          id="title"
          spellCheck="false"
        />
        {showValidation.title && (
          <p className="text-red-400 mb-2">Veuillez renseigner un titre.</p>
        )}

        <label htmlFor="subtitle" className="mb-2 mt-4 block text-slate-100">
          Le sous-titre
        </label>
        <input
          onChange={e =>
            setInputsStates({ ...inputsStates, subtitle: e.target.value })
          }
          value={inputsStates.subtitle}
          className="p-2 text-md block w-full rounded bg-slate-200"
          type="text"
          id="subtitle"
          spellCheck="false"
        />
        {showValidation.subtitle && (
          <p className="text-red-400 mb-2">
            Veuillez renseigner un sous-titre.
          </p>
        )}

        <label htmlFor="bodyText" className="mb-2 mt-4 block text-slate-100">
          Contenu de la note
        </label>
        <textarea
          spellCheck="false"
          onChange={e =>
            setInputsStates({ ...inputsStates, bodyText: e.target.value })
          }
          value={inputsStates.bodyText}
          id="bodyText"
          className="w-full min-h-[300px] p-2 rounded bg-slate-200"
        ></textarea>
        {showValidation.bodyText && (
          <p className="text-red-400 mb-2">Veuillez écrire du contenu.</p>
        )}

        <button className="mt-4 px-3 py-1 bg-slate-100 rounded">
          Enregistrer
        </button>
      </form>
    </div>
  )
}
