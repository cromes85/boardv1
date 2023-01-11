import React, { useState } from "react";

function AddText(props) {
  // État local pour stocker le texte à ajouter
  const [textToAdd, setTextToAdd] = useState("");

  // Fonction qui sera appelée lorsque le formulaire est soumis
  function handleSubmit(event) {
    // On empêche la page de se recharger
    event.preventDefault();

    // On vérifie que le texte n'est pas vide
    if (textToAdd) {
      // On appelle la fonction "addText" du composant parent (ici, "ZoneB")
      // en lui passant en paramètre le texte à ajouter
      // (on suppose qu'une telle fonction existe et qu'elle met à jour la zone de texte)
      props.addText(textToAdd);

      // On remet à zéro l'état du texte à ajouter
      setTextToAdd("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text-to-add">Texte à ajouter :</label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        type="text"
        id="text-to-add"
        value={textToAdd}
        onChange={(event) => setTextToAdd(event.target.value)}
      />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" type="submit">Ajouter</button>
    </form>
  );
}
export default AddText;
