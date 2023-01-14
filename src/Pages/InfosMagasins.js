import React from "react";
import NavigationPages from "../Components/Barres/NavigationPages";

const InfosMagasins = () => {
  return (
    <div class="flex justify-center my-8">
      <div class="justify-center ">
        <NavigationPages />
        <div>
          <ul class="flex flex-col justify-center">
            <li class="mb-10 ">
              <h3 class="">Ecologic MONS</h3>
              <p> Rue de la Petite Guirlande 16, 7000 Mons</p>
              <p>mons@bde-group.be</p>
              <p>067/470.315</p>
              <p>Horaires Lundi : fermé</p>
              <p>Du mardi au samedi : ouverts de 10h à 13h & 13h30 à 18h</p>
            </li>
            <li class="mb-10">
              <h3>Ecologic GENVAL</h3>
              <p> Square Marie-Pouli,3 1310 La Hulpe</p>
              <p>genval@bde-group.be</p>
              <p>067/470.312</p>
              <p>Horaires Lundi : fermé</p>
              <p>Du mardi au samedi : ouverts de 10h à 13h & 13h30 à 18h</p>
            </li>
            <li class="mb-10">
              <h3>Ecologic IXELLES</h3>
              <p> Rue François Dons,1 1050 Ixelles</p>
              <p>ixelles@bde-group.be</p>
              <p>067/470.317</p>
              <p>Horaires Lundi : fermé</p>
              <p>Du mardi au samedi : ouverts de 10h à 13h & 13h30 à 18h</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfosMagasins;
