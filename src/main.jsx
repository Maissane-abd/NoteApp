// Importation de React, la bibliothèque pour construire des interfaces utilisateur
import React from "react";

// Importation de ReactDOM pour rendre l'application React dans le DOM
import ReactDOM from "react-dom/client";

// Importation du composant principal de l'application
import App from "./App.jsx";

// Importation des styles globaux pour l'application
import "./index.css";

// Importation du store Redux configuré
import { store } from "./store.js";

// Importation du composant Provider de react-redux pour connecter Redux à React
import { Provider } from "react-redux";

// Création d'une racine React et rendu de l'application dans l'élément avec l'id "root"
ReactDOM.createRoot(document.getElementById("root")).render(
    // Utilisation du composant Provider pour fournir le store Redux à l'application
    <Provider store={store}>
        <App />
    </Provider>
);
