import React, { useState, useRef } from "react";
import Office365 from "./OutilsZoneB/Office365";
import AddText from "./OutilsZoneB/AddText";
import MyComponent from "./Barres/MyComponent";
import Outils from "./OutilsZoneB/Outils";

function ZoneB() {
  const [buttonNames, setButtonNames] = useState([]);
  const textInput = useRef(null);
  const [text, setText] = useState(""); // nouvel état pour le texte ajouté

  function handleButtonClick(buttonName) {
    const newButtonNames = [...buttonNames, buttonName];
    setButtonNames(newButtonNames);
    localStorage.setItem("buttonNames", JSON.stringify(newButtonNames));
  }

  function handleClearButtonClick() {
    setButtonNames([]);
    setText(""); // met à jour l'état du texte ajouté
    localStorage.setItem("buttonNames", "");
  }

  function handleCopyButtonClick() {
    textInput.current.select();
    document.execCommand("copy");
  }

  const buttonNamesString =
    buttonNames.join("\n") || localStorage.getItem("buttonNames");
  const inputValue =
    buttonNamesString && buttonNamesString.length > 1000
      ? buttonNamesString.substring(0, 500)
      : buttonNamesString || "";

  // fonction pour ajouter du texte à la zone de texte
  function addText(newText) {
    setText(text + newText + "\n"); // met à jour l'état du texte ajouté en concaténant le nouveau texte
  }

  return (
    <div class="m-8">
      <div class=" grid grid-cols-3 gap-4 mt-3 mx-3">
        <div class="border mx-3 py-3 ">
          <p>
            <textarea
              class="w-full"
              ref={textInput}
              value={text + inputValue} // concatène le texte ajouté et le texte existant
              // readOnly
              contentEditable
              style={{
                whiteSpace: "pre-wrap",
                minHeight: "100px",
                minWidth: "100px",
                height: "auto",

                overflowY: "scroll",
                overflowX: "scroll",
                textAlign: "left",
                verticalAlign: "top",
              }}
            />
          </p>
          <div class="w-full">
            <AddText addText={addText} />
            <div class="h-10 w-16 my-2  p-1.5 bg-blue-500 hover:bg-blue-700 text-white font-bold px-2.5 border border-blue-700 rounded">
              {" "}
              <button onClick={handleClearButtonClick}>Clear</button>
            </div>
            <div class="h-10 w-16 my-2  p-1.5 bg-blue-500 hover:bg-blue-700 text-white font-bold px-2.5 border border-blue-700 rounded">
              <button onClick={handleCopyButtonClick}>Copy</button>
            </div>
          </div>
        </div>
        <div class=" border">
          
            <Office365 onButtonClick={handleButtonClick} />
         
        </div>
        <div class="mx-6 border w-full">
          <Outils />
        </div>
      </div>
    </div>
  );
}

export default ZoneB;
